import React,{useState, useEffect} from "react";
import "./Aboutme.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Aboutme = ()=>{
    const [cardWidth, setCardWidth] = useState("65%");
    useEffect(()=>{
        const handleCardWidth = ()=>{
            if(window.innerWidth <= 1030){
                setCardWidth("90%");
            } else {
                setCardWidth("65%");
            }
        };
        window.addEventListener("resize",handleCardWidth);
        return () => window.removeEventListener("resize",handleCardWidth)
    },[]);
    
    return (<section id="Aboutme">
        <h1>About me</h1>
        <div className="background-aboutme">
        <div className="photo-blog">
            <img className="profile" src={process.env.PUBLIC_URL + '/images/profile/profilepicture.png'} alt="Profile" />
        </div>
        <Card className="card" sx={{maxWidth: cardWidth}}>
    <CardContent >
    <h2>Hi :)</h2>
    <br /><br />
    <p>👋 My name is Boom. I'm pleased to meet you. I graduated with a Bachelor's degree in Civil Engineering from Thammasat University.
    Currently, I'm honing my programming skills with the aspiration to work as a web developer.
     This website is designed to showcase my abilities and skills in programming. My hobbies include photography, playing basketball, piano, and computer games. I hope this allows you to get to know me better 💜</p>
    </CardContent>   
    </Card>
    </div>
    </section>)
};

export default Aboutme;