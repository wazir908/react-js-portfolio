// AboutMe.js

import React from 'react';
import './aboutme.css';
import profileImage from './img/hero/profile-img-removebg.png';

const AboutMe = () => {
  return (
    <section id="about" className="about">
      <div className="container about-container" data-aos="fade-up">
        {/* Section Title */}
        <div className="section-title">
          <h2>About Me</h2>
          <p className="about-description">
            I am a dedicated front-end web developer with expertise in React.js and Shopify development. With 3 years of hands-on experience in the dynamic software industry, I specialize in crafting sophisticated, responsive, and intuitive web applications.
          </p>
        </div>

        {/* Profile Information */}
        <div className="row">
          <div className="col-lg-4">
            <img src={profileImage} alt="Profile" className="profile-img" />
          </div>

          {/* Details */}
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h3 className="web-developer-title">React Js | Shopify Developer</h3>
                  <div className="row mb-4">
                    {/* Contact Information */}
                    <div className="col-lg-6">
                      <ul className="list-unstyled">
                        <li><strong>Phone:</strong> +923469657528</li>
                        <li><strong>Location:</strong> Islamabad, Pakistan</li>
                        <li><strong>Availability:</strong> Open for Freelance</li>
                      </ul>
                    </div>
                    
                    {/* Additional Information */}
                    <div className="col-lg-6">
                      <ul className="list-unstyled">
                        <li><strong>Education:</strong> B.Sc. Software Engineering</li>
                        <li><strong>Email:</strong> <a href="mailto:wazirmubashir2021@gmail.com">Wazirmubashir2021@gmail.com</a></li>
                        <li><strong>LinkedIn:</strong> <a href="https://LinkedIn.com/wazirmubashirhussain">Wazir Mubashir Hussain </a></li>
                      </ul>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="row">
                    <div className="col-lg-12">
                    <div className="buttons-container">
                    <a href="img/resume/frontenddev.pdf" download className="primary-btn">Download Resume</a>
</div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;