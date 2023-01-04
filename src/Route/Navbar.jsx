import React from 'react'

const Navbar = () => {
  return (
    <div style={{display:"flex", justifyContent : "space-evenly", alignItems:"center", border:"3px solid gray", position:"sticky", top:"0px"}}>
        <div>Home</div>
        <div>About Me</div>
        <div>Skills</div>
        <div>Projects</div>
        <div>Contact & Resume</div>
    </div>
  )
}

export default Navbar