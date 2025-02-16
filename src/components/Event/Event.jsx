import React from 'react';
import "./Event.css"; // Ensure the path is correct
import vec3 from "../../assets/vec3.png";
import logo1 from "../../assets/logo1.png"; // Import your logos
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";

function Event() {
  const events = [
    { date: 'Jan 2025', title: 'National Moot Court Competition', name: 'University of Delhi', logo: logo1 },
    { date: 'Jan 2025', title: 'Global Leader Speaking on Future of Tech', name: 'India Tech Summit', logo: logo2 },
    { date: 'Jan 2025', title: 'UPES National Debate Competition', name: 'UPES', logo: logo3 },
    { date: 'Feb 2025', title: 'Youth Entrepreneurship Summit', name: 'IIM', logo: logo4 },
  ];

  return (
    <div className="event-wrapper">
      <div className="event-heading-container">
        <h2 className="abcd">EVENTS</h2>
      </div>
      <div className="event-background">
        <img src={vec3} alt="event_vector" className="event-vector" />
        <div className="events-list">
          {events.map((event, index) => (
            <div key={index} className="event-container">
              <img src={event.logo} alt={`${event.name} logo`} className="event-logo" />
              <div className="event-item">
                <div className="event-design">
                  <span className="event-name">{event.name}</span>
                  <span className="event-title">{event.title}</span>
                </div>
                <span className="event-date">{event.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Event;