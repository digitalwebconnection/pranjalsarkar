import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import User from '../src/models/User.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const seedAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    const adminEmail = 'bhargav.digitalwebconnection@gmail.com';

    let user = await User.findOne({ email: adminEmail });
    if (user) {
      console.log('Super Admin already exists:', user.email);
    } else {
      user = new User({
        email: adminEmail,
        role: 'super_admin'
      });
      await user.save();
      console.log('✅ Successfully created Super Admin:', user.email);
    }

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding admin:', error);
    process.exit(1);
  }
};

seedAdmin();
