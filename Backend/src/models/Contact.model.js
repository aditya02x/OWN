import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true, "Name is required"],
        trim: true 
    },
    email: { 
        type: String, 
        required: [true, "Email is required"],
        lowercase: true,
        trim: true
    },
    message: { 
        type: String, 
        required: [true, "Message cannot be empty"] 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
});

// Exporting as default so your server.js can import it as ContactModel
const ContactModel = mongoose.model('Contact', contactSchema);
export default ContactModel;