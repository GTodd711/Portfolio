import React from 'react';
import projectImage1 from '../assets/projectImg/Project1.png'; 
import projectImage2 from '../assets/projectImg/Project2.png'; 

const Project = () => {
  return (
    <div>
      <h2>Project 1</h2>
      {/* Use the imported image as the source for an <img> tag */}
      <img src={projectImage1} alt="Project 1" style={{ width: '100%', height: 'auto' }} /> 
      <p>This is a universal text editor able for install for offline use and sports code coloring</p>
      <a href="https://universal-text-editor.onrender.com/">Link to deployed site.</a>

      <h2>Project 2</h2>
      <img src={projectImage2} alt="Project 2" style={{ width: '100%', height: 'auto' }} /> 
      <p>This is an explanation of an email regex</p>
      <a href="https://gist.github.com/GTodd711/8ad4dd2e144d22f5bf00643e868afd7b">Link to deployed site.</a>
      <br></br>
      <h3>More projects coming soon!!!</h3>
      
    </div>
  );
};

export default Project;

