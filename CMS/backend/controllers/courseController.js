const Course = require('../models/Course');

// Add a new course
exports.addCourse = async (req, res) => {
  const { title, description, instructor } = req.body;

  try {
    const course = new Course({
      title,
      description,
      instructor,
    });

    await course.save();
    res.status(201).json(course);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server error" });
  }
};

// Get all courses
exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server error" });
  }
};
