import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ziran Fuzooly </span>
            from <span className="purple"> Sri Lanka.</span>
            <br/>
            <br /><span className="purple">I am a hardworking and ambitious</span> <span > individual with a great passion for the Computer Science and Software Engineering industry. I completed my primary degree <span className="purple">BEng(Hons) in Software Engineering with First Class Hons,</span> at the University of Westminster affiliated with Informatics Institute of Technology. I have excellent communication skills, enabling me to communicate with a wide range of people effectively and have good leadership skills; I completed my Third year Industrial Placement training successfully at<span className="purple"> Motion Miracles</span> as a Software Engineer Intern.After completion of my university degree, Now i am working as a Software Engineer I at <span className="purple"> Circles.Life.</span></span>
            <br/>
           
            <br/><span className="purple"> Circles.Life </span> is the fastest growing technology firm in the telco industry, offering a SaaS based <span className="purple">‘Digital Telco as a Service’</span> to global telcos around the world.
            <br />
            <br/>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Zee Fuzooly</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
