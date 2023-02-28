import React from 'react';
import { Link } from 'react-scroll';
import styles from "../Styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navdiv} style={{display:"flex", justifyContent : "space-evenly", alignItems:"center", position:"sticky", top:"0",boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px", fontSize:"2.2rem", borderRadius:"0px 0px 5px 5px", padding:"1rem", color:"#8892b0", backgroundColor:"#0a192f"}}>
        <Link to="home" smooth={true} duration={500}>
          <div className={styles.navindiv}>Home</div>
        </Link>
        <Link to="about" smooth={true} duration={500}>
          <div className={styles.navindiv}>About Me</div>
        </Link>
        <Link to="skills" smooth={true} duration={500}>
          <div className={styles.navindiv}>Skills</div>
        </Link>
        <Link to="project" smooth={true} duration={500}>
          <div className={styles.navindiv}>Projects</div>
        </Link>
        <Link to="contact">
          <div className={styles.navindiv}>Contact</div>
        </Link>
        <a href="./Vikram_Navik.pdf" target="_blank">
          <div className={styles.navindiv}>
            <button style={{border:"0.2rem solid #8892b0", padding:"0.5rem", borderRadius:"0.7rem"}}>Resume</button>
          </div>
        </a>
    </div>
  )
}

export default Navbar