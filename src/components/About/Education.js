import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
             <span className="purple">University of Westminster </span>
            
            <br />Bachelor of Engineering(BEng)-Hons, Software Engineering
            <br />Grade<span > - First Class Honours</span>
            <br />September 2018<span > - July 2022</span>
           
            <br />Westminster<span > | United Kingdom</span>
            
          
<br/><br/>
<span className="purple">Informatics Institute of Technology </span>
            
            <br />Foundation degree, Foundation Certificate in Higher Education
            <br />Grade<span > - Distinction</span>
            <br />January 2018<span > - August 2018</span>
            
            <br />Colombo<span > | Sri Lanka</span>
            
          
<br/><br/>
<span className="purple">T/R.K.M. Sri Koneswara Hindu College</span>
            
            <br />Advanced Level, Physical Science
            <br />January 2003<span > - August 2016</span>
            <br />Trincomalee<span > | Sri Lanka</span>
            
          
<br/><br/>
            
          </p>
          

         
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
