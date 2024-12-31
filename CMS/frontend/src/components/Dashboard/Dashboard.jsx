import React, { useState, useEffect } from 'react';
import { getCourses } from '../../services/courseService';

const Dashboard = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const fetchedCourses = await getCourses();
        setCourses(fetchedCourses);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchCourses();
  }, []);

  return (
    <div>
      <h1>Courses Dashboard</h1>
      {Array.isArray(courses) ? (
        courses.map((course) => (
          <div key={course.id}>
            <h2>{course.name}</h2>
            <p>{course.description}</p>
          </div>
        ))
      ) : (
        <p>No courses available.</p>
      )}
    </div>
  );
};

export default Dashboard;
