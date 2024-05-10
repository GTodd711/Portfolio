import React from 'react';
import resumeFile from '../assets/Resume.pdf'; 

const Resume = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resumeFile;
        link.download = 'YourResume.pdf'; 
        link.click();
    };

    return (
        <div className="resume">

            <h1>My Resume</h1>
            <h3>Skills</h3>
              <p>React, MySQL, SQL, JavaScript, CSS, HTML, Ive worked with Bootstrap Mongoose, and Mongodb.
              <h3>Experience</h3>
              I have worked with most aspects of full-stack web development, as for any area that I'm lacking in  know I catch on quickly and am a quick study. 
              </p>

            <button onClick={handleDownload}>Download Resume</button>
        </div>
    );
};

export default Resume;
