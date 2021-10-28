import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div style={{minHeight: '70px', padding: '10px', textDecoration: 'none'}} className="header bg-info text-center g-8'">
            <a href="/home">Home </a>
            <a href="/about">AboutUs </a>
            <a href="/services">Service </a>
            <a href="/contact">Contact </a>
        </div>
    );
};

export default Header;