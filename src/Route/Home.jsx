import React from 'react';
import styles from "../Styles/Home.module.css";
import GitHubCalendar from "react-github-calendar";

const Home = () => {

  return (
    <div>
      {/* Home */}
    <div className={styles.secondiv} id="home">
        <div>
        <p>Hi, my name is</p>
        <h1>Vikram Navik.</h1>
        <h2>I build things for the web.</h2>
        </div>
        <div>
        <p>I am an aspiring Full Stack Web Developer building projects on the MERN stack.
           I've built three collaborative and one individual project with the help of HTML,
            CSS, Javascript, React, NodeJs, MongoDB, and Express.
        </p>
        </div>
       </div>
    {/* About Me */}
    <div className={styles.aboutdiv} id="about">
       <div>
        <img className={styles.imagediv} src="./images/pic.jpg" alt="vikrampic" />
       </div>
       <div className={styles.secdiv}>
        <h3>About Me</h3>
         <p>I am a Full Stack Web Developer learning MERN Stack at Masai School.
            I have done various group as well as individual projects in my journey at Masai.
            I also did my B.Tech in Chemical Technology from Laxminarayan Institute of Technology, Nagpur.
            After graduation, I have done a job in Food Industry as Quality Executive for one year and nine months.
            My interests are coding, watching News, and playing cricket.</p>
       </div>
    </div>
    {/* Skills */}
    <div className={styles.skilldiv} id="skills">
      <h3>Technical Skills</h3>
        <div className={styles.skillindiv}>
          <i class="devicon-javascript-plain colored"></i>
          <i class="devicon-html5-plain-wordmark colored"></i>
          <i class="devicon-react-original colored"></i>
          <i class="devicon-css3-plain-wordmark colored"></i>
          <i class="devicon-express-original-wordmark colored"></i>
          <i class="devicon-github-original-wordmark colored"></i>
          <i class="devicon-nodejs-plain colored"></i>
          <i class="devicon-mongodb-plain-wordmark colored"></i>
        </div>
        <div className={styles.tooldiv}>
          <h3>Tools</h3>
          <div>
            <i class="devicon-git-plain colored"></i>
            <i class="devicon-github-original colored"></i>
            <i class="devicon-vscode-plain colored"></i>
            <i class="devicon-npm-original-wordmark colored"></i> 
            <i class="devicon-jest-plain colored"></i> 
            <i class="devicon-heroku-original-wordmark colored"></i>
          </div>
        </div>
        {/* My Statistics */}
        <div className={styles.mystats}>
          <h3>My Statistics</h3>
          <div className={styles.mystatimg}>
            <img src="https://github-readme-stats.vercel.app/api?username=vikramn11&show_icons=true&locale=en" alt="vikramn11" />
            <img src="https://github-readme-stats.vercel.app/api/top-langs?username=vikramn11&show_icons=true&locale=en&layout=compact" alt="vikramn11" />
          </div>
        </div>

        <div className={styles.calendardiv}>
          <h3>My Github Calendar</h3>
          {/* My Github Calendar */}
          <div>
          <GitHubCalendar style={{margin:"auto", color:"white"}} username='vikramn11'>
            </GitHubCalendar>
          </div>
            
        </div>


        
    </div>
    {/* Projects */}
    <div className={styles.projectsdiv} id="project">
      <h3>Featured Projects</h3>
      <div>
        <img src="./images/bblooms.png" alt="1800flowersclone" />
        <div>
          <h4>1800-flowers Clone</h4>
          <div>
            <i class="devicon-html5-plain colored"></i>
            <i class="devicon-css3-plain colored"></i>
            <i class="devicon-javascript-plain colored"></i>
            <i class="devicon-react-original colored"></i>
            <i class="devicon-github-original colored"></i>
            <i class="devicon-express-original colored"></i>
            <i class="devicon-mongodb-plain colored"></i>
          </div>
          <p>Ecommerce website where you can buy different gifts for diffrent occassions.
             A collaborative project built by a team of 5 executed in 7 days.
          </p>
          <a href="https://bblooms.vercel.app/"><button>Check it out!</button></a>
          <a href="https://github.com/swati082001/bBlooms-1800Flowers-clone"><button>Github Link</button></a>
        </div>
      </div>
      <br/><br/>
      <div>
        <div>
          <h4>Shopclues Clone</h4>
          <div>
            <i class="devicon-html5-plain colored"></i>
            <i class="devicon-css3-plain colored"></i>
            <i class="devicon-javascript-plain colored"></i>
            <i class="devicon-react-original colored"></i>
            <i class="devicon-github-original colored"></i>
          </div>
          <p>Ecommerce online website for the best products of all categories for the consumer.
             A collaborative project built by a team of 5 executed in 7 days.
          </p>
          <a href="https://shopease-net.netlify.app/"><button>Check it out!</button></a>
          <a href="https://github.com/Shekhar-Joshi07/Shopease"><button>Github Link</button></a>
        </div>
        <img src="./images/shopeasess.png" alt="shopcluesclone" />
      </div>
      <br/><br/>
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
      <br/><br/>
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
    <div className={styles.contactdiv} id="contact">
      <h3>Contact</h3>
      <p>Contact Number : 8668216726</p>
      <p>Email Address : vikramnavik98@gmail.com</p>
      <p>Address : Nagpur, Maharashtra</p>
      <div>
        <a href="https://www.linkedin.com/in/vikramnavik8983/"><i class="devicon-linkedin-plain colored"></i></a>
        <a href="https://github.com/VikramN11"><i class="devicon-github-original colored"></i></a>
      </div>
      </div>
    </div>
  )
}

export default Home