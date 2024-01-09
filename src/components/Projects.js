import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { GrGroup } from "react-icons/gr";
import mdp from "../images/mdp.png";
import swe from "../images/swe.png";
import AnimatedPage from "./AnimatedPage";
import nlp from "../images/nlp.png";
import db from "../images/db.png";
import ase from "../images/ase.png";
import ir from "../images/IR.png";
import bigdata from "../images/bigdata.png";
import tiger from "../images/tiger.png";
import dutchauction from "../images/dutchAuction.png";

const PROJECTS = [
  {
    title: "Final Year Project",
    desc: (
      <ul>
        <li>
          Built an optimised lightweight model that is designed for tiger
          detection in the wild
        </li>
        <li>
          Proposed model outperforms existing state of the art lightweight
          models in terms of speed and precision while maintaining a lower model
          complexity
        </li>
        <li>Built upon ShuffleNet Architecture</li>
      </ul>
    ),
    image: tiger,
    url: "https://github.com/gregoryong16/FYP",
  },
  {
    title: "Blockchain Dutch Auction",
    desc: (
      <ul>
        <li>Implemented smart contracts on Ethereum</li>
        <li>
          Develoepd a front end webapp (developed using NextJS and styled using
          ChakraUI)
        </li>
        <li>
          Simulate a new token launch (AToken) whose tokens are bidded with
          Ether and distributed via a Dutch Auction over 20 minutes time
        </li>
      </ul>
    ),
    image: dutchauction,
    url: "https://github.com/gregoryong16/Blockchain_Dutch_Auction",
  },
  {
    title: "Natural Language Processing",
    desc: (
      <ul>
        <li>Built a sentiment analysis application</li>
        <li>Crawled and performed polarity detection on tweets from Twitter</li>
        <li>
          Tried various models such as BERT, Multilayered Perception and Naive
          Bayes etc
        </li>
      </ul>
    ),
    image: nlp,
    url: "https://github.com/gregoryong16/CZ4045_NLP",
  },
  {
    title: "Advanced Software Engineering",
    desc: (
      <ul>
        <li>
          Designed a web application to combat the problem of food wastage
        </li>
        <li>
          Web application able to track user's inventory, recommend recipe based
          on current inventory
        </li>
        <li>
          Web application able to track and display wastage statistics across
          months
        </li>
      </ul>
    ),
    image: ase,
    url: "https://github.com/gregoryong16/CZ3002_ASE",
  },
  {
    title: "Information Retrieval Project",
    desc: (
      <ul>
        <li>
          Crawled data on Shopee Products and implemented indexing on data using
          ElasticSearch
        </li>
        <li>
          Developed a webapp using Django with search function to allow users to
          find products{" "}
        </li>
        <li>Implemented multi-faceted search for refining of search</li>
        <li>Performed sentimental analysis of reviews on Products</li>
      </ul>
    ),
    image: ir,
    url: "https://github.com/gregoryong16/CZ4034_IR",
  },
  {
    title: "Big Data Management Project",
    desc: (
      <ul>
        <li>
          Built a column store using disklist (A python list implementation that
          uses the disk to handle very large collections of pickle-able objects)
        </li>
        <li>
          Implemented enhancements to improve column store such as zone maps,
          compression and shared scans.
        </li>
      </ul>
    ),
    image: bigdata,
    url: "https://github.com/gregoryong16/CZ4123-Big-Data-Management",
  },
  {
    title: "Advanced Database Project",
    desc: (
      <ul>
        <li>Retrieving relevant information from QEP and AQPs</li>
        <li>Annotate the corresponding SQL query </li>
        <li>
          Explain how different components of the query are executed by the
          underlying query processor and why the operators are chosen among
          other alternatives
        </li>
      </ul>
    ),
    image: db,
    url: "https://github.com/gregoryong16/ADB_Query",
  },
  {
    title: "Multidisciplinary Project",
    desc: (
      <ul>
        <li>
          Configured Raspberry Pi and used it to implement Object Detection
          model{" "}
        </li>
        <li>Worked with YOLOv5 and OpenCV</li>
        <li>
          Fine tuning of models to achieve desired result (Data augmentation,
          changing batch size, reducing overfitting, etc)
        </li>
      </ul>
    ),
    image: mdp,
    url: "https://github.com/gregoryong16/CZ3004-MDP-yolov5",
  },
  {
    title: "Software Engineering Project",
    desc: (
      <ul>
        <li>
          Developed a phone application that tracks real time utility usage of
          households{" "}
        </li>
        <li>Designed the User interface of the application</li>
        <li>Designed algorithm to query data from database</li>
      </ul>
    ),
    image: swe,
    url: "https://github.com/gregoryong16/SWE",
  },
];

const Projects = () => {
  return (
    <AnimatedPage>
      <div className="projects_div">
        <div className="expFlex">
          <GrGroup size={100} color="black" />
          <div className="overall_container">
            {PROJECTS.map((item, index) => (
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
                  <div class="projects_git_icon">
                    <a href={item.url} class="projects_git_icon_actual">
                      <FontAwesomeIcon icon={faGithub} size="3x" />
                    </a>
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

export default Projects;
