import "../../style.css";
import { ReactComponent as WorkIcon } from "../../Assets/website.svg";
import { ReactComponent as SchoolIcon } from "../../Assets/college.svg";

import timelineElements from "../About/MoreAbout";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function MoreAboutMe() {
  let workIconStyles = { background: "#87ceeb" };
  let schoolIconStyles = { background: "#87ceeb" };

  return (
    <VerticalTimeline>
      {timelineElements.map((element) => {
        let isWorkIcon = element.icon === "work";
        let showButton =
          element.buttonText !== undefined &&
          element.buttonText !== null &&
          element.buttonText !== "";

        return (
          <VerticalTimelineElement
            key={element.key}
            date={element.date}
            dateClassName="date"
            iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
            icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{
                color: "rgb(15, 17, 67)",
                fontWeight: "bold",
                letterSpacing: "1.6px",
                fontSize: "1.3rem",
              }}
            >
              {element.title}
            </h3>
            <h5
              className="vertical-timeline-element-subtitle"
              style={{
                color: "blue",
                paddingTop: "10px",
                fontWeight: "bold",
                letterSpacing: "1.3px",
                fontSize: "1rem",
              }}
            >
              {element.location}
            </h5>
            <p
              id="description"
              style={{
                color: "#480607",
                fontWeight: "bold",
                letterSpacing: "1px",
                fontSize: "1.1rem",
              }}
            >
              {element.description}
            </p>
            {showButton && (
              <a
                className={`button ${
                  isWorkIcon ? "workButton" : "schoolButton"
                }`}
                href={`${
                  isWorkIcon
                    ? "https://drive.google.com/file/d/18OsKDA_JVRvMk2KIrNpwL0hInJ7BmnZw/view?usp=drivesdk"
                    : "https://drive.google.com/file/d/10I2pNWiiWy0DhOp-rW8yHTrU8W_sm_A6/view?usp=drivesdk"
                }`}
                target="_blank"
                rel="noreferrer"
              >
                {element.buttonText}
              </a>
            )}
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
}

export default MoreAboutMe;
