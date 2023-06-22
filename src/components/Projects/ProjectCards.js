import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title
          style={{
            color: "cyan",
            fontWeight: "bold",
            textShadow: "0.5px 1px white",
            letterSpacing: "1px",
          }}
        >
          {props.title}
        </Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <>
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>

            <Button
              variant="primary"
              href={props.youtubeLink}
              target="_blank"
              style={{ marginLeft: "4px", marginTop: "18px" }}
            >
              <BsYoutube /> &nbsp;
              {"YouTube"}
            </Button>
          </>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
