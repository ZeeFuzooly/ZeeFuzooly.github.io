import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
             <span className="purple">Software Engineer I </span>
            
            <br />Circles.Life<span > | Full-time</span>
            <br />July 2022<span > - Present</span>
            <br />Colombo<span > | Sri Lanka</span>
            
            <br /><br/><span className="purple"> Skills : </span> <span> React.js | JavaScript | Front-end Development</span>
<br/><br/>
            <span className="purple">Software Engineer Intern </span>
            
            <br />Motion Miracles<span > | Full-time</span>
            <br />July 2020<span > - July 2021</span>
            <br />Colombo<span > | Sri Lanka</span>

            <br /><br/><span className="purple"> Skills : </span> <span> React.js | JavaScript | Front-end Development | UI/UX | Blender </span>
            
          
            <br />
            <br />

            <span className="purple">Front-End Developer </span>
            
            <br />TravelEX<span > | Full-time</span>
            <br />September 2019<span > - May 2020</span>
            <br />Colombo<span > | Sri Lanka</span>

            <br /><br/><span className="purple"> Skills : </span> <span> React.js | JavaScript | Front-end Development | CSS | WebDesign </span>
            
          </p>
          

         
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
