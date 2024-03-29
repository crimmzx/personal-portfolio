import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import employai from "../assets/img/employai.png";
import edge from "../assets/img/edge.svg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import echelon from "../assets/img/echelon.png";
import tokemak from "../assets/img/tokemak.png";
import maia from "../assets/img/maia.png";
import flare from "../assets/img/flare.png";
import research from "../assets/img/research.jpeg"

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const FolioProjects = [
    {
      title: "Employ AI",
      description: "LLM Research and Development Project",
      imgUrl: employai,
      link: "https://www.employai.com/"
    },
    {
      title: "EdgeFoods",
      description: "Financial Model & Dashboard Project",
      imgUrl: edge,
      link: "https://www.edgefoods.co//"
    },
    {
      title: "Institute for Ideation & Innovation",
      description: "Healthcare ML Project",
      imgUrl: research,
    },
  ];

   const AgileProjects = [
    {
      title: "Echelon",
      description: "Private Equity/Data Science project",
      imgUrl: echelon,
      link: "https://echelon.xyz/"
    },
    {
      title: "Flare Health",
      description: "User Research & AWS Engineer Project",
      imgUrl: flare,
      link: "https://flarehealth.com/"
    },
    {
      title: "Tokemak",
      description: "Crypto Research",
      imgUrl: tokemak,
      link: "https://www.tokemak.xyz/"
    },
     {
      title: "MAIA",
      description: "Biotech Investigator Reseach",
      imgUrl: maia,
      link: "https://maiabiotech.com/"
    }
  ];

  const MlProjects = [
    {
      title: "ML Brain Tumor Detection",
      description: "ML/Medicine intersection project",
      imgUrl: research,
    },
    {
      title: "ML Wildfire Detection",
      description: "ML/Enviroment intersection project",
      imgUrl: research,
    }
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Stuff I've worked on!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Folio</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Agile Rainmakers</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">ML</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          FolioProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          AgileProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                     <Row>
                        {
                          MlProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="bg"></img>
    </section>
  )
}
