import React, { useState } from 'react';

const SignupForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        role: 'student'
    });

    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const [Email, setEmail] = useState('');
    const [Role, setRole] = useState('student');
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission here, e.g., send formData to server
        const username = Username;
        const password = Password;
        const email = Email;
        const role = Role;
        const user = {
            username,
            password,
            role,
            email,
        }
        console.log('user Data:', user);
        const response = await fetch("/api/users/Signup", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const json = await response.json();
        if (!response.ok) {
            console.log("Eror", json);
        }
        if (response.ok) {
            setUsername('');
            setPassword('');
            setEmail('');
            setRole('student');
            console.log("success", json);
        }
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        marginBottom: '20px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '16px',
    };

    const buttonStyle = {
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        padding: '12px 24px',
        cursor: 'pointer',
        fontSize: '16px',
    };

    return (
        <div style={{ width: '400px', margin: '50px auto', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <h2 style={{ textAlign: 'center' }}>Signup</h2>
            <form onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
                <h3>Add a New User</h3>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={Username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    required
                    style={inputStyle}
                />
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    required
                    style={inputStyle}
                />
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Confirm Password"
                    required
                    style={inputStyle}
                />
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                    style={inputStyle}
                />
                <select
                    id="role"
                    name="role"
                    value={Role}
                    onChange={(e) => setRole(e.target.value)}
                    required
                    style={inputStyle}
                >
                    <option value="admin">Admin</option>
                    <option value="teacher">Teacher</option>
                    <option value="student">Student</option>
                </select>
                <button type="submit" style={buttonStyle}>Sign Up</button>
            </form>
        </div>
    );
};

export default SignupForm;
