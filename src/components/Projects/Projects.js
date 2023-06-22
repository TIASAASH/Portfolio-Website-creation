// import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import otpgif1 from "../../Assets/Projects/otpgif.gif";
import insidegif from "../../Assets/Projects/insidegif1.gif";
import qrcodegif from "../../Assets/Projects/qrcodegif.gif";
import algogif from "../../Assets/Projects/algogif.gif";
import memegif from "../../Assets/Projects/memegif.gif";
import weathergif1 from "../../Assets/Projects/weathergif1.gif";
import regrogif from "../../Assets/Projects/regrogif.gif";
import randomgif from "../../Assets/Projects/randomgif.gif";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <h5
          style={{
            color: "cyan",
            paddingTop: "8px",
            letterSpacing: "2px",
            fontWeight: "semibold",
            textShadow: "1px 1px yellow",
          }}
        >
          Website design and development
        </h5>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={algogif}
              isBlog={false}
              title="Algorithm Visualizer"
              description="This Algorithm Visualizer project is basically a group project. It's easier to understand the sorting and searching algorithm logic visually than to go through the theories. So, we decided to make it. We used HTML, CSS, and JavaScript for this one. We discussed the various types of sorting and searching algorithms along with sound effects to understand them more clearly."
              ghLink="https://github.com/TIASAASH/ALGORITHM-VISUALIZER/tree/main"
              demoLink="https://tiasaash.github.io/ALGORITHM-VISUALIZER/"
              youtubeLink="https://youtu.be/UfDINnguIyA"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weathergif1}
              isBlog={false}
              title="Weather App"
              description="This is a real-time weather application. This application can show the current weather, hourly, and as well as up to 3 days of weather forecast of any city throughout the world with respect to the local time. It can automatically fetch the user's current location and show the weather report for that place. I used React js, Day js(date and time), React Toastify (notification), weather API(API call), and Firebase for hosting this application."
              ghLink="https://github.com/TIASAASH/WeatherReport-Application"
              demoLink="https://weather-app-d17bb.web.app"
              youtubeLink="https://youtu.be/8lqnGEhxMrI"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={insidegif}
              isBlog={false}
              title="Inside Inspiration Academy Management System"
              description="This is totally a Java-based application project where I used core Java, AWT, Swing, JDBC, and MySql for the database connection. This project is implemented to keep track of each and every student of an institute. This Desktop Application can be capable of circulating notes among every student, resolving payment issues, managing student access, and inspecting curriculums for all courses which are taught here."
              ghLink="https://github.com/TIASAASH/Inside-Inspiration-Academy-Management-System"
              demoLink="https://www.youtube.com/watch?v=M5QOpxOD0Ww"
              youtubeLink="https://www.youtube.com/watch?v=M5QOpxOD0Ww"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={qrcodegif}
              isBlog={false}
              title="QR-Code Generator"
              description="This website can generate a QR code based on any user's given text or URL. I used HTML, CSS, JavaScript, and QR code API (API call) to complete this project properly. It's an easy and interesting project. you are all requested to visit this website to generate your own QR code."
              ghLink="https://github.com/TIASAASH/QR-Code-generator"
              demoLink="https://tiasaash.github.io/QR-Code-generator/"
              youtubeLink="https://youtu.be/KrihRSqCLVY"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={memegif}
              isBlog={false}
              title="Meme Generator"
              description="This is a funny meme generator website consisting of a simple UI interface. I used React Js and meme API (API call) to complete this project properly. You can choose any of the dummy memes and can edit that as your wish. This website will also allow you to download the meme which you have edited."
              ghLink="https://github.com/TIASAASH/memegenerator"
              demoLink="https://meme-create-d050f.web.app/"
              youtubeLink="https://youtu.be/KCplcR5atAQ"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={otpgif1}
              isBlog={false}
              title="OTP Generator"
              description="This is a simple OTP generator website, where you can get random OTP numbers. I used HTML, CSS, and JavaScript to implement this project properly. You are requested to visit this interesting website to get your own OTP."
              ghLink="https://github.com/TIASAASH/OTP-generator"
              demoLink="https://tiasaash.github.io/OTP-generator/"
              youtubeLink="https://youtu.be/gSW6G3i8fYQ"
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <h5
          style={{
            color: "#00FFFF",
            paddingTop: "8px",
            letterSpacing: "2px",
            fontWeight: "semibold",
            textShadow: "1px 1px yellow",
          }}
        >
          Website design and development as a freelancer
        </h5>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={regrogif}
              isBlog={false}
              title="Regro-media website"
              description="Regro Media is the commercial website of an entrepreneur and YouTuber. I and my team members made this website using Svelte js and this gives more audience increase by 20% and more sales increases by the owner."
              ghLink="https://github.com/TIASAASH/RegrowMedia-Website"
              demoLink="https://regrowmedia.com/"
              youtubeLink="https://youtu.be/4hqGJ2lfajk"
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <h5
          style={{
            color: "#00FFFF",
            paddingTop: "8px",
            letterSpacing: "2px",
            fontWeight: "semibold",
            textShadow: "1px 1px yellow",
          }}
        >
          Academic Project
        </h5>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={randomgif}
              isBlog={false}
              title="Pseudo Random Binary Sequence Generator"
              description="I completed this project for my academic purpose with my college team members. Basically, we want to work on the blockchain-driven data monitoring system in the near future and then we will take the input signal from this pseudo-random binary sequence generator. So, as of now, we just implemented a small part of our entire final year project as our Mini Project. I used shift registers, 555D timers, and other hardware equipment to implement this project. We completed this project properly which produced the random binary sequence."
              ghLink="https://github.com/TIASAASH/Pseudo-Random-Binary-Sequence-Generator"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
