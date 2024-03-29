import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/williamzhang4/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="LinkedinIcon" /></a>
              <a href="https://github.com/crimmzx" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="GithubIcon" /></a>
              <a href="https://www.instagram.com/kuwxsa/" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="InstagramIcon" /></a>
            </div>
            <p>This page was made by William Zhang, © 2023</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
