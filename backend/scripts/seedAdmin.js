import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import dns from 'dns';
import User from '../src/models/User.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env') });

// Force Google DNS resolution for Node to resolve MongoDB SRV records
try {
  dns.setServers(['8.8.8.8', '8.8.4.4']);
} catch (e) {
  console.warn('Could not set custom DNS servers:', e.message);
}

const seedAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    const admins = [
      { email: 'office@pranjalsarkar.com', role: 'super_admin' },
      { email: 'admin@pranjal.com', role: 'admin' },
    ];

    for (const admin of admins) {
      let user = await User.findOne({ email: admin.email });
      if (user) {
        console.log(`${admin.role} already exists:`, user.email);
      } else {
        user = new User({
          email: admin.email,
          role: admin.role,
        });
        await user.save();
        console.log(`✅ Successfully created ${admin.role}:`, user.email);
      }
    }

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding admin:', error);
    process.exit(1);
  }
};

seedAdmin();
