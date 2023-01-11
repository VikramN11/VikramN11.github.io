import React from 'react';
import styles from "../Styles/Home.module.css";
import GitHubCalendar from "github-calendar";

const Home = () => {
    const username="VikramN11";

    GitHubCalendar(".calendar", `${username}`);

    // or enable responsive functionality:
    GitHubCalendar(".calendar", `${username}`, { responsive: true });

    // Use a proxy
    GitHubCalendar(".calendar", `${username}`, {
       proxy (username) {
         return fetch(`https://your-proxy.com/github?user=${username}`)
       }
    }).then(r => r.text())

  return (
    <div>
      {/* Home */}
    <div className={styles.secondiv} id="home">
        <p>Hi, my name is</p>
        <h1>Vikram Navik.</h1>
        <h2>I build things for the web.</h2>
        <p>I am an aspiring Full Stack Web Developer currently building projects on MERN stack.
           I've had build two collabrative projects with the help of HTML, CSS, Javascript.
        </p>
       </div>
    {/* About Me */}
    <div className={styles.aboutdiv} id="about">
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
    {/* Skills */}
    <div className={styles.skilldiv} id="skills">
      <h3>Technical Skills</h3>
        <div className={styles.skillindiv}>
        <div className={styles.icondiv}>
          <i class="devicon-javascript-plain colored"></i>
          <i class="devicon-html5-plain-wordmark colored"></i>
          <i class="devicon-react-original colored"></i>
          <i class="devicon-css3-plain-wordmark colored"></i>
        </div>
        <div className={styles.textdiv}>
          <p>My favorite languages and technologies that I have been using since I started coding for front-end web development and component design.</p>
        </div>
        </div>
        <div className={styles.skillindiv}>
        <div className={styles.textdiv}>
          <p>My preferred technologies and tools for back-end web programming, database architecture, version control, code editing, and container orchestration.</p>
        </div>
        <div className={styles.icondiv}>
          <i class="devicon-express-original-wordmark colored"></i>
          <i class="devicon-github-original-wordmark colored"></i>
          <i class="devicon-nodejs-plain colored"></i>
          <i class="devicon-mongodb-plain-wordmark colored"></i>
        </div>
        </div>

        <div className={styles.calendardiv}>
          <h3>My Github Calendar</h3>
          {/* My Github Calendar */}
          <div className = "calendar">
            Loading the data just for you.
          </div>
        </div>


        
    </div>
    {/* Projects */}
    <div>Projects</div>
    {/* Contact */}
    <div>Contact</div>
    </div>
  )
}

export default Home