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
        required: true,
        unique: true
    },
    profileImage: {
        type: String,
        default: ''},
    isAdmin: { type: Boolean, default: false },
    isUser: { type: Boolean, default: true },
    // You can add more fields as per your requirements (e.g., email, name, etc.)
}, { timestamps: true });

userSchema.pre('save', function (next) {
    if (this.email) {
        this.email = this.email.toLowerCase(); // Convert email to lowercase
    }
    next();
});



const User = mongoose.model("User", userSchema);

module.exports = User;