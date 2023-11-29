import React from 'react';

const CoursesDetails = ({ course }) => {

    return (
        <div className='left-column' >
            <span>
                {/* {console.log(course.title)} */}
                <h2> <strong> {course.title} </strong></h2>
                <p> <strong>Course description: </strong> {course.description}</p>
                <p>  <strong>Course duration (in Hours): </strong> {course.duration}</p>
                <p> <strong>Course price (in USD): </strong>{course.price}</p>
            </span>
        </div >
    );
};
export default CoursesDetails;