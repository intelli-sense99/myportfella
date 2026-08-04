import mongoose from "mongoose";

const QueriesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        minlength: [2, 'Name must be at least 2 characters'],
        maxlength: [100, 'Name cannot exceed 100 characters']
    },
        email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        lowercase: true,
        match: [
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            'Please enter a valid email address'
        ]
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required'],
        trim: true,
        match: [
            /^\+?[0-9]+$/,
            'Please enter a valid phone number'
        ]
    },
    message: {
        type: String,
        required: [true, 'Message is required'],
        trim: true
    }
},
    {
        timestamps: true // Automatically adds createdAt and updatedAt fields
    }
);

// Add indexes for better query performance
QueriesSchema.index({ email: 1 });
QueriesSchema.index({ createdAt: -1 });

// Prevent model recompilation in development
const Queries = mongoose.models.Queries || mongoose.model("Queries", QueriesSchema);

export default Queries;
