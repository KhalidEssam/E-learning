import React, { useState } from 'react';
import styles from './styles';
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



    return (

        <div style={styles.container}>
            <h2 style={{ textAlign: 'center' }}>Signup</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={Username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    required
                    style={styles.inputStyle}
                />
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    required
                    style={styles.inputStyle}
                />
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Confirm Password"
                    required
                    style={styles.inputStyle}
                />
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                    style={styles.inputStyle}
                />
                <select
                    id="role"
                    name="role"
                    value={Role}
                    onChange={(e) => setRole(e.target.value)}
                    required
                    style={styles.inputStyle}
                >
                    <option value="admin">Admin</option>
                    <option value="teacher">Teacher</option>
                    <option value="student">Student</option>
                </select>
                <button type="submit" style={styles.buttonStyle}>Sign Up</button>
            </form>
        </div>
    );
};
export default SignupForm;
