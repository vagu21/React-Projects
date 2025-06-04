import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; 

const projects = [
  { 
    name: 'Food Recipe App', 
    path: '/food', 
    image: 'https://t3.ftcdn.net/jpg/02/52/38/80/360_F_252388016_KjPnB9vglSCuUJAumCDNbmMzGdzPAucK.jpg',
    description: 'Discover delicious recipes with nutritional information'
  },
  { 
    name: 'Covid 19 Tracker', 
    path: '/covid', 
    image: 'https://cdn.who.int/media/images/default-source/mca/mca-covid-19/coronavirus-2.tmb-479v.jpg?sfvrsn=4dba955c_19%20479',
    description: 'Real-time COVID-19 statistics and data visualization'
  },
  { 
    name: 'Telugu Movies', 
    path: '/movie', 
    image: 'https://img.freepik.com/free-vector/cinema-realistic-poster-with-illuminated-bucket-popcorn-drink-3d-glasses-reel-tickets-blue-background-with-tapes-vector-illustration_1284-77070.jpg',
    description: 'Explore the latest Telugu cinema collection'
  },
  { 
    name: 'News App', 
    path: '/news', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1MiBflN17NfMjCKamD-u31XZFSWnelPtYKQ&s',
    description: 'Stay updated with latest news from around the world'
  },
  { 
    name: 'To Do App', 
    path: '/todo', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRQsy_tHu9CJs0UkIa5FGBik1IYntPf1kk2Q&s',
    description: 'Organize your tasks and boost productivity'
  },
  { 
    name: 'Weather App', 
    path: '/weather', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwweQL6J2AJtzzvfdBqSf53vZAhqf1UJSR4g&s',
    description: 'Get real-time weather updates for any city'
  },
  { 
    name: 'Food Calories', 
    path: '/food2', 
    image: 'https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg',
    description: 'Track nutritional information and calories'
  },
  { 
    name: 'Timer', 
    path: '/timer', 
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/9/346658806/CF/XJ/QT/38715/1-minute-wooden-timer-clock-with-white-sand-500x500.jpg',
    description: 'Beautiful countdown timer for special events'
  },
  { 
    name: 'Products', 
    path: '/items', 
    image: 'https://cdn.shopify.com/s/files/1/0070/7032/files/trending-products_c8d0d15c-9afc-47e3-9ba2-f7bad0505b9b.png?v=1614559651',
    description: 'Browse through our curated product collection'
  },
];

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="floating-elements">
        <div className="floating-circle"></div>
        <div className="floating-circle"></div>
        <div className="floating-circle"></div>
      </div>
      
      <h1>My Projects Portfolio</h1>
      <p className="subtitle">Explore my collection of React applications showcasing various technologies and APIs</p>
      
      <div className="carding-container">
        {projects.map((project, index) => (
          <Link key={index} to={project.path} className="carding">
            <img src={project.image} alt={project.name} className="card-image" />
            <div className="card-content">
              <h2>{project.name}</h2>
              <p className="card-description">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
