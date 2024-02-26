import React from "react";
import "./Aboutme.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { motion } from "framer-motion";

const Aboutme = () => {
  return (
    <section id="Aboutme">
      <h1>About me</h1>
      <div className="background-aboutme">
        <motion.div 
        className="photo-blog"
        initial={{ x: "-10vw", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            className="profile"
            src={process.env.PUBLIC_URL + "/images/profile/profilepicture.png"}
            alt="Profile"
          />
        </motion.div>
        <motion.div
          className="card"
          initial={{ x: "10vw", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 1 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardContent>
              <h2>Hi :)</h2>
              <br />
              <br />
              <p>
                👋 My name is Boom. I'm pleased to meet you. I graduated with a
                Bachelor's degree in Civil Engineering from Thammasat
                University. Currently, I'm honing my programming skills with the
                aspiration to work as a web developer. This website is designed
                to showcase my abilities and skills in programming. My hobbies
                include photography, playing basketball, piano, and computer
                games. I hope this allows you to get to know me better 💜
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Aboutme;
