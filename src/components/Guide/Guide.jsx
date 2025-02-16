import React from 'react'
import guide from "../../assets/guide.svg";
import guidevec from "../../assets/guidevec.svg";
import './Guide.css'

function Guide() {
  return (
    <div>
        <div>
            <div className='guide-header'>
                <h2 className="guide-title">GUIDENEST</h2>
            </div>
            <div className="guide-container">
      
                <div className="guide-text">
                    <p>
                        Matches you with seniors, alumni, or industry professionals 
                        from different universities to support your academic 
                        and career development.
                    </p>
                </div>
            
                <div className="guide-images">
                    <img src={guide} alt="Vector" className="guide-bg" />
                    <img src={guidevec} alt="People" className="guide-overlay" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Guide;
