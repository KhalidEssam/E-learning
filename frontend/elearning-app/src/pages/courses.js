//create a courses page with a list of courses
import React from 'react';

function Courses() {
    const courses = [
        { id: 1, title: 'Course 1' },
        { id: 2, title: 'Course 2' },
        { id: 3, title: 'Course 3' },
    ];

    return (
        <div>
            <h1>Courses</h1>
            <ul>
                {courses.map((course) => (
                    <li key={course.id}>{course.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default Courses;