import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link to="/Project">Project</Link>
                </li>
                <li>
                    <Link to="/Resume">Resume</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact Page</Link>
                </li>
                {/* Add more navigation items as needed */}
            </ul>
        </nav>
    );
};         
 

export default Navigation;