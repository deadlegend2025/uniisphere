import React from 'react'
import Ngoecp1 from "../../assets/Ngoecp1.png";
import Ngoecp2 from "../../assets/Ngoecp2.png";
import Ngoppls from "../../assets/Ngoppls.svg";
import Ngox from "../../assets/Ngox.png";
import './Ngo.css'

function Ngo() {
  return (
    <div className="ngo-container">
          <div className="ngo-images">
            <h2 className="ngo-title">NGO</h2>
            <img src={Ngoecp1} className="ngo-ep1" />
            <img src={Ngoecp2} className="ngo-ep2" />
    
            <div className="ngo-header">
              <div className="image-stack">
                <img src={Ngox} alt="vector" className="ngo-vec-image" />
                <img src={Ngoppls} alt="book" className="ngo-book-image" />
              </div>
            </div>
    
            <p className="ngo-text">
              This feature offers you opportunities for volunteering for NGOs, internships, 
              and social impact projects, Skill-Based Volunteering, and Event Collaboration.
            </p>
        
            <h2 className="ngo-extra-text">
              Building a Better Tomorrow by Supporting Communities Today
            </h2>
          </div>
    </div>
  )
}

export default Ngo;
