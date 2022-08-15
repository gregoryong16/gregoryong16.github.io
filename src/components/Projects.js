import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub,} from "@fortawesome/free-brands-svg-icons";
import {GrGroup} from "react-icons/gr"
import mdp from "../images/mdp.png"
import swe from "../images/swe.png"
import AnimatedPage from "./AnimatedPage";

const PROJECTS = [
	{
		title: 'Multidisciplinary Project',
		desc: (
			<ul>
                <li>Configured Raspberry Pi and used it to implement Object Detection model </li>
                <li>Worked with YOLOv5 and OpenCV</li>
                <li>Fine tuning of models to achieve desired result (Data augmentation, changing batch size, reducing overfitting, etc)</li>
                </ul>
		),
		image: mdp,
        url: "https://github.com/gregoryong16/CZ3004-MDP-yolov5"
	},
    {
        title: "Software Engineering Project",
        desc: (
            <ul>
                <li>Developed a phone application that tracks real time utility usage of households </li>
                <li>Designed the User interface of the application</li>
                <li>Designed algorithm to query data from database</li>
            </ul>
        ),
        image: swe,
        url: "https://github.com/gregoryong16/SWE"
    },
];

const Projects = () => {
    return (
        <AnimatedPage>
            <div className="projects_div">
                <div className='expFlex'>
                    <GrGroup size={100} color='black' />
                    <div className="overall_container">
                    {PROJECTS.map((item, index) => (
                                <div class="container">
                                    <div class="card" key={index}>
                                        <div class="card__header">
                                            <img src={item.image} alt="card__image" class="card__image" width="500"/>
                                        </div>
                                        <div class="card_body">
                                            <h4>{item.title}</h4>
                                            <p>{item.desc}</p>
                                        </div>
                                        <div class="projects_git_icon">
                                            <a href= {item.url}
                                                className="projects_git_icon">
                                                <FontAwesomeIcon icon={faGithub} size="2x" />
                                            </a>
                                        </div>
                                    </div>
                                </div> 
                            ))}
                    </div>
                </div>
            </div>
        </AnimatedPage>
    )
}

export default Projects;
