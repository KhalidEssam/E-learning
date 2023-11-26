import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {

    const items = { 'Home': '/', 'Contact': '/contact', 'About': '/about', 'Courses': '/courses', 'Logout': '/Logout' }; // Your list of items
    const [hoveredItem, setHoveredItem] = useState(0);

    const navStyle = {
        backgroundColor: '#333',
        // color: '#fff',
        padding: '1rem',
    };

    const ulStyle = {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-around',
    };

    const liStyle = {
        textDecoration: 'underline',
        color: 'green',
    };

    const linkStyle = {
        textDecoration: 'none',
        color: 'green',
        fontSize: '25px',
        fontWeight: 'bold'
    };

    return (
        <nav style={navStyle} >
            <ul style={ulStyle} >
                {Object.entries(items).map((item, index) => (
                    <li
                        key={item[0]}
                        onMouseEnter={() => setHoveredItem(index)}
                        onMouseLeave={() => setHoveredItem(null)}
                        style={{
                            ...liStyle,
                            color: 'blue',
                            padding: '8px',
                            cursor: 'pointer',
                            backgroundColor: hoveredItem === index ? 'lightgray' : 'transparent',
                        }}
                    >
                        <Link to={item[1]} style={{ ...linkStyle, }} >{item[0]}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
