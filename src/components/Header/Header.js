import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h1 className="text-center">Company Service</h1>
            <div style={{minHeight: '70px', padding: '10px', textDecoration: 'none'}} className="header bg-info text-center g-8'">
                <Link to="/home">Home </Link>
                <Link to="/about">AboutUs </Link>
                <Link to="/service">Service </Link>
                <Link to="/contact">Contact </Link>
            </div>
        </div>

    );
};

export default Header;