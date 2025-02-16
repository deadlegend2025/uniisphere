import React from 'react';
import './Aboutus.css'; // Ensure you have this CSS file

function Aboutus() {
    const headingStyle = {
        textAlign: 'left', // Moves text to the left
        fontSize: '2rem', // Default font size for large screens
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '8px',
        marginLeft: '0', // Aligns text to the very left
      };
  return (
    <div className="about-container">
      <h2 className="about-heading">About Us?</h2>
      <p className="about-text">
        Uniisphere is a student networking app designed to connect university students for academic collaboration, 
        social networking, and career development. It offers features like secure messaging, event discovery, 
        study groups, mentorship, freelancing opportunities, and psychological support to create a comprehensive 
        platform for student engagement and growth.
      </p>
      <span>&nbsp;</span>
      <h3 style={headingStyle}>Peoples :</h3>
    </div>
  );
}

export default Aboutus;
