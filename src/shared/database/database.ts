// src/database.ts
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const mongoURI: string = process.env.MONGO_URI || 'mongodb://localhost:27017/defaultdb';

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('MongoDB connected!');
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  }
};

export default connectDB;
