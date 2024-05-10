import React from 'react';
import projectImage from '../assets/projectImg/Project1.png'; 

const Project = () => {
  return (
    <div>
      <h2>Universal Text Editor</h2>
      {/* Use the imported image as the source for an <img> tag */}
      <img src={projectImage} alt="Project" style={{ width: '100%', height: 'auto' }} /> 
      <p>This is a universal text editor able for install for offline use and sports code coloring </p>
      <a href="https://universal-text-editor.onrender.com/">Link to deployed site.</a>
    </div>
  );
};

export default Project;
