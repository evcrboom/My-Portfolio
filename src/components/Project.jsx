import React from "react";
import "./Project.css";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <section id="my-project">
      <div className="project-container">
        <div className="header-project">
          <h2>My Projects</h2>
        </div>
        <div className="project-container-list">
          <div className="project-list">
            <a href="https://github.com/evcrboom/Instagram-clone">
              <motion.img
                initial={{ x: "-10vw", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ type: "tween", duration: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="first-image"
                src={process.env.PUBLIC_URL + "/images/projects/instaclone.png"}
                alt="myproject"
              />
            </a>
            <motion.div
              className="project-detail"
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ type: "tween", duration: 1 }}
              viewport={{ once: true }}
            >
              <h3>Instagram Clone</h3>
              <p>
                This project is a development of a website inspired by
                Instagram, utilizing React for the front-end and Node.js for the
                back-end. It incorporates a variety of tools and packages, such
                as axios for handling requests related to login, registration,
                and API requests for photo uploads. Usernames and passwords are
                stored in a PostgreSQL database, with the bcrypt package
                ensuring the security of user passwords. <br />
                <br />
                For the front-end, hooks along with useState and useEffect are
                employed to animate the website during actions like creating a
                post, editing a post, etc. This design and development approach
                results in a website that closely mirrors Instagram in terms of
                functionality and user experience.
              </p>
            </motion.div>
          </div>
          <div className="project-list reverse">
            <motion.div
              className="project-detail"
              initial={{ y: "-10vh", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "tween", duration: 1 }}
              viewport={{ once: true }}
            >
              <h3>Simon Game</h3>
              <p>
                Make Simon game by using html,css and javascript. If you're new
                to the game, here's how it works: just activate the buttons,
                watch and listen as the four buttons light up randomly and
                produce different sounds. Then, press the buttons in the same
                order to progress to the next round. With each round, the number
                of buttons to press increases as does the challenge.
              </p>
            </motion.div>
            <a href="https://github.com/evcrboom/Simon-Game">
              <motion.img
                initial={{ x: "10vw", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ type: "tween", duration: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="second-image"
                src={process.env.PUBLIC_URL + "/images/projects/simonGame.png"}
                alt="myproject"
              />
            </a>
          </div>
          <div className="project-list">
            <a href="https://github.com/evcrboom/Random-Anime">
              <motion.img
                initial={{ x: "-10vw", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ type: "tween", duration: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="third-image"
                src={process.env.PUBLIC_URL + "/images/projects/randime.png"}
                alt="myproject"
              />
            </a>
            <motion.div
              className="project-detail"
              initial={{ x: "10vw", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ type: "tween", duration: 1 }}
              viewport={{ once: true }}
            >
              <h3>Randime</h3>
              <p>
                This project is inspired by my passion for anime. As an avid
                anime enthusiast, there are times when I find myself uncertain
                about what to watch next. To address this, I've developed a
                solution that caters to such dilemmas. This NodeJS application
                harnesses the power of the{" "}
                <span className="span-link">
                  <a href="https://jikan.moe">Jikan API</a>
                </span>
                , a comprehensive Anime API, to deliver random anime
                recommendations. It's designed to surprise and delight users by
                introducing them to a wide array of anime selections at the
                click of a button. This not only simplifies the decision-making
                process but also enriches the anime-watching experience by
                exposing viewers to titles they might not have considered
                otherwise.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
