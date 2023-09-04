import React from "react";
import Illustration from "../../assets/icons/Illustration";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <h1>I BUILD</h1>
        <h1>WEBSITES</h1>
      </div>
      <div className={styles.foreground}>
        <div className={styles.content}>
          <h1 className={styles.name}>Ansh Phirani</h1>
          <h6 className={styles.bio}>Full Stack Web Developer</h6>
          <Link to="/projects">
            <button className={styles.button}>View Work</button>
          </Link>
          <Link to="/contact">
            <button className={styles.button__outlined}>Contact Me</button>
          </Link>
        </div>
        <Illustration />
      </div>
    </div>
  );
};

export default Home;
