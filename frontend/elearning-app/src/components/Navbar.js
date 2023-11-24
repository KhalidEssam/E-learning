import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navStyle = {
        backgroundColor: '#333',
        color: '#fff',
        padding: '1rem',
    };

    const ulStyle = {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-around',
    };

    const liStyle = {
        padding: '0.5rem',
    };

    const linkStyle = {
        color: '#fff',
        textDecoration: 'none',
    };

    return (
        <nav style={navStyle}>
            <ul style={ulStyle}>
                <li style={liStyle}>
                    <Link to="/" style={linkStyle}>Home</Link>
                </li>
                <li style={liStyle}>
                    <Link to="/about" style={linkStyle}>About</Link>
                </li>
                <li style={liStyle}>
                    <Link to="/services" style={linkStyle}>Services</Link>
                </li>
                <li style={liStyle}>
                    <Link to="/courses" style={linkStyle}>Courses</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
