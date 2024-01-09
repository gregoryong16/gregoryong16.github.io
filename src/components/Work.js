import React from "react";
import { MdOutlineWork } from "react-icons/md";
import { Button, ButtonGroup } from "@chakra-ui/react";
import amaris from "../images/amaris.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import AnimatedPage from "./AnimatedPage";
import testimonial from "../files/Amaris Testimonial.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import jpm from "../images/jpm.png";
import idemia from "../images/idemia.png"

const IDEMIAEXP =[
  {
    company: "Idemia",
    position: "Software Engineering Intern",
    date: "Jan 2024 - May 2024",
    desc: (
      <ul>
        <li>
          Currently ongoing internship
        </li>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </ul>
    ),
    image: idemia,
    website: "https://www.idemia.com/",
  },
];

const JPMEXP =[
  {
    company: "JP Morgan",
    position: "Software Engineering Intern",
    date: "June 2023 - Aug 2023",
    desc: (
      <ul>
        <li>
          Collaborated with cross-functional teams to implement new features
        </li>
        <br></br>
        <li>Development of an existing software project tool to enhance its functionality and user experience for stakeholders </li>
      </ul>
    ),
    image: jpm,
    website: "https://www.jpmorgan.com/SG/en/about-us",
  },
];
const WORKEXP = [
  {
    company: "Amaris.Ai",
    position: "AI Intern",
    date: "May 2022 - Aug 2022",
    desc: (
      <ul>
        <li>
          Automate a complete computer vision model(YOLOv5) for stamp detection
          project with an actual client for the company
        </li>
        <li>Worked with Python, Docker, FastAPI, React and OpenCV</li>
      </ul>
    ),
    image: amaris,
    website: "https://www.amaris.ai/",
  },
];

const Work = () => {
  return (
    <AnimatedPage>
      <div className="work_div">
        <div className="expFlex">
          <MdOutlineWork size={100} color="black" />
          <div className="overall_container">
          {IDEMIAEXP.map((item, index) => (
              <div class="container">
                <div class="card" key={index}>
                  <div class="card_header">
                    <img
                      src={item.image}
                      alt="card__image"
                      class="card__image"
                      width="500"
                    />
                  </div>
                  <div class="card_body">
                    <span class="tag tag-blue">{item.date}</span>
                    <h4>{item.position}</h4>
                    <p>{item.desc}</p>
                  </div>
                  <div class="card_button">
                    <ButtonGroup variant="outline" spacing="6">
                      <Button
                        rightIcon={<AiOutlineArrowRight />}
                        colorScheme="BlackAlpha"
                        variant="outline"
                        height="35px"
                      >
                        <a href={item.website}> {item.company}</a>
                      </Button>
                    </ButtonGroup>
                  </div>
                </div>
              </div>
            ))}
          {JPMEXP.map((item, index) => (
              <div class="container">
                <div class="card" key={index}>
                  <div class="card_header">
                    <img
                      src={item.image}
                      alt="card__image"
                      class="card__image"
                      width="500"
                    />
                  </div>
                  <div class="card_body">
                    <span class="tag tag-red">{item.date}</span>
                    <h4>{item.position}</h4>
                    <p>{item.desc}</p>
                  </div>
                  <div class="card_button">
                    <ButtonGroup variant="outline" spacing="6">
                      <Button
                        rightIcon={<AiOutlineArrowRight />}
                        colorScheme="BlackAlpha"
                        variant="outline"
                        height="35px"
                      >
                        <a href={item.website}> {item.company}</a>
                      </Button>
                    </ButtonGroup>
                  </div>
                </div>
              </div>
            ))}
            {WORKEXP.map((item, index) => (
              <div class="container">
                <div class="card" key={index}>
                  <div class="card_header">
                    <img
                      src={item.image}
                      alt="card__image"
                      class="card__image"
                      width="500"
                    />
                  </div>
                  <div class="card_body">
                    <span class="tag tag-blue">{item.date}</span>
                    <h4>{item.position}</h4>
                    <p>{item.desc}</p>
                  </div>
                  <div class="card_button">
                    <div className="card_button_left">
                      <ButtonGroup variant="outline" spacing="6">
                        <Button
                          rightIcon={<AiOutlineDownload />}
                          colorScheme="BlackAlpha"
                          variant="outline"
                          height="35px"
                        >
                          <a
                            href={testimonial}
                            download="Amaris Testimonial.pdf"
                          >
                            {" "}
                            Testimonial{" "}
                          </a>
                        </Button>
                      </ButtonGroup>
                    </div>
                    <ButtonGroup variant="outline" spacing="6">
                      <Button
                        rightIcon={<AiOutlineArrowRight />}
                        colorScheme="BlackAlpha"
                        variant="outline"
                        height="35px"
                      >
                        <a href={item.website}> {item.company}</a>
                      </Button>
                    </ButtonGroup>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Work;
