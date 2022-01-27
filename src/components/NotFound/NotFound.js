import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../notfound/404-error-abstract-concept-illustration_335657-2243.webp';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="notfound">
            <img src={notfound} alt="" />
            <div>
            <Link to="/"><button style={{marginLeft: '40%', marginBottom: '10%'}} className="btn btn-primary">Go Back</button></Link>
            </div>
        </div>
    );
};

export default NotFound;