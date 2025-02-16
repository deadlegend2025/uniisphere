import React from 'react';
import "./Education.css";
import ep1 from "../../assets/ep1.png";
import ep2 from "../../assets/ep2.png";
import ep3 from "../../assets/ep3.png";
import ep5 from "../../assets/ep5.png";
import vec1 from "../../assets/vec1.jpg";
import book from "../../assets/book.png";

function Education() {
  function EducationImage({ src, className }) {
    return <img src={src} alt="Education" className={className} />;
  }

  return (
    <div className="education-container">
      <div className="education-images">
        <h2 className="education-title">EDU-VAULT</h2>
        <EducationImage src={ep1} className="ep1" />
        <EducationImage src={ep2} className="ep2" />
        <EducationImage src={ep3} className="ep3" />
        <EducationImage src={ep5} className="ep5" />

        <div className="education-header">
          <div className="image-stack">
            <img src={vec1} alt="vector" className="vec-image" />
            <img src={book} alt="book" className="book-image" />
          </div>
     

        </div>

        <p className="text">
            Here we Provide E-books, study guides, and reference materials,
            past papers, handmade notes, while features like search, bookmarks,
            and offline access improve usability.
          </p>
    
       
          <h2 className='extra-text'>Your Path to Smarter Learning</h2>
      </div>
     
    </div>
  );
}

export default Education;