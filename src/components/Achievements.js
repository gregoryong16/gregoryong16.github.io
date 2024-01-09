import React from "react";
import { GrAchievement } from "react-icons/gr";
import goldmansachs from "../images/goldmansachs.png";
import jpmorgan from "../images/jpmorgan.png";
import AnimatedPage from "./AnimatedPage";
import tiktok from "../images/tiktok.png";

const ACHIEVEMENTS = [
  {
    title: (
      <p>
        TikTok Hackathon Challenge 2023 <strong>Finalist</strong>
      </p>
    ),
    desc: (
      <ul>
        <li>Built a Serverless Dropshipping Platform</li>
        <br></br>
        <li>
          Leveraged the power of AWS and Terraform to create a scalable and
          reliable backend
        </li>
      </ul>
    ),
    image: tiktok,
  },
  {
    title: (
      <p>
        JPMorgan Code for Good 2022 <strong>Winner</strong>
      </p>
    ),
    desc: (
      <ul>
        <li>
          Developed a platform for beneficiaries to effectively find solutions
          which are catered specially to their needs
        </li>
        <li>
          Streamlined form filling process and automated form submission to
          various organisation
        </li>
        <li>
          Provided SG Assist and other non-profit organisations with ease of
          connection with their beneficiaries
        </li>
      </ul>
    ),
    image: jpmorgan,
  },
  {
    title: (
      <p>
        GoldMan Sachs Engage 2021 <strong>Finalist</strong>
      </p>
    ),
    desc: (
      <ul>
        <li>
          Extracted Unstructured ESG data and performed topic modelling on
          reports
        </li>
        <li>
          Topic modelling models used include Latent Dirichlet Allocation (LDA){" "}
        </li>
        <li>
          Performed multiclass Classification using Light Gradient Boosting
          Model
        </li>
      </ul>
    ),
    image: goldmansachs,
  },
];
const Achievements = () => {
  return (
    <AnimatedPage>
      <div className="work_div">
        <div className="expFlex">
          <GrAchievement size={100} color="black" />
          <div className="overall_container">
            {ACHIEVEMENTS.map((item, index) => (
              <div class="container">
                <div class="card" key={index}>
                  <div class="card__header">
                    <img
                      src={item.image}
                      alt="card__image"
                      class="card__image"
                      width="500"
                    />
                  </div>
                  <div class="card_body">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
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

export default Achievements;
