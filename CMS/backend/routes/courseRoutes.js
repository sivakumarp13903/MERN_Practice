const express = require('express');
const router = express.Router();
const { addCourse, getCourses } = require('../controllers/courseController');
const authMiddleware = require('../middleware/authMiddleware');

// Add new course (requires authentication)
router.post('/add', authMiddleware, addCourse);

// Get all courses
router.get('/', getCourses);

module.exports = router;
