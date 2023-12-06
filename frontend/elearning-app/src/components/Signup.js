import React, { useState } from 'react';
import styles from './styles';
import axios from 'axios'; // For making HTTP requests

const SignupForm = () => {

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        role: 'student'
    });
    const [image, setImage] = useState(null);
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

    const handleUpload = async () => {

        console.log(image);
        const response = await fetch('/api/user/email/' + Email, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },

        });

        const json = await response.json();
        if (!response.ok) {
            console.log("Eror", json);

        }
        console.log("user", json);



        try {
            console.log('Uploading image...');
            const formData = new FormData();
            formData.append('image', image);
            formData.append('email', Email);
            console.log(formData);
            await axios.post('http://localhost:3000/api/user/uploadImage', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            // Handle success
            console.log('Image uploaded successfully.');
        } catch (error) {
            // Handle error
            console.error('Error uploading image:', error);
        }
    };



    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
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

        const response = await fetch("/api/user/Signup/", {
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
            handleUpload();
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
                <input type="file"
                    style={styles.inputStyle} onChange={handleImageChange} />
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
