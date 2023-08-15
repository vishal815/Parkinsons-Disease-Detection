import React from 'react';
import '../Styles/notfound.css'; // Make sure to import the CSS file for styling
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div className="not-found-container">
            <div className="not-found-content">
                <h1 className="not-found-title">404</h1>
                <p className="not-found-text">Oops! The page you're looking for doesn't exist.</p>
                <Link to="/" className="not-found-link">
                <button className="not-found-button btn">Go Home</button>
                </Link>
            </div>
        </div>
    );
}

export default NotFound;
