import React from 'react';
import './resumesection.css'; // Import CSS file

// Resume section component
const ResumeSection = () => {
    return (
        <section id="resume" className="resume">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Resume</h2>
                    <p style={{ marginTop: '20px' }}>Driven and highly motivated undergraduate software engineer with a robust knowledge base in front-end development and an insatiable appetite for continuous learning. Actively pursuing an internship opportunity to leverage and advance my skills within a professional setting.</p>
                </div>
                {/* Download Resume Button */}
                <a href="img/resume/frontenddev.pdf" download="Wazir_Mubashir_Resume.pdf" className="primary-btn" id="downloadResumeBtn">Download Resume</a>
                <div  className="row">
                    <div className="col-lg-6">
                        <ProfessionalProfile />
                        <Education />
                    </div>
                    <div className="col-lg-6">
                        <ProfessionalExperience />
                        <JuniorShopifyDeveloper />
                        <FreelanceDeveloper />
                    </div>
                </div>
            </div>
        </section>
    );
};

const ProfessionalProfile = () => {
    return (
        <>
            <h3 className="resume-title">Professional Profile</h3>
            <div className="resume-item pb-0">
                <h4>Wazir Mubashir Hussain</h4>
                <p><em>Software Engineer</em></p>
                <ul>
                    <li>Location: Islamabad, Pakistan</li>
                    <li>Phone: +92 346 9657528</li>
                    <li>Email: wazirmubashir2021@gmail.com</li>
                </ul>
            </div>
        </>
    );
};


const Education = () => {
    return (
        <>
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
                <h4>Bachelor of Science in Software Engineering</h4>
                <h5>Ibadat International University, Islamabad, Pakistan</h5>
                <h4>Skills:</h4>
                <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript (ES6+)</li>
                    <li>React.js</li>
                    <li>Node.js</li>
                    <li>Git</li>
                    <li>Responsive Web Design</li>
                    <li>UI/UX Design Principles</li>
                </ul>
                <h4>Certifications:</h4>
                <ul>
                    <li>Front-End Web Development Certification - FreeCodeCamp</li>
                    <li>React.js Certification - Udemy</li>
                </ul>
            </div>
        </>
    );
};

const ProfessionalExperience = () => {
    return (
        <>
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
                <h4>Shopify Developer - Meta Tech</h4>
                <h5>September 2023 - Present</h5>
                <ul>
                    <li>Lead the development and customization of Shopify themes and apps, tailoring solutions to meet unique client requirements.</li>
                    <li>Collaborate seamlessly with cross-functional teams, including designers and project managers, to conceptualize, design, and implement new features and enhancements.</li>
                    <li>Provide expert technical support and proactive troubleshooting for Shopify-based e-commerce websites, ensuring optimal functionality and user satisfaction.</li>
                    <li>Stay at the forefront of Shopify platform updates and industry best practices, integrating the latest advancements for cutting-edge solutions.</li>
                </ul>
            </div>
        </>
    );
};

const JuniorShopifyDeveloper = () => {
    return (
        <>
            <div className="resume-item">
                <h4>Junior Shopify Developer - ZBM Tech</h4>
                <h5>January 2024 - Present</h5>
                <ul>
                    <li>Develop and customize Shopify themes and apps to meet client specifications, contributing to the growth and success of e-commerce businesses.</li>
                    <li>Collaborate remotely with team members to execute development tasks efficiently and effectively, ensuring timely project delivery.</li>
                    <li>Provide technical support and resolve issues for Shopify-based websites, ensuring smooth operation and user satisfaction.</li>
                    <li>Stay updated on Shopify platform updates and industry trends, continuously improving skills and contributing to innovative solutions.</li>
                </ul>
            </div>
        </>
    );
};
const FreelanceDeveloper = () => {
    return (
        <>
            <div className="resume-item">
                <h4>Freelance Front-end Developer (Fiverr)</h4>
                <h5>March 2023 - Present</h5>
                <ul>
                    <li>Successfully executed and delivered 2 projects with highly positive client reviews.</li>
                    <li>Designed and developed responsive, user-friendly websites, incorporating backend development, database management, and image uploads using HTML, CSS, and JavaScript.</li>
                    <li>Implemented advanced features, including report uploads, interactive forms, and secure admin dashboard authorization through PHP and MySQL integration.</li>
                    <li>Engaged in close collaboration with clients to fully comprehend their unique requirements and provide tailored solutions that exceed expectations.</li>
                    <li>Maintained a commitment to ongoing self-improvement and staying abreast of the latest industry trends and technologies, ensuring consistently high-quality deliverables.</li>
                </ul>
            </div>
        </>
    );
};

export default ResumeSection;