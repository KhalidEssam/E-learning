//create a courses page with a list of courses
import React, { useState, useEffect } from 'react';
import CoursesDetails from '../components/CoursesDetails';


function Courses() {
    const [Courses, setCourses] = useState(null);

    useEffect(() => {
        const fetchCourses = async () => {
            const response = await fetch('/api/courses');
            const json = await response.json();
            if (response.ok) {
                setCourses(json);
            }
        }
        fetchCourses();
    }, [Courses])




    return (
        <div>
            <h1 style={{textDecoration:'underline',}}>Courses</h1>


            {Courses && Courses.map((course) => (
                <CoursesDetails key={course._id} course={course} />
            ))}
        </div>
    );
}

export default Courses;