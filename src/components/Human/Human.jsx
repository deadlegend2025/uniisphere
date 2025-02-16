import React from 'react';
import "./Human.css";
import vec2 from "../../assets/vec2.png";
import ppls from "../../assets/ppls.png";


function Human() {
  return (
    <div>
         <div className='abc'>
        <h2 className="human_text">HUMAN LIBRARY</h2>
        </div>
    <div className="human-container">

     
        
        <div className="human-text">
 
        <p>
          A feature that allows individuals to share their stories, discuss their challenges,
          and seek guidance from others. Using a matching algorithm, you will be paired with people
          who can offer support, insights, or advice, creating meaningful connections with those you may not know.
        </p>
      </div>

      <div className="human-images">
        <img src={vec2} alt="Vector" className="vec2" />
        <img src={ppls} alt="People" className="ppls" />
      </div>
    </div>
    </div>
   
  );
}

export default Human;
