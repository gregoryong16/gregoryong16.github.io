import React from "react"
import { Box } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub,} from "@fortawesome/free-brands-svg-icons";

export default function Projects() {
    return <div className="projects_div">
    <h1 className="projects_header">Projects</h1>
    <Box className="projects_box">
        <h1 className="projects_title">
            Multidisciplinary Project
        </h1>
        <ul className="projects_pointers">
        <li>Configured Raspberry Pi and used it to implement Object Detection model </li>
        <li>Worked with YOLOv5 and OpenCV</li>
        <li>Fine tuning of models to achieve desired result (Data augmentation, changing batch size, reducing overfitting, etc)</li>
        </ul>
        <a href="https://github.com/gregoryong16/CZ3004-MDP-yolov5"
               className="projects_git_icon">
               <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
    </Box>
    <Box className="projects_box2">
        <h1 className="projects_title2">
            Software Engineering Project
        </h1>
        <ul className="projects_pointers2">
        <li>Developed a phone application that tracks real time utility usage of households </li>
        <li>Designed the User interface of the application</li>
        <li> Designed algorithm to query data from database</li>
        </ul>
    </Box>
</div>
}