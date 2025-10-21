import React from "react";
import "./styles.css";
import { useStaggeredAnimation } from "./hooks/useScrollAnimation";

const EducationSection = () => {
    const containerRef = useStaggeredAnimation(200);

    return (
        <section className="education" id="education">
            <h2 className="heading reveal">Educational <span>Background</span></h2>
            
            <div className="education-container" ref={containerRef}>
                <div className="education-box reveal enhanced-hover">
                    <div className="education-content">
                        <div className="education-header">
                            <h3>Master in Data Science</h3>
                            <h4>University of Europe for Applied Sciences, Potsdam</h4>
                            <span className="education-date">2023 - 2025</span>
                        </div>
                        <div className="education-details">
                            <h5>Key Coursework:</h5>
                            <ul>
                                <li>Machine Learning</li>
                                <li>Data Mining</li>
                                <li>Statistics</li>
                                <li>Data Visualization</li>
                                <li>Python for Data Science</li>
                            </ul>
                            <p><strong>Highlights:</strong> Gained hands-on experience in data analysis, modeling, and problem-solving using modern data science tools.</p>
                        </div>
                    </div>
                </div>

                <div className="education-box reveal enhanced-hover">
                    <div className="education-content">
                        <div className="education-header">
                            <h3>Bachelor of Engineering in Computer Science</h3>
                            <h4>NMAM Institute of Technology, Nitte</h4>
                            <span className="education-date">2021 - 2025 (7.5/10 GPA)</span>
                        </div>
                        <div className="education-details">
                            <h5>Key Coursework:</h5>
                            <ul>
                                <li>Data Structures and Algorithms</li>
                                <li>DBMS</li>
                                <li>Web Technologies</li>
                                <li>AI</li>
                                <li>Operating Systems and Computer Networks</li>
                            </ul>
                            <p><strong>Highlights:</strong> Strong foundation in software development, data analysis and problem-solving with hands-on experience in modern programming tools.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EducationSection;

