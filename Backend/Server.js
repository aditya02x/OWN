import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Import the Model
import ContactModel from './src/models/Contact.model.js'; // Note: .js extension is required in ES Modules

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// 1. Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Oasis Database Connected Successfully"))
  .catch((err) => console.error("❌ Database Connection Error:", err));

// 2. The POST Route
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Use ContactModel (matching your import)
    const newContact = new ContactModel({
      name,
      email,
      message
    });

    // Save it to MongoDB
    await newContact.save();

    res.status(201).json({ 
      success: true, 
      message: "Message saved to database!" 
    });

  } catch (error) {
    console.error("Error saving message:", error);
    res.status(500).json({ 
      success: false, 
      message: "Server Error: Could not save message." 
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));