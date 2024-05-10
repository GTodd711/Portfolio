import React from 'react';
import Project from '../components/Project';

const Portfolio = ({ projects }) => {
  return (
    <div>
      <h2>My Projects</h2>
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Portfolio;
