//create a courses page with a list of courses
import React, { useState, useEffect } from 'react';
import CoursesDetails from '../components/CoursesDetails';


function Courses() {
    const [Courses, setCourses] = useState(null);

    useEffect(() => {
        const fetchCourses = async () => {
            const response = await fetch('/api/course');
            const json = await response.json();
            if (response.ok) {
                setCourses(json);
            }
        }
        fetchCourses();
    }, [Courses])




    return (
        <div style={{ overflow: 'hidden' }} >
            <h1 style={{ textDecoration: 'underline', }}>Courses</h1>


            {Courses && Courses.map((course) => (
                <CoursesDetails key={course._id} course={course} style={{ BackgroundColor: 'red', textDecoration: 'underline' }} />
            ))}
        </div>
    );
}

export default Courses;