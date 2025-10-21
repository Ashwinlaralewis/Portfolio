import React from "react";
import "./styles.css";
import { useStaggeredAnimation } from "./hooks/useScrollAnimation";

const CertificationsSection = () => {
    const containerRef = useStaggeredAnimation(150);

    return (
        <section className="certifications" id="certifications">
            <h2 className="heading reveal">Professional <span>Certifications</span></h2>
            
            <div className="certifications-container" ref={containerRef}>
                <div className="certification-box reveal enhanced-hover">
                    <div className="certification-content">
                        <div className="certification-icon">
                            <i className="bx bxl-python"></i>
                        </div>
                        <div className="certification-details">
                            <h3>The Complete Python Bootcamp From Zero to Hero in Python</h3>
                            <p>Udemy</p>
                            <span className="certification-type">Programming</span>
                        </div>
                    </div>
                </div>

                <div className="certification-box reveal enhanced-hover">
                    <div className="certification-content">
                        <div className="certification-icon">
                            <i className="bx bx-cloud"></i>
                        </div>
                        <div className="certification-details">
                            <h3>Introduction to Cloud Computing</h3>
                            <p>IBM</p>
                            <span className="certification-type">Cloud Technology</span>
                        </div>
                    </div>
                </div>

                <div className="certification-box reveal enhanced-hover">
                    <div className="certification-content">
                        <div className="certification-icon">
                            <i className="bx bx-shield"></i>
                        </div>
                        <div className="certification-details">
                            <h3>Complete Ethical Hacking Bootcamp</h3>
                            <p>Udemy</p>
                            <span className="certification-type">Cybersecurity</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CertificationsSection;

