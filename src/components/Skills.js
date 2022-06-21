import React from "react"
import { Box } from "@chakra-ui/react"

export default function Skills() {
    return <div className="skills_div">
        <h1 className="skills_header">Skills</h1>
        <Box className="skills_programming">
            <h1 className="skills_programming_header">
                Programming:
            </h1>
            <ul className="skills_programming_pointers">
            <li>Python, Java, C/C++</li>
            <li>React, React Native, Django, FastAPI</li>
            <li>Git, GitHub, Docker</li>
            <li>Machine Learning</li>
            </ul>
        </Box>
        <Box className="skills_programming">
        <h1 className="skills_languages_header">
                Languages:
            </h1>
            <ul className="skills_languages_pointers">
            <li>English (Proficient)</li>
            <li>Chinese/Mandarin (Proficient)</li>
            </ul>
        </Box>
        <Box className="skills_programming">
        <h1 className="skills_software_header">
                Softwares:
            </h1>
            <h1 className="skills-software">
            Microsoft Office, Visual Studios, Android Studio, Figma, Zoom, Discord, Slack
            </h1>
        </Box>
    </div>
}