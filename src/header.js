import React, { useState, useEffect, useRef } from 'react';
import './header.css';
import logoIcon from './img/icons/OIP.jpg';
import './fonts.css';
import { FaHome, FaUser, FaBriefcase, FaTools, FaComments } from 'react-icons/fa';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const mobileTabRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Check initial screen size
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileTabRef.current && !mobileTabRef.current.contains(event.target)) {
        setActiveTab(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName === activeTab ? null : tabName);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`} role="banner">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-2">
            <div className="header__logo">
              <a href="./index.html" className="logo-link">
                <img src={logoIcon} alt="Icon" className="logo-icon" />
                <span className="logo-text">WMH | DevFolio</span>
              </a>
            </div>
          </div>
          <div className="col-lg-8">
            {/* Render desktop menu if not in mobile view */}
            {!isMobileView && (
              <nav className="header__nav__menu desktop-menu" role="navigation">
                <ul>
                  <li className="active"><a href="./index.html">Home</a></li>
                  <li><a href="about.html">About</a></li>
                  <li><a href="#portfolio">Projects</a></li>
                  <li><a href="#resume">My Tech</a></li>
                  <li><a href="./chatbot.html">Chat With Me?</a></li>
                </ul>
              </nav>
            )}
          </div>
          <div className="col-lg-2">
            <div className="social-icons" role="presentation">
              <a href="https://www.facebook.com" aria-label="Facebook"><FaFacebook className="social-icon" /></a>
              <a href="https://www.twitter.com" aria-label="Twitter"><FaTwitter className="social-icon" /></a>
              <a href="https://www.linkedin.com" aria-label="LinkedIn"><FaLinkedin className="social-icon" /></a>
              <a href="https://www.github.com" aria-label="GitHub"><FaGithub className="social-icon" /></a>
            </div>
          </div>
        </div>
      </div>
      {/* Render mobile tab bar if in mobile view */}
      {isMobileView && (
        <nav className="mobile-tab-bar" role="navigation" ref={mobileTabRef}>
          <ul>
            <li>
              <a href="#" className={`icon-link ${activeTab === 'Home' ? 'active' : ''}`} onClick={() => handleTabClick('Home')}>
                <FaHome />
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#" className={`icon-link ${activeTab === 'About' ? 'active' : ''}`} onClick={() => handleTabClick('About')}>
                <FaUser />
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#" className={`icon-link ${activeTab === 'Projects' ? 'active' : ''}`} onClick={() => handleTabClick('Projects')}>
                <FaBriefcase />
                <span>Projects</span>
              </a>
            </li>
            <li>
              <a href="#" className={`icon-link ${activeTab === 'Tech' ? 'active' : ''}`} onClick={() => handleTabClick('Tech')}>
                <FaTools />
                <span>Tech</span>
              </a>
            </li>
            <li>
              <a href="#index.html" className={`icon-link ${activeTab === 'Inbox' ? 'active' : ''}`} onClick={() => handleTabClick('Inbox')}>
                <FaComments />
                <span>Inbox?</span>
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>

  );
};

export default Header;