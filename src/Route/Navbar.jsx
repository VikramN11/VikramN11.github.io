import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:"flex", justifyContent : "space-evenly", alignItems:"center", border:"3px solid gray", position:"sticky", top:"0px"}}>
        <Link to="/">
          <div>Home</div>
        </Link>
        <Link to="/about">
          <div>About Me</div>
        </Link>
        <Link to="/skills">
          <div>Skills</div>
        </Link>
        <Link to="/projects">
          <div>Projects</div>
        </Link>
        <Link to="/contact">
          <div>Contact & Resume</div>
        </Link>
    </div>
  )
}

export default Navbar