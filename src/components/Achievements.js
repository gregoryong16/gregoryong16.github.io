import React from "react"
import { Box } from "@chakra-ui/react"

export default function Achievements() {
    return <div className="achievements_div">
        <h1 className="achievements_header">Achievements</h1>
        <Box className="achievements_box">
            <h1 className="achievements_title">
                GoldMan Sachs Engage 2021 Finalist
            </h1>
            <ul className="achievements_pointers">
            <li>Extracted Unstructured ESG data and performed topic modelling on reports</li>
            <li>Topic modelling models used include Latent Dirichlet Allocation (LDA) </li>
            <li>Performed multiclass Classification using Light Gradient Boosting Model</li>
            </ul>
        </Box>
    </div>
}