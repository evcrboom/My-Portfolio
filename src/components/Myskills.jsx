import React, {useState,useEffect} from "react";
import "./Myskills.css";
import { FaHtml5, FaNodeJs, FaBootstrap, FaReact, FaGithub } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiPostman } from "react-icons/si";


const Myskills = ()=>{
    const [iconSize, setIconSize] = useState(120);
    useEffect(()=>{
        const handleResize = ()=>{
            if(window.innerWidth <= 500){
                setIconSize(50);
            }
             else if(window.innerWidth <= 810){
                setIconSize(80);
            } else {
                setIconSize(120)
            };
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    },[]);
    return (<section id="myskills">
        <div className="myskill-container">
            <div className="row">
            <h2>
                My skills
           </h2>
           </div>
           <div className="row">
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
                    <div className="icon" >
                    <FaNodeJs size={iconSize} />
                    <BiLogoPostgresql size={iconSize} />
                    </div>
           </div>
           <div className="Tools col">
                <div>
                <h3>DevOps and Tools</h3>
                </div>
                    <div className="icon" >
                    <FaGithub size={iconSize} />
                    <SiPostman size={iconSize} />
                    </div>
           </div>
           </div>
        </div>
    </section>)
};

export default Myskills;