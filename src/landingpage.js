import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import './landingpage.css';
import image from './img/hero/profile-img-removebg-1.png'; 
import backgroundImage from './img/hero/my.svg'; 
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';
import './socialmediapopup.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const SocialMediaPopup = ({ onClose }) => {
const socialMediaLinks = [
  { icon: <FaFacebook />, url: 'https://www.facebook.com/example' },
  { icon: <FaInstagram />, url: 'https://www.instagram.com/example' },
  { icon: <FaGithub />, url: 'https://github.com/example' },
  { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/example' },
  { icon: <FaEnvelope />, url: 'mailto:example@example.com' },
  { icon: <FaPhone />, url: 'tel:+1234567890' },
  { icon: <FaWhatsapp />, url: 'https://wa.me/1234567890' }, 
];

  return (
    <div className="social-media-popup">
      <div className="popup-content">
        <h2>Connect with Me</h2>
        <ul className="social-media-list">
          {socialMediaLinks.map((link, index) => (
            <li key={index}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
        <button onClick={onClose}><FontAwesomeIcon icon={faTimes} /></button>
      </div>
    </div>
  );
};

const LandingPage = () => {
  const typedRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const typedElement = typedRef.current;

    if (typedElement) {
      const typedStrings = typedElement.getAttribute('data-typed-items').split(',');


      if (typedRef.current && typedRef.current._typed) {
        typedRef.current._typed.destroy();
      }


      typedRef.current._typed = new Typed(typedElement, {
        strings: typedStrings,
        typeSpeed: 50, 
        backSpeed: 50, 
        loop: true, 
        showCursor: false 
      });
    }

 
    return () => {
      if (typedRef.current && typedRef.current._typed) {
        typedRef.current._typed.destroy();
      }
    };
  }, []);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <button className="btn" type="button">
              <strong>Shopify Expert | Front-End Developer</strong>
              <div id="container-stars">
                <div id="stars"></div>
              </div>
              <div id="glow">
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </button>
            <div className="hero-content">
              <h1 className="hero-title">
                <span className="hero-title-line">Wazir Mubashir Hussain</span>
              </h1>
              <p className="hero-subtitle">
                I'm{' '}
                <span
                  ref={typedRef}
                  className="typed"
                  data-typed-items="Shopify Web Developer, React JS Web Developer"
                ></span>
              </p>
              <div className="hero-buttons">
                <button className="primary-btn" onClick={togglePopup}>
                  Get Connected
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="hero-image-container">
              <img src={image} alt="Your Alt Text" className="hero-image" />
              <img src={backgroundImage} alt="Background Image" className="background-image" />
            </div>
          </div>
        </div>
      </div>
      {showPopup && <SocialMediaPopup onClose={togglePopup} />}
    </section>
  );
};

export default LandingPage;
