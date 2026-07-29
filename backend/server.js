import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { initSentry, Sentry } from './src/config/sentry.js';
import connectDB from './src/config/db.js';
import authRoutes from './src/routes/auth.js';
import leadRoutes from './src/routes/leads.js';

// Load environment variables
dotenv.config();

// Initialize Sentry error tracking early
initSentry();

const app = express();

// Configure CORS
const allowedOrigins = [];
if (process.env.FRONTEND_URL) {
  process.env.FRONTEND_URL.split(',').forEach(origin => {
    const trimmed = origin.trim().replace(/\/$/, '');
    if (trimmed) {
      allowedOrigins.push(trimmed);
      if (trimmed.startsWith('http://')) {
        allowedOrigins.push(trimmed.replace('http://', 'https://'));
      } else if (trimmed.startsWith('https://')) {
        allowedOrigins.push(trimmed.replace('https://', 'http://'));
      } else {
        allowedOrigins.push(`https://${trimmed}`);
        allowedOrigins.push(`http://${trimmed}`);
      }
    }
  });
}

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    const cleanOrigin = origin.replace(/\/$/, '');
    if (cleanOrigin.endsWith('.vercel.app') || cleanOrigin.endsWith('.onrender.com')) {
      return callback(null, true);
    }
    if (!process.env.FRONTEND_URL || allowedOrigins.includes('*') || process.env.FRONTEND_URL === '*') {
      return callback(null, true);
    }
    if (allowedOrigins.includes(cleanOrigin)) {
      return callback(null, true);
    }
    if (cleanOrigin.startsWith('http://localhost:') || cleanOrigin.startsWith('http://127.0.0.1:')) {
      return callback(null, true);
    }
    const localIpPattern = /^http:\/\/(192\.168|10|172\.(1[6-9]|2\d|3[0-1]))\.\d{1,3}\.\d{1,3}(:\d+)?$/;
    if (localIpPattern.test(cleanOrigin)) {
      return callback(null, true);
    }
    return callback(null, true);
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to Database
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/leads', leadRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('CRM API is running.');
});

// Sentry Error Handler
Sentry.setupExpressErrorHandler(app);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: err.message || 'Something went wrong on the server!'
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT} (accessible on all network interfaces)`);
});
