import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes';
import eventRoutes from './routes/eventRoutes';
import messageRoutes from './routes/messageRoutes';


// Load environment variables based on NODE_ENV
dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const app = express();

// CORS configuration
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/messages', messageRoutes);

// Basic test route
app.get('/', (req, res) => {
  res.json({ message: 'Server is running' });
});

// // Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err: any) => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
