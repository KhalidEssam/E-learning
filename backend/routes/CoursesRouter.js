const express = require("express");
const CourseModel = require("../models/CoursesModel");
const {
    getAllCourses,
    getCourse,
    createCourse,
    updateCourse,
    deleteCourse,
} = require("../controllers/CoursesControler");
const router = express.Router();

// get all courses
router.get("/", getAllCourses);

// get a single course
router.get("/:id", getCourse);

// create a course
router.post("/", createCourse);

// update a course
router.put("/:id", updateCourse);

// delete a course
router.delete("/:id", deleteCourse);

module.exports = router;