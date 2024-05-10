import React from 'react';
import resumeFile from '../assets/Resume.pdf'; // Import your resume file

const Resume = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resumeFile;
        link.download = 'YourResume.pdf'; // Set the filename for download
        link.click();
    };

    return (
        <div>
            {/* Your resume content */}
            <h1>My Resume</h1>
            <h3>Skills</h3>
<p>React, MySQL, SQL, JavaScript, CSS, HTML, I’ve worked with Bootstrap Mongoose, and Mongodb.
<h3>Experience</h3>
I have worked with most aspects of full-stack web development, as for any area that I'm lacking in  know I catch on quickly and am a quick study. 
</p>

            {/* Download button */}
            <button onClick={handleDownload}>Download Resume</button>
        </div>
    );
};

export default Resume;
