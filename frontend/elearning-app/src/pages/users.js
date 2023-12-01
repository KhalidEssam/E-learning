import React, { useState, useEffect } from 'react';
import UserDetails from '../components/UserDetails';

const Users = () => {
    const [users, setUsers] = useState(null);
    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('/api/user');
            const json = await response.json();
            if (response.ok) {
                setUsers(json);
            }
        }
        fetchUsers();
    }, [users])

    return (
        <div>

            <h1 style={{ textDecoration: 'underline' }}>Users</h1>
            {users && users.map((user) => (
                <UserDetails key={user._id} user={user} />
            ))}
        </div>
    )
}

export default Users;