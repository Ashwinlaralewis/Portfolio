import React from "react";
import "./styles.css"
import profileImage from "./images/images.js";
import Typed from "typed.js";
import { useScrollAnimation } from "./hooks/useScrollAnimation";

const HomeSection = () =>{

    const firstElement = React.useRef(null);
    const homeContentRef = useScrollAnimation();
    const homeImageRef = useScrollAnimation();

    React.useEffect(() => {
        const typed = new Typed(firstElement.current, {
            strings: ['Full Stack Developer.', 'Data Scientist.', 'Python Developer.', 'React Developer.', 'Machine Learning Engineer.'],
            typeSpeed: 70,
            smartBackspace: true,
            backSpeed: 50,
            loop: true,
            loopCount: Infinity,
            shuffle: false,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return(
        <section className="home page-transition" id="home">
                <div className="home-content reveal-left" ref={homeContentRef}>
                    <h3 className="text-reveal">Hi, My Name is</h3>
                    <h1 className="text-reveal">Ashwin Lara Lewis</h1>
                    <h3 className="text-reveal">And I'm a <span ref={firstElement}></span></h3>

                    {/* SOCIAL MEDIA ICONS */}
                    <div className="social-media">
                        <a href='https://github.com/AshwinLaraLewis' target="_blank" rel="noreferrer" className="enhanced-hover"><i className="bx bxl-github"></i></a>
                        <a href='https://www.linkedin.com/in/lewisashwinlara/' target="_blank" rel="noreferrer" className="enhanced-hover"><i className="bx bxl-linkedin-square"></i> </a>
                        <a href='mailto:lewisashwinlara@gmail.com' target="_blank" rel="noreferrer" className="enhanced-hover"><i className="bx bx-envelope"></i> </a>
                        <a href='https://instagram.com/lewisashwinlara' target="_blank" rel="noreferrer" className="enhanced-hover"><i className="bx bxl-instagram"></i> </a>
                    </div>
                    {/* RESUME LINK  */}
                    <a href='./Ashwin Lara Lewis Resume (2).pdf' className="float-btn btn pulse-animation">Download Resume</a>
                </div>

                {/* PROFILE IMAGE */}
                <div className="home-image reveal-right floating" ref={homeImageRef}>
                    <img src={profileImage} alt='Ashwin Lara Lewis portrait' loading='eager' />
                </div>
            </section>
    );
}

export default HomeSection;
