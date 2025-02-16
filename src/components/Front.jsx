import React from 'react';
import './Front.css'; // Import the CSS file
import ecp from '../assets/ecp.png';
import Group from '../assets/Group.png';
import dot from '../assets/dot.png';
import arrow from '../assets/arrow.png';
import ecp2 from '../assets/ecp2.png';
import ecp3 from '../assets/ecp3.png';
import ecp4 from '../assets/ecp4.png';


function Front() {
  return (
    <div className="container">
      <img src={ecp} alt="Ellipse-01" className="ellipse" />
      <img src={ecp2} alt="Ellipse-02" className="ellipse2" />
      <img src={ecp3} alt="Ellipse-02"  className='ellipse3'/>
      <img src={ecp4} alt="Ellipse-02"  className='ellipse4'/>
      <div className="centered-content">
        <img src={Group} alt="UNIISPHERE_TEXT" className="uniisphere-text" />
        <p className="slogan">Connect | Collaborate | Succeed</p>
        <button className="button">
          <span style={{ color: '#dc4a46' }}>P</span>
          <span style={{ color: '#38a3ac' }}>R</span>
          <span style={{ color: '#a7829d' }}>E</span>
          <span> </span>
          <span style={{ color: '#889095' }}>R</span>
          <span style={{ color: '#e9877a' }}>E</span>
          <span style={{ color: '#a7829d' }}>G</span>
          <span style={{ color: '#e9877a' }}>I</span>
          <span style={{ color: '#38a3ac' }}>S</span>
          <span style={{ color: '#da3e39' }}>T</span>
          <span style={{ color: '#38a3ac' }}>E</span>
          <span style={{ color: '#889095' }}>R</span>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '5px',
              position: 'relative',
              top: '-0.5vh',
            }}
          >
            <span>&nbsp;</span>
            <img src={dot} alt="dot_button" className="dot" />
            <img src={dot} alt="dot_button" className="dot" />
            <img src={arrow} alt="arrow_button" className="arrow" />
          </span>
        </button>
        <h1 className="heading">"Get a Head Start Pre-register Now"</h1>
        
        
      </div>
    </div>
  );
}

export default Front;