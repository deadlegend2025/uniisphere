import React from 'react';
import Goal1 from "../../assets/Goal1.png";
import goal2 from "../../assets/goal2.png";
import goal3 from "../../assets/goal3.png";
import goal4 from "../../assets/goal4.png";
import './Goal.css';

function Goal() {
  return (
    <div className="goal-container">
      {/* Header with title and decorative images */}
      <div className="goal-header">
        <img src={goal2} alt="Decoration 1" className="goal-decoration goal-left" />
        <h1 className="goal-title">OUR GOAL</h1>
        <img src={Goal1} alt="Decoration 2" className="goal-decoration goal-right" />
      </div>

      {/* Content with paragraph and decorative images */}
      <div className="goal-content">
        <img src={goal4} alt="Decoration 3" className="goal-decoration goal-bottom-left" />
        <p className="goal-text">
          Uniisphere’s mission is to empower university students by fostering meaningful connections,
          enhancing academic collaboration, and providing resources for personal and professional growth
          ensuring opportunities for all, regardless of where they graduated from.
        </p>
        <img src={goal3} alt="Decoration 4" className="goal-decoration goal-bottom-right" />
      </div>
    </div>
  );
}

export default Goal;