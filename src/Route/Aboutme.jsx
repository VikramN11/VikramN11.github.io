import React from 'react';
import styles from "../Styles/Aboutme.module.css";
//import profile from ""

const Aboutme = () => {
  return (
    <div className={styles.aboutdiv}>
       <div>
        <img className={styles.imagediv} src="./images/pic.jpg" alt="" />
       </div>
       <div className={styles.secdiv}>
        <h3>About Me</h3>
         <p>I am a Full Stack Web Developer learning MERN Stack at Masai School.
           I have done various group as well as individual projects in my journey at Masai.
           I also did my B.Tech in Chemical Technology from Laxminarayan Institute of Technology, Nagpur.
           After graduation I have done job in Food Industry as Quality Executive for one year and nine months. 
           My interests are coding, watching News, playing cricket.</p>
       </div>
    </div>
  )
}

export default Aboutme