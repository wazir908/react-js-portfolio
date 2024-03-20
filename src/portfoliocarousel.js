import React, { useState } from 'react';
import './portfoliocarousel.css'; // Import Custom styles for the carousel
import { FaExternalLinkAlt, FaGlobe } from 'react-icons/fa'; // Import external link and globe icons from react-icons/fa
import myImg1 from './img/portfolio/myimg1.png'; // Import image 1
import myImg2 from './img/portfolio/myimg6.png'; // Import image 2
import myImg3 from './img/portfolio/portfoliopic1.png'; // Import image 2
import myImg4 from './img/portfolio/myimg2.png'; // Import image 2
import myImg5 from './img/portfolio/myimg4.png'; // Import image 2

// Import other images as needed

const PortfolioCarousel = () => {
  const [lightboxImage, setLightboxImage] = useState(null);

  // Define your projects with images and descriptions
  const projects = [
    {
        id: 1,
        title: 'React Js | Portfolio Web',
        description: 'Crafted a sleek and responsive portfolio website using React Js to showcase my skills and projects.',
        image: myImg1, // Use imported image variable
        link: 'https://mubashir-dev.netlify.app', // Link to project 1
        tags: ['ReactJS', 'HTML', 'CSS', 'JavaScript'] // Tags for Project 1
      },
      {
        id: 2,
        title: 'Full-Stack E-commerce',
        description: 'Built an e-commerce platform with React.js , PHP & MySQL , ensuring seamless functionality and dynamic user interaction.',
        image: myImg2, // Use imported image variable
        link: 'https://baltistanorganicdryfruits.netlify.app', // Link to project 2
        tags: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'MySQL', 'PHP'] // Tags for Project 2
      }
      ,
      {
        id: 3,
        title: 'Full-Stack Medical Center Website',
        description: 'Built a medical center website using React.js, Node.js, and MongoDB. Features include appointment scheduling and patient records management.',
        image: myImg3,
        link: 'https://example-medical-center.com',
        tags: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'MongoDB', 'RESTful API']
      },
      {
        id: 4,
        title: 'Business Website',
        description: 'Developed a professional business website with HTML, CSS, and JavaScript. Includes portfolio showcase and interactive maps.',
        image: myImg4,
        link: 'https://example-business.com',
        tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design']
      },
      {
        id: 5,
        title: 'Chatbot Development',
        description: 'Created a chatbot using HTML, CSS, React.js, and Node.js. Integrated with a website for real-time customer support and FAQ automation.',
        image: myImg5,
        link: 'https://example-chatbot.com',
        tags: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Natural Language Processing', 'Web Integration']
      }
      
      ,
    // Add more projects with correct image variables, links, and tags
  ];

  const openLightbox = (image) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <div className="portfolio-carousel">
      <h2>Explore My Projects</h2>
      <div className="project-container">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <div className="tags">
              {project.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <img src={project.image} alt={project.title} onClick={() => openLightbox(project.image)} />
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="buttons">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="primary-btn">
                  <FaGlobe className="world-icon" /> {/* World icon */}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {lightboxImage && (
        <div className="lightbox">
          <div className="lightbox-content">
            <span className="close-btn" onClick={closeLightbox}>&times;</span>
            <img src={lightboxImage} alt="Lightbox Image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioCarousel;