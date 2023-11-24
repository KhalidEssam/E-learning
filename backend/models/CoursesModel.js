//create a mongoose model for courses
const mongoose = require("mongoose");
//create a schema
const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    duration: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model("Course", courseSchema);