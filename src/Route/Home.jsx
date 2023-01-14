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
        {/* My Statistics */}
        <div className={styles.mystats}>
          <h3>My Statistics</h3>
          <div>
            <img width="450px" height="400px" align="center" src="https://github-readme-stats.vercel.app/api?username=vikramn11&show_icons=true&locale=en" alt="vikramn11" />
            <img width="450px" height="400px" align="left" src="https://github-readme-stats.vercel.app/api/top-langs?username=vikramn11&show_icons=true&locale=en&layout=compact" alt="vikramn11" />
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
    <div className={styles.projectsdiv}>
      <h3>Featured Projects</h3>
      <div>
        <img src="./images/monsterclone.png" alt="monsterclone" />
        <div>
          <h4>Monster India Clone</h4>
          <div>
            <i class="devicon-html5-plain colored"></i>
            <i class="devicon-css3-plain colored"></i>
            <i class="devicon-javascript-plain colored"></i>
            <i class="devicon-github-original colored"></i>
          </div>
          <p>A website for jobs and career opportunities in the e-recruitment space.
             A collaborative project built by a team of 5 executed in 7 days.
          </p>
          <a href="https://shiny-smakager-81ae37.netlify.app/"><button>Check it out!</button></a>
          <a href="https://github.com/Abhijeet-abhi/enormous-weight-975"><button>Github Link</button></a>
        </div>
      </div>
      <div>
        <div>
          <h4>India Today Clone</h4>
          <div>
            <i class="devicon-html5-plain colored"></i>
            <i class="devicon-css3-plain colored"></i>
            <i class="devicon-javascript-plain colored"></i>
            <i class="devicon-github-original colored"></i>
          </div>
          <p>An online news magazine to read news from India and around the world.
             A collaborative project built by a team of 5 executed in 7 days.
          </p>
          <a href="https://bespoke-naiad-451ef2.netlify.app/index.html"><button>Check it out!</button></a>
          <a href="https://github.com/Saket1810/Construct-week"><button>Github Link</button></a>
        </div>
        <img src="./images/indiatodayclone.png" alt="monsterclone" />
      </div>
    </div>
    {/* Contact */}
    <div className={styles.contactdiv}>
      <h3>Contact</h3>
      <p>Contact Number : 8668216726</p>
      <p>Email Address : vikramnavik98@gmail.com</p>
      <p>Address : Nagpur, Maharashtra</p>
      <a href=""><i class="devicon-linkedin-plain"></i></a>
      <a href=""><i class="devicon-github-original colored"></i></a>
      <a href=""></a>
      </div>
    </div>
  )
}

export default Home