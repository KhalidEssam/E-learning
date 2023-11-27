const express = require("express");
const {
    getAllCourses,
    getCourse,
    createCourse,
    updateCourse,
    deleteCourse,
} = require("../controllers/CoursesControler");

const { sendEmail } = require('../controllers/MailController');
const router = express.Router();

// get all courses
router.get("/", getAllCourses);

// get a single course
router.get("/:id", getCourse);

// create a course
router.post("/", createCourse);

// send email
router.post("/email", sendEmail);

// update a course
router.put("/:id", updateCourse);

// delete a course
router.delete("/:id", deleteCourse);

module.exports = router;