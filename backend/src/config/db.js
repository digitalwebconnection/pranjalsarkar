import mongoose from 'mongoose';
import logger from '../utils/logger.js';
import dotenv from 'dotenv';
import dns from 'dns';

// Force Google DNS resolution for Node to resolve MongoDB SRV records
try {
  dns.setServers(['8.8.8.8', '8.8.4.4']);
} catch (e) {
  logger.warn('Could not set custom DNS servers:', e.message);
}


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    logger.info(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    logger.error(`MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
