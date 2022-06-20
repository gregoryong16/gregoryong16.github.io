import React from "react"
import { Box } from "@chakra-ui/react"

export default function Education() {
    return <div className="education_div">
        <h1 className="education_header">Education</h1>
        <Box className="education_university">
            <h1 className="education-universityname">
                Nanyang Technological University, Singapore <br/> 
                Bachelor of Engineering(Computer Science) <br/>
                Aug 2020 - May 2024 (Expected)
            </h1>
            <ul className="education-universitypointers">
              <li>Expected Honours (Distinction)</li>
              <li>Achieved Distinction in Algorithm Design and Analysis and Advanced Computer Architecture</li>
            </ul>
        </Box>
        <Box className="education_juniorcollege">
        <h1 className="education-juniorcollegename">
                Nanyang Junior College, Singapore <br/> 
                Cambridge A levels (Science Major)<br/>
                Jan 2016 - Dec 2017
            </h1>
            <ul className="education-juniorcollegepointers">
              <li>H2 Physics</li>
              <li>H2 Mathematics</li>
              <li>H2 Chemistry</li>
              <li>H2 Economics</li>
            </ul>
        </Box>
    </div>
}