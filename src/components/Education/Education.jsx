import React from 'react';
import './Education.css';
import theme_Pattern from '../../assets/theme_pattern.svg'
function Education() {
  return (
    <div id="education" className="education-container">
      <div className="education-title">
      <h1>My Education</h1>
      <img src={theme_Pattern} alt=''/>
      </div>
         <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2020</div>
          <div className="timeline-content">
            <h2>Adarsh English Medium School, Satana</h2>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2020 - 2023</div>
          <div className="timeline-content">
            <h2>Diploma in Government Polytechnic Ahmednagar</h2>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2023 - 2026</div>
          <div className="timeline-content">
            <h2>Vishwakarma Institute of Information Technology, Pune</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
