import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; 

const projects = [
  { name: 'Project 1', path: '/food' },
  { name: 'Project 2', path: '/covid' },
  { name: 'Project 3', path: '/movie' },
  { name: 'Project 4', path: '/news' },
  { name: 'Project 5', path: '/todo' },
  { name: 'Project 6', path: '/weather' },
  { name: 'Project 7', path: '/food2' },
  { name: 'Project 8', path: '/timer' },
  { name: 'Project 9', path: '/items' },
  
];

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>My Projects</h1>
      <div className="carding-container">
        {projects.map((project, index) => (
          <Link key={index} to={project.path} className="carding col-md-4">
            <h2>{project.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
