import React from "react";
import "./styles.css"
import {projectImage1, projectImage2, projectImage3, projectImage4 } from "./images/images.js";
import HomeSection from "./Home";
import AboutSection from "./About";
import HeaderSection from "./Header";
import ExperienceSection from "./Experience";
import EducationSection from "./Education";
import SkillsSection from "./Skills";
import CertificationsSection from "./Certifications";
import { useStaggeredAnimation } from "./hooks/useScrollAnimation";

const App = () => {
    const projectContainerRef = useStaggeredAnimation(200);





    // NAVBAR TRIGGER 'active' class on current section 

    var sections = document.querySelectorAll("section");

    var navLinks = document.querySelectorAll("header nav a");


    window.onscroll = () => {

        sections.forEach(section => {
            var top = window.scrollY;
            var offset = section.offsetTop - 150;
            var height = section.offsetHeight;

            let id = section.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove("active");
                    document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
                });
            };
        });
    }









    // -----------------------------------------







    


    // Hide navBar widget when link is clicked..

    // SCROLL REVEAL JS



    // ScrollReveal({
    //     reset: true,
    //     distance: '70px',
    //     duration: 2000,
    //     delay: 200
    // });

    // ScrollReveal().reveal('.home-content, .heading', { origin: 'top', duration: 1000 })
    // ScrollReveal().reveal('.home-image, .project-box,.contact form', { origin: 'bottom', duration: 1000 })
    // ScrollReveal().reveal('.home-content h1, .about,.contact form', { origin: 'left', duration:1000 });








    return (
        <div>
            <HeaderSection />




            {/* HOME SECTION */}

            <HomeSection />



            {/* ABOUT SECTION */}

            <AboutSection />

            {/* EXPERIENCE SECTION */}

            <ExperienceSection />

            {/* EDUCATION SECTION */}

            <EducationSection />

            {/* SKILLS SECTION */}

            <SkillsSection />

            {/* PROJECT SECTION */}

            <section className="projects" id="projects">

                <h2 className="heading reveal">Latest <span>Projects</span></h2>

                <div className="project-container" ref={projectContainerRef}>

                    {/* BOX 1 */}
                    <div className="project-box reveal enhanced-hover">
                        <img src={projectImage1} alt='Grocery Store Project' />

                        <div className="project-layer">
                            <h4>Grocery Store with Django</h4>
                            <p>Full-stack grocery store web application using Django and SQLite with responsive HTML/CSS interfaces, user authentication, and admin dashboard.</p>
                            <a href='https://github.com/AshwinLaraLewis' target="_blank" rel="noreferrer" className="float-btn"><i className='bx bx-link-external ' ></i></a>
                        </div>

                    </div>


                    {/* BOX 2 */}
                    <div className="project-box reveal enhanced-hover">
                        <img src={projectImage2} alt='CNN Bone Fracture Detection' />

                        <div className="project-layer">
                            <h4>Bone Fracture Detection using CNN</h4>
                            <p>Convolutional Neural Network model to automatically detect bone fractures from X-ray images with GUI interface and real-time predictions.</p>
                            <a href='https://github.com/AshwinLaraLewis' target="_blank" rel="noreferrer" className="float-btn"><i className='bx bx-link-external' ></i></a>
                        </div>

                    </div>

                    {/* BOX 3 */}
                    <div className="project-box reveal enhanced-hover">
                        <img src={projectImage3} alt='MERN Stack Food Delivery' />

                        <div className="project-layer">
                            <h4>Tomato-MERN Stack Food Delivery App</h4>
                            <p>Full-stack web application with React, Node.js, Express, and MongoDB Atlas, featuring JWT authentication and Stripe payment integration.</p>
                            <a href='https://github.com/AshwinLaraLewis' target="_blank" rel="noreferrer" className="float-btn"><i className='bx bx-link-external' ></i></a>
                        </div>

                    </div>

                    {/* BOX 4 */}
                    <div className="project-box reveal enhanced-hover">
                        <img src={projectImage4} alt='Heart Analysis Project' />

                        <div className="project-layer">
                            <h4>Heart Analysis using R programming</h4>
                            <p>Statistical analysis and machine learning techniques to evaluate cardiac data with R programming for data visualization and health insights.</p>
                            <a href='https://github.com/AshwinLaraLewis' target="_blank" rel="noreferrer" className="float-btn"><i className='bx bx-link-external' ></i></a>
                        </div>

                    </div>

                </div>
            </section>

            {/* CERTIFICATIONS SECTION */}

            <CertificationsSection />

            {/* CONTACT SECTION */}


            <section className="contact" id="contact">
                <h2 className="heading">Contact <span>Me</span></h2>
                
                <div className="contact-info">
                    <div className="contact-item">
                        <i className="bx bx-envelope"></i>
                        <div>
                            <h3>Email</h3>
                            <p>lewisashwinlara@gmail.com</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <i className="bx bx-phone"></i>
                        <div>
                            <h3>Phone</h3>
                            <p>+4915510643718</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <i className="bx bx-map"></i>
                        <div>
                            <h3>Location</h3>
                            <p>Berlin, Germany</p>
                        </div>
                    </div>
                </div>

                <form>
                    <div className="input-box">
                        <input type='text' placeholder="First Name" />
                        <input type='text' placeholder="Last Name" />
                    </div>
                    <div className="input-box">
                        <input type='email' placeholder="Email Address" />
                        <input type='text' placeholder="Subject" />
                    </div>

                    <textarea cols='30' rows='10' placeholder="Type something.." />
                    <input type='submit' value="Send Message" className="btn" />
                </form>
            </section>



            {/* FOOTER SECTION  */}

            <footer className="footer">
                <div className="footer-text">
                    <p>Copyright &copy; 2023 | All rights are reserved.</p>
                </div>

                <div className="developer">
                    <p>Made with ❤ By <span><a href='https://github.com/AshwinLaraLewis'>Ashwin Lara Lewis.</a></span></p>
                </div>
                <div className="social-media">
                    <a href='https://github.com/AshwinLaraLewis' target="_blank" rel="noreferrer"><i className="bx bxl-github"></i></a>
                    <a href='https://www.linkedin.com/in/lewisashwinlara/' target="_blank" rel="noreferrer"><i className="bx bxl-linkedin-square"></i> </a>
                    <a href='mailto:lewisashwinlara@gmail.com' target="_blank" rel="noreferrer"><i className="bx bx-envelope"></i> </a>
                    <a href='https://instagram.com/lewisashwinlara' target="_blank" rel="noreferrer"><i className="bx bxl-instagram"></i> </a>
                </div>

                <div className="top-button">
                    <a href='#home'><i className='bx bx-chevron-up'></i></a>
                </div>
            </footer>









        </div>
    );
}

export default App;
