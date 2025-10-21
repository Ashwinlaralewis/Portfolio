import React from "react";
import "./styles.css";
import { useStaggeredAnimation } from "./hooks/useScrollAnimation";

const ExperienceSection = () => {
    const containerRef = useStaggeredAnimation(200);

    return (
        <section className="experience" id="experience">
            <h2 className="heading reveal">Work <span>Experience</span></h2>
            
            <div className="experience-container" ref={containerRef}>
                <div className="experience-box reveal enhanced-hover">
                    <div className="experience-content">
                        <div className="experience-header">
                            <h3>Python Full-Stack Development Intern</h3>
                            <h4>DUthe</h4>
                            <span className="experience-date">Jan 2025 - Apr 2025</span>
                        </div>
                        <div className="experience-details">
                            <ul>
                                <li>Completed a 4-month Internship in Python Full Stack Development</li>
                                <li>Built a Grocery Website using Django, HTML, CSS, and SQLite</li>
                                <li>Implemented user login system, product management, and responsive web pages</li>
                                <li>Strengthened skills in web frameworks, database integration, and frontend-backend coordination</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="experience-box reveal enhanced-hover">
                    <div className="experience-content">
                        <div className="experience-header">
                            <h3>Internet of Things Intern</h3>
                            <h4>IoT Development</h4>
                            <span className="experience-date">Mar 2023 - Apr 2023</span>
                        </div>
                        <div className="experience-details">
                            <ul>
                                <li>Completed a 1-month IoT Internship, focusing on embedded systems and sensor-based solutions</li>
                                <li>Developed a Smart Dustbin using Arduino and ultrasonic sensors with real-time IoT Integration</li>
                                <li>Implemented automatic waste detection and remote monitoring for efficient waste management</li>
                                <li>Gained hands-on experience in sensor interfacing, data collection, and IoT system deployment</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;

