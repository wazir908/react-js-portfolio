import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@fortawesome/fontawesome-free/css/all.css'; // Import Font Awesome CSS
import './slick-carousel.css'; // Import custom CSS

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faJsSquare, faBootstrap, faNodeJs, faAngular, faVuejs, faPhp } from '@fortawesome/free-brands-svg-icons'; // Import icons for web technologies

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Adjusted to accommodate more icons
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Adjust breakpoint for mobile devices
        settings: {
          slidesToShow: 1, // Display only one icon per row on mobile
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="carousel-container">
      <h1>Making stunning websites using modern technologies</h1>
      <Slider {...settings}>
        <div className="slide">
          <div className="icon-container">
            <FontAwesomeIcon icon={faReact} size="3x" style={{ color: '#61dafb' }} />
            <h2>React Js</h2>
          </div>
        </div>
        <div className="slide">
          <div className="icon-container">
            <FontAwesomeIcon icon={faHtml5} size="3x" style={{ color: '#e34c26' }} />
            <h2>HTML5</h2>
          </div>
        </div>
        <div className="slide">
          <div className="icon-container">
            <FontAwesomeIcon icon={faCss3} size="3x" style={{ color: '#264de4' }} />
            <h2>CSS3</h2>
          </div>
        </div>
        <div className="slide">
          <div className="icon-container">
            <FontAwesomeIcon icon={faJsSquare} size="3x" style={{ color: '#f0db4f' }} />
            <h2>JavaScript</h2>
          </div>
        </div>
        <div className="slide">
          <div className="icon-container">
            <FontAwesomeIcon icon={faBootstrap} size="3x" style={{ color: '#563d7c' }} />
            <h2>Bootstrap</h2>
          </div>
        </div>
        <div className="slide">
          <div className="icon-container">
            <FontAwesomeIcon icon={faNodeJs} size="3x" style={{ color: '#68a063' }} />
            <h2>Node.js</h2>
          </div>
        </div>
        <div className="slide">
          <div className="icon-container">
            <FontAwesomeIcon icon={faAngular} size="3x" style={{ color: '#dd1b16' }} />
            <h2>Angular</h2>
          </div>
        </div>
        <div className="slide">
          <div className="icon-container">
            <FontAwesomeIcon icon={faVuejs} size="3x" style={{ color: '#41b883' }} />
            <h2>Vue.js</h2>
          </div>
        </div>
        <div className="slide">
          <div className="icon-container">
            <FontAwesomeIcon icon={faPhp} size="3x" style={{ color: '#8892be' }} />
            <h2>PHP</h2>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;