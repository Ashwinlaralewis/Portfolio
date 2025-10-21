import React from "react";
import "./styles.css"
import profileImage from "./images/images.js";
import { useScrollAnimation } from "./hooks/useScrollAnimation";

const AboutSection = () => {

    const [isRead, setRead] = React.useState(false);
    const aboutImageRef = useScrollAnimation();
    const aboutContentRef = useScrollAnimation();

    function handleReadClick() {
        setRead(!isRead);
    }

    return (
        <section className="about" id="about">
            <div className="about-image reveal-left" ref={aboutImageRef}>
                <img src={profileImage} alt='Ashwin Lara Lewis professional portrait' />
            </div>

            <div className="about-content reveal-right enhanced-hover" ref={aboutContentRef}>
                <h2 className="heading">About <span>Me</span></h2>

                <p style={{ display: isRead ? "none" : "block" }}>Goal-oriented Computer Science graduate pursuing an M.Sc. in Data Science at the University of Europe for Applied Sciences, Potsdam. Strongly motivated with expertise in web development, programming and data analysis...</p>
                <p style={{ display: isRead ? "block" : "none" }}>Goal-oriented Computer Science graduate pursuing an M.Sc. in Data Science at the University of Europe for Applied Sciences, Potsdam. Strongly motivated with expertise in web development, programming and data analysis. Seeking a Working Student role to leverage academic knowledge in real-world projects, enhance technical and analytical skills and contribute to data-driven solutions. Based in Berlin, Germany, I am passionate about creating innovative solutions using modern technologies including Python, React.js, Node.js, MongoDB, and machine learning frameworks.</p>

                <button style={{ cursor: "pointer" }} className="btn enhanced-hover" id="read" onClick={handleReadClick}>Read More</button>
            </div>
        </section>
    )
}


export default AboutSection;
