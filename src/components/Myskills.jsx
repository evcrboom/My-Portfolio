import React, { useState, useEffect } from "react";
import "./Myskills.css";
import {
  FaHtml5,
  FaNodeJs,
  FaBootstrap,
  FaReact,
  FaGithub,
} from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiPostman } from "react-icons/si";
import { motion } from "framer-motion";

const Myskills = () => {
  const [iconSize, setIconSize] = useState(120);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        setIconSize(50);
      } else if (window.innerWidth <= 810) {
        setIconSize(80);
      } else {
        setIconSize(120);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [isZoomed, setIsZoomed] = useState({
    udemy: false,
    borntodev: false,
  });

  const toggleZoom = (image) => {
    setIsZoomed((prevVal) => ({
      ...prevVal,
      [image]: !prevVal[image],
    }));
  };

  return (
    <section id="myskills">
      <div className="myskill-container">
        <div className="row">
          <h2>My skills</h2>
        </div>
        <motion.div
          className="row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ type: "tween", duration: 3 }}
          viewport={{ once: true }}
        >
          <div className="Front-end col">
            <div>
              <h3>Front-end Development</h3>
            </div>
            <div className="icon">
              <FaHtml5 size={iconSize} />
              <FaCss3Alt size={iconSize} />
              <RiJavascriptFill size={iconSize} />
              <FaBootstrap size={iconSize} />
              <FaReact size={iconSize} />
            </div>
          </div>
          <div className="Back-end col">
            <div>
              <h3>Back-end Development</h3>
            </div>
            <div className="icon">
              <FaNodeJs size={iconSize} />
              <BiLogoPostgresql size={iconSize} />
            </div>
          </div>
          <div className="Tools col">
            <div>
              <h3>DevOps and Tools</h3>
            </div>
            <div className="icon">
              <FaGithub size={iconSize} />
              <SiPostman size={iconSize} />
            </div>
          </div>
        </motion.div>
      </div>
      <div className="certificate-container">
        <h2 className="certificate-header">Certificate</h2>
        <motion.div
          className="certificate-card"
          initial={{ scale: 1.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            onClick={() => toggleZoom("udemy")}
            className={isZoomed.udemy ? "zoomed" : ""}
            src={process.env.PUBLIC_URL + "/images/certificate/udemy.jpg"}
            alt="certificate"
          />
          <img
            onClick={() => toggleZoom("borntodev")}
            className={isZoomed.borntodev ? "zoomed" : ""}
            src={process.env.PUBLIC_URL + "/images/certificate/borntodev.png"}
            alt="certificate"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Myskills;
