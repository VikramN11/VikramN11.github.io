import React from 'react';
import { Link } from 'react-scroll';
import styles from "../Styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navdiv} style={{display:"flex", justifyContent : "space-evenly", alignItems:"center", position:"sticky", top:"0px", boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px", fontSize:"22px", borderRadius:"0px 0px 5px 5px", padding:"10px", color:"#8892b0"}}>
        <Link to="home" smooth={true} duration={500}>
          <div className={styles.navindiv}>Home</div>
        </Link>
        <Link to="about" smooth={true} duration={500}>
          <div className={styles.navindiv}>About Me</div>
        </Link>
        <Link to="skills" smooth={true} duration={500}>
          <div className={styles.navindiv}>Skills</div>
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          <div className={styles.navindiv}>Projects</div>
        </Link>
        <Link to="/contact">
          <div className={styles.navindiv}>Contact</div>
        </Link>
        <Link to="./Vikram_Navik.pdf" target="_blank">
          <div className={styles.navindiv}>
            <button style={{border:"2px solid #8892b0", padding:"5px", borderRadius:"7px"}}>Resume</button>
          </div>
        </Link>
    </div>
  )
}

export default Navbar