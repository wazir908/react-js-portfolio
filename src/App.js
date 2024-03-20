import React from 'react';
import Header from './header';
import LandingPage from './landingpage';
import AboutMe from './aboutme';
import BackToTopButton from './backtotopbutton';
import PortfolioCarousel from './portfoliocarousel';
import ResumeSection from './resumesection';
import SlickCarousel from './slick-carousel'; // Corrected import statement
import './resumesection.css';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <LandingPage />
      <AboutMe />
      <PortfolioCarousel />
      <ResumeSection />
      <BackToTopButton />
      <SlickCarousel /> {/* Include SlickCarousel component */}
    </div>
  );
}

export default App;