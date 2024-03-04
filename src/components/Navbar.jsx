import React, {useState} from "react";
import './Navbar.css'; // อย่าลืม import CSS file

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">console.log(Nattapat.Portfolio)</div>
            <ul className={`nav-links ${isOpen ? "open" : ""}`}>
                <li><a href="#Aboutme" onClick={toggleMenu}>About Me</a></li>
                <li><a href="#myskills" onClick={toggleMenu}>My Skills</a></li>
                <li><a href="#my-project" onClick={toggleMenu}>My Projects</a></li>
                <li><a href="#contact-me" onClick={toggleMenu}>Contact Me</a></li>
            </ul>
            <div className={`hamburger ${isOpen ? "toggle" : ""}`} onClick={toggleMenu}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
};

export default Navbar;