import React from 'react';

const UserDetails = ({ user }) => {

    return (
        <div className='left-column'>
            <h2> <strong> User name: {user.username} </strong></h2>
            <h2> <strong> User password:{user.password} </strong></h2>
            <h2> <strong> User role: {user.role} </strong></h2>
            <p> <strong>User email: </strong> {user.email}</p>
        </div>
    );
}

export default UserDetails;