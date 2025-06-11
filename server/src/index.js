// index.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import dbConnect from './db/connection.js';
import inquiryRoutes from './routes/inquiryRoute.js';
import authRoutes from './routes/authRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import errorMiddleware from './middlewares/errorMiddleware.js';
import Auth from './models/Auth.js';

const app = express();
dotenv.config();
dbConnect();

// Middleware
app.use(cors());
app.use(cookieParser());
app.use(express.json());

// API Routes
app.use('/api/inquiry', inquiryRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);

// ✅ Root route (Browser मा localhost:5000 खोल्दा देखिने)
app.get("/", (req, res) => {
  res.send("🚀 Server is live and working!");
});

// Test route (optional)
app.get("/api/auths", async (req, res) => {
  try {
    const auths = await Auth.find();
    res.json({ success: true, auths });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Error Handling Middleware
app.use(errorMiddleware);

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`🚀 Server is running on ${port}`);
});
