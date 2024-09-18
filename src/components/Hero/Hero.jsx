import React from 'react';
import './Hero.css';
import profile_img from '../../assets/portfolio.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import resume_pdf from '../../assets/Anushka_resume_viit1.pdf'; 

function Hero() {
  return (
    <div id="home" className='hero'>
       <img src={profile_img} alt="Profile" />
       <h1><span>I'm Anushka Bachhav,</span>Full-Stack Developer</h1>
       <p>I’m a passionate Full-Stack Developer from VIIT, Pune, eager to dive into live projects. Let’s turn ideas into reality together!</p>
       <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink>
        </div>
        <div className="hero-resume">
          <a href={resume_pdf} target="_blank" rel="noopener noreferrer">My resume</a>
        </div>
       </div>
    </div>
  );
}

export default Hero;
