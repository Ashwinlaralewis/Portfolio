import React,{useState} from "react";


export default function HeaderSection() {

    // NAVBAR TOGGLE BUTTON..


    const [isNavBarOpen, setNavBarOpen] = useState(false);


    return (
        <header className="header" >

            {/* Header Logo name */}
            <a href='/' className="logo" style={{cursor:"pointer"}}>Ashwin <span className="logo-name" >Lewis</span></a>

            <i className={isNavBarOpen ? ' bx bx-x' : 'bx bx-menu'} id="menu-icon" style={{ cursor: "pointer" }} onClick={() => {
                setNavBarOpen((previousState) => {
                    return !previousState;
                })
            }}></i>
            {/* <button id="menu-btn">
                    <span className="hamburger-top"></span>
                    <span className="hamburger-middle"></span>
                    <span className="hamburger-"></span>
                </button> */}

            {/* Navigation bar */}
            <nav className={`navbar${ isNavBarOpen ? ' active' : '' }`} >
                <a href='#home' onClick={() => {
                    setNavBarOpen(false);
                }}>Home</a>
                <a href='#about' onClick={() => {
                    setNavBarOpen(false);
                }}>About</a>
                <a href='#experience' onClick={() => {
                    setNavBarOpen(false);
                }}>Experience</a>
                <a href='#education' onClick={() => {
                    setNavBarOpen(false);
                }}>Education</a>
                <a href='#skills' onClick={() => {
                    setNavBarOpen(false);
                }}>Skills</a>
                <a href='#projects' onClick={() => {
                    setNavBarOpen(false);
                }}>Projects</a>
                <a href='#certifications' onClick={() => {
                    setNavBarOpen(false);
                }}>Certifications</a>
                <a href='#contact' onClick={() => {
                    setNavBarOpen(false);
                }}>Contact</a>
            </nav>
        </header>
    );
}