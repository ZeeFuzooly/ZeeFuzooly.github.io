import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bitsOfCode from "../../Assets/Projects/img1.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="SwitchML"
              description="University Final Year Project. Player Replacement System using Machine Learning Technics.Switch-ML analyzes a player's skill and temperament, giving it an edge over other algorithms. Players are defined by their recent home and away results. Switch-ML employs player characteristics and a bespoke machine learning model."
              ghLink="https://github.com/ZeeFuzooly/SwitchML_FinalYear_Project"
              demoLink="https://www.tella.tv/video/cl3vvf3r200r509l80htfdbzh/view"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Game Perfomance Dashboard"
              description="Worked on a dashboard project in Motion Miracles Engineering Team, worked as a Front-End Engineer in this project, and did some Back-End API works.
              "
              ghLink="https://github.com/ZeeFuzooly/SwitchML_FinalYear_Project"
              demoLink="https://www.youtube.com/watch?v=_2n0pIubWBY"    ></ProjectCard>
            
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="TravelEX"
              description="University Second Year Software Development Group Project(SDGP) TravelEX - Hotel Recommendation Web Application worked as a frontend developer for this project Used Technologies -ReactJs, MongoDB, Python, and Postman (etc)
              "
              ghLink="https://github.com/ZeeFuzooly/SwitchML_FinalYear_Project"
              demoLink="https://www.youtube.com/watch?v=_2n0pIubWBY"      ></ProjectCard>
            
            
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Pizzeria"
              description="University final year IoS module project. Pizza app developed for Iphone."

              
              ghLink="https://github.com/ZeeFuzooly/SwitchML_FinalYear_Project"
              demoLink="https://www.tella.tv/video/cl3vv05e500d509jr0rh26i7a/view"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Weatherly"
              description="University final year IoS module project. weather app developed for Iphone."
              ghLink="https://github.com/ZeeFuzooly/SwitchML_FinalYear_Project"
              demoLink="https://www.tella.tv/video/cl3vv5z61005709l05d0s6zm2/view"              
            />
          </Col>

        

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Takeout Tella"
              description="Mobile UI/UX project for the University of Westminster."
              ghLink="https://github.com/ZeeFuzooly/SwitchML_FinalYear_Project"
              demoLink="https://www.youtube.com/watch?v=_2n0pIubWBY" 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Calculately"
              description="University final year IoS module project I. I Phone application for banking system with loan mortgage, compound savings, and simple saving calculators. "
              ghLink="https://github.com/ZeeFuzooly/SwitchML_FinalYear_Project"
              demoLink="https://www.tella.tv/video/cl3vvbspo00r409l89t8zakbc/view"
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
