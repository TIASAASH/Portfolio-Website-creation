import React from "react";
import Card from "react-bootstrap/Card";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p
            style={{
              textAlign: "start",
              letterSpacing: "1.4px",
              fontSize: "1.1rem",
            }}
          >
            Hello Everyone👋🏻, I am <span className="purple">Tiasa Ash, </span>
            from <span className="purple"> Kolkata, West Bengal, India🌍.</span>
            currently, I am pursuing my B. Tech degree in Electronics &
            Communication Engineering 👩‍🎓 from RCC Institute of Information
            Technology 🎓. I have an interest in Web Development, Blockchain
            technologies, and Digital marketing. I am comfortable with Java, C,
            Data Structures and Algorithms & DBMS 👩‍💻.
            <br />
            <br />
            Apart from all of these, I like to do some other activities as
          </p>
          <ul>
            <li
              className="about-activity"
              style={{ fontSize: "1rem", letterSpacing: "1.4px" }}
            >
              <ArrowCircleRightOutlinedIcon /> I worked as a freelancer.
            </li>
            <li
              className="about-activity"
              style={{ fontSize: "1rem", letterSpacing: "1.4px" }}
            >
              <ArrowCircleRightOutlinedIcon /> I love to read story books
              especially on science fiction and about the history of the
              universe 🌌 along with scientific theories behind it.
            </li>
            <li
              className="about-activity"
              style={{ fontSize: "1rem", letterSpacing: "1.4px" }}
            >
              <ArrowCircleRightOutlinedIcon /> I love to listen to songs🎶 and
              watch thriller movies 🎬.
            </li>
          </ul>

          <p
            style={{
              fontSize: "1rem",
              letterSpacing: "1.4px",
              color: "rgba(200, 137, 230) ",
            }}
          >
            "If you focus on success, you'll have stress. But if you pursue
            excellence, <b>Success</b> will be <b>Guaranteed</b>!!"{" "}
          </p>
          <footer
            className="blockquote-footer"
            style={{ fontSize: "1rem", letterSpacing: "1.4px" }}
          >
            Tiasa Ash
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
