import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:"flex", justifyContent : "space-evenly", alignItems:"center", position:"sticky", top:"0px", boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px", fontSize:"22px", borderRadius:"0px 0px 5px 5px", padding:"10px", color:"#8892b0"}}>
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
          <button style={{border:"2px solid #8892b0", padding:"5px", borderRadius:"7px"}}>Contact & Resume</button>
        </Link>
    </div>
  )
}

export default Navbar