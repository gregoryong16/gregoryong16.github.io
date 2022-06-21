import React from "react"
import { Box } from "@chakra-ui/react"

export default function Work() {
    return <div className="work_div">
        <h1 className="work_header">Work Experience</h1>
        <Box className="work_box">
            <h1 className="work_title">
                Machine Learning Intern <br/> 
                Amaris.AI <br/>
                May 2022 - Present
            </h1>
            <ul className="work_pointers">
            <li>Automate a complete computer vision model(YOLOv5) for stamp detection project with an actual client for company</li>
            <li>Worked with Python, Docker, FastAPI and OpenCV</li>
            </ul>
        </Box>
    </div>
}