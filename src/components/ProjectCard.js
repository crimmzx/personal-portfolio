import { Col, Button } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link, buttonText, onButtonClick }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt= "company pic" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          {link && (
            <div className="button-container">
            <Button variant="primary" onClick={() => window.open(link, '_blank')}>
              Link to Website
            </Button>
            </div>
          )}
        </div>
      </div>
    </Col>
  )
}
