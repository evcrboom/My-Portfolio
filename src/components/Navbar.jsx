import React, {useState} from "react";
import './Navbar.css'; // อย่าลืม import CSS file

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">console.log(Nattapat.Portfolio)</div>
            <ul className={`nav-links ${isOpen ? "open" : ""}`}>
                <li><a href="#Aboutme">About Me</a></li>
                <li><a href="#myskills">My Skills</a></li>
                <li><a href="#projects">My Projects</a></li>
                <li><a href="#contact">Contact Me</a></li>
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