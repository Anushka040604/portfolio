import React from 'react';
import './Contact.css';
import theme_Pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "4187711d-12e0-4937-9344-94edbb967d5d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      toast.success("Email sent successfully!");
    } else {
      toast.error("Failed to send email, please try again.");
    }
  };

  return (
    <div id="contact" className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_Pattern} alt="Pattern"/>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact me anytime.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="Mail"/><p>anushkabachhav06@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={github} alt="GitHub"/><p><a href="https://github.com/Anushka040604/" target="_blank" rel="noopener noreferrer">https://github.com/Anushka040604/</a></p>
            </div>
            <div className="contact-detail">
              <img src={linkedin} alt="LinkedIn"/><p><a href="https://www.linkedin.com/in/anushka-bachhav-73488827a/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/anushka-bachhav-73488827a/</a></p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className='contact-right'>
          <label htmlFor="name">Your Name</label>
          <input type="text" placeholder='Enter your name' id="name" name="name" required/>

          <label htmlFor="email">Your Email</label>
          <input type="email" placeholder='Enter your email' id="email" name="email" required/>

          <label htmlFor="message">Write your message here</label>
          <textarea name='message' id="message" rows="8" placeholder='Enter your message' required></textarea>
          <button type="submit" className='contact-submit'>Submit now</button>
        </form>
      </div>
      <ToastContainer/> 
    </div>
  );
}

export default Contact;
