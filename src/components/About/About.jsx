import React from 'react'
import './About.css'
import theme_pattern from "../../assets/theme_pattern.svg"
import profile_img from '../../assets/anu_portfolio1.jpg'

function About() {
  return (
    <div id="about" className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="Theme Pattern"/>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="Profile" />
            </div>
            <div className="about-right">
                <div className="about-para">
                <p>I’m a passionate Full-Stack Developer, embarking on an exciting journey from completing my diploma at Government Polytechnic, Ahmednagar, to pursuing my Engineering at VIIT, Pune. Along the way, I’ve been learning, experimenting, and refining my skills, turning every line of code into a stepping stone toward success.</p>
                <p>From hands-on experiments to exploring the latest tech trends, I’m on a mission to transform innovative ideas into digital wonders.I’m actively seeking opportunities to collaborate, learn, and contribute my skills as a Full-Stack Developer, with the ambition to build impactful and dynamic solutions.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>BootStrap & Tailwind-CSS</p><hr style={{width:"40%"}}/></div>
                    <div className="about-skill"><p>JavaScript (ES6+)</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>Java</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>PHP</p><hr style={{width:"80%"}}/></div>
                    <div className="about-skill"><p>React.js</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>MongoDB</p><hr style={{width:"45%"}}/></div>
                    <div className="about-skill"><p>SQL/MySQL</p><hr style={{width:"55%"}}/></div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
