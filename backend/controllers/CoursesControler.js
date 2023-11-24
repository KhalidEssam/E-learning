const mongoose = require("mongoose");
const CourseModel = require("../models/CoursesModel");

// get all courses
const getAllCourses = async (req, res) => {
    try {
        const courses = await CourseModel.find();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// get a single course
const getCourse = async (req, res) => {
    try {
        const course = await CourseModel.findById(req.params.id);
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// create a course
const createCourse = async (req, res) => {
    const course = new CourseModel(req.body);
    try {
        await course.save();
        res.status(201).json(course);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// update a course
const updateCourse = async (req, res) => {
    try {
        const updatedCourse = await CourseModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(updatedCourse);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// delete a course
const deleteCourse = async (req, res) => {
    try {
        const deletedCourse = await CourseModel.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedCourse);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


module.exports = {
    getAllCourses,
    getCourse,
    createCourse,
    updateCourse,
    deleteCourse,
}