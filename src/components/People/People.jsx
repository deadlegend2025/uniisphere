import React from "react";
import "./People.css";

// Importing images from the assets folder
import people1 from "../../assets/people1.png";
import people2 from "../../assets/people2.png";
import people3 from "../../assets/people3.png";

const people = [
  {
    name: "Himanshu",
    image: people1,
    title: "Business Management",
    description: "Student at Masters Union | Building a Startup | Want to be a successful Entrepreneur | Have been a sports person.",
     gradient: "linear-gradient(to top, #E2E2E2,rgb(185, 220, 241))",
  },
  {
    name: "Aarav",
    image: people2,
    title: "Bachelor in UI/UX",
    description: "Student at university of Delhi | Works at Uniisphere | Previously worked in 3 different contionents | Teamed up.",
    gradient: "linear-gradient(to top, #E2E2E2,rgb(240, 215, 221))", // Pink to Blue Gradient
  },
  {
    name: "Abhishek",
    image: people2,
    title: "B.Tech",
    description: "student at GNOIT/Work at uniisphere | want to be a data analyst | Like to travel",
    gradient: "linear-gradient(to top, #E2E2E2,rgb(241, 227, 197))", // Pink to Blue Gradient
  },
  {
    name: "khushboo",
    image: people3,
    title: "MBA",
    description: "Student at UPES | Works as a Marketing Manager | Wants to be a successful Marketing Expert | Likes to travel a lot.",
     gradient: "linear-gradient(to top, #E2E2E2,rgb(185, 220, 241))", // Soft Blue Gradient
  },
];

const People = () => {
    return (
      <div className="people-section">
        
        <div className="people-container">
          {people.map((person, index) => (
            <div
              key={index}
              className="card-container"
              style={{ background: person.gradient }} // Apply Gradient
            >
              <h2 className="card-title">“{person.name}”</h2>
              <img src={person.image} alt={person.name} className="avatar" />
              <h3 className="card-subtitle">{person.title}</h3>
              <p className="card-text">{person.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
export default People;
