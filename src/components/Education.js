import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import NTU from "../images/ntu.png";
import nyjc from "../images/nyjc.png";
import AnimatedPage from "./AnimatedPage";

const EXP = [
  {
    title: "Bachelor of Engineering(Computer Science)",
    subtitle: "Aug 2020 - May 2024",
    desc: (
      <p>
        Honours (Distinction)
        <br />
        <br />
        Specialisation in Artificial Intelligence and Data Science
      </p>
    ),
    image: NTU,
  },
  {
    title: "Cambridge A levels (Science Major)",
    subtitle: "Jan 2016 - Dec 2017",
    desc: (
      <p>
        Science Major <br />
        <br />
        H2 Physics, H2 Chemistry, H2 Mathematics, H2 Econs
      </p>
    ),
    image: nyjc,
  },
];
const Experiences = () => {
  return (
    <AnimatedPage>
      <div className="education_div">
        <div className="expFlex">
          <FaGraduationCap size={100} color="black" />
          <div className="grid-container">
            {EXP.map((item, index) => (
              <div className="grid-item" key={index}>
                <div className="item-image-container">
                  <img src={item.image} alt="education" />
                </div>
                <div className="item-title">{item.title}</div>
                <div className="item-subtitle">{item.subtitle}</div>
                <div className="item-desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Experiences;
