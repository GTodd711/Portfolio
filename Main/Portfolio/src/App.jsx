import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/styles/global.css';
import Navigation from './components/Navigation';
import Portfolio from './pages/Portfolio';
import Project from './components/Project';
import AboutMe from './pages/AboutMe';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './components/Footer'; // Import the Footer component

const App = () => {

  const projects = [
    { id: 1, title: 'Universal Text Editor', description: 'This is a universal text editor able for install for offline use and sports code coloring' },

    // Add more projects as needed
  ];

  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          {/* Define routes for each page */}
          <Route path="/" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio projects={projects} />} />
          <Route path="/project" element={<Project />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Include the Footer component */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
