import React from "react";
import "./Aboutme.css";

const Aboutme = ()=>{
    return (<section id="Aboutme" className="background-aboutme">
        <div className="photo-blog">
            <img className="profile" src={process.env.PUBLIC_URL + '/images/profile/profilepicture.png'} alt="Profile" />
        </div>
        <div className="text"></div>
    </section>)
};

export default Aboutme;