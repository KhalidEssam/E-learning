const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'teacher', 'student'],
        default: 'student' // Default role if not specified
    },
    email: {
        type: String,
        required: true
    },
    isAdmin: { type: Boolean, default: false },
    isUser: { type: Boolean, default: true },
    // You can add more fields as per your requirements (e.g., email, name, etc.)
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

module.exports = User;