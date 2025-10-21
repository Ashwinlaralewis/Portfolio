import React from "react";
import "./styles.css";
import { useStaggeredAnimation } from "./hooks/useScrollAnimation";

const SkillsSection = () => {
    const containerRef = useStaggeredAnimation(150);

    return (
        <section className="skills" id="skills">
            <h2 className="heading reveal">Technical <span>Skills</span></h2>
            
            <div className="skills-container" ref={containerRef}>
                <div className="skills-category reveal enhanced-hover">
                    <h3>Programming Languages</h3>
                    <div className="skills-grid">
                        <div className="skill-item enhanced-hover">
                            <i className="bx bxl-python"></i>
                            <span>Python</span>
                        </div>
                        <div className="skill-item enhanced-hover">
                            <i className="bx bx-code-alt"></i>
                            <span>C & C++</span>
                        </div>
                        <div className="skill-item enhanced-hover">
                            <i className="bx bx-data"></i>
                            <span>R Programming</span>
                        </div>
                        <div className="skill-item enhanced-hover">
                            <i className="bx bx-code"></i>
                            <span>JavaScript</span>
                        </div>
                    </div>
                </div>

                <div className="skills-category reveal enhanced-hover">
                    <h3>Web Development</h3>
                    <div className="skills-grid">
                        <div className="skill-item enhanced-hover">
                            <i className="bx bxl-react"></i>
                            <span>React.js</span>
                        </div>
                        <div className="skill-item enhanced-hover">
                            <i className="bx bxl-nodejs"></i>
                            <span>Node.js</span>
                        </div>
                        <div className="skill-item enhanced-hover">
                            <i className="bx bxl-mongodb"></i>
                            <span>MongoDB</span>
                        </div>
                        <div className="skill-item enhanced-hover">
                            <i className="bx bx-server"></i>
                            <span>Express.js</span>
                        </div>
                        <div className="skill-item enhanced-hover">
                            <i className="bx bx-code-alt"></i>
                            <span>HTML & CSS</span>
                        </div>
                    </div>
                </div>

                <div className="skills-category reveal enhanced-hover">
                    <h3>Data Analysis & Tools</h3>
                    <div className="skills-grid">
                        <div className="skill-item enhanced-hover">
                            <i className="bx bx-data"></i>
                            <span>SQL</span>
                        </div>
                        <div className="skill-item enhanced-hover">
                            <i className="bx bx-brain"></i>
                            <span>Machine Learning</span>
                        </div>
                        <div className="skill-item enhanced-hover">
                            <i className="bx bx-line-chart"></i>
                            <span>Data Visualization</span>
                        </div>
                        <div className="skill-item enhanced-hover">
                            <i className="bx bx-cloud"></i>
                            <span>Cloud Computing</span>
                        </div>
                    </div>
                </div>

                <div className="skills-category reveal enhanced-hover">
                    <h3>Languages</h3>
                    <div className="skills-grid">
                        <div className="skill-item enhanced-hover">
                            <i className="bx bx-world"></i>
                            <span>English (C1)</span>
                        </div>
                        <div className="skill-item enhanced-hover">
                            <i className="bx bx-world"></i>
                            <span>Hindi (C2)</span>
                        </div>
                        <div className="skill-item enhanced-hover">
                            <i className="bx bx-world"></i>
                            <span>German (A1)</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;

