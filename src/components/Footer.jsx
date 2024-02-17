import React from "react";
import "./Footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = ()=>{
    return (<section id="footer">
        <div className="footer-container">
            <div className="social-container">
            <a className="icon-link" href="https://www.facebook.com/boomtheluxSK/">
                <FaFacebookSquare size="40"/>
            </a>
            <a className="icon-link" href="https://github.com/evcrboom">
                <FaGithub size="40" />
            </a>
            <a className="icon-link" href="https://www.instagram.com/nattapatboomboom/">
                <FaInstagramSquare size="40" />
            </a>
            </div>
            <div className="credit-container">
                <h2>Copyright © Nattapat Pattarapremcharoen</h2>
            </div>
        </div>
    </section>)
};

export default Footer;