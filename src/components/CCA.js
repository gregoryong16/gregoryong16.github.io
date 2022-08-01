import React from "react"
import { Box } from "@chakra-ui/react"

export default function CCA() {
    return <div className="cca_div">
        <h1 className="cca_header">Co-curricular Activities</h1>
        <Box className="cca_box">
            <h1 className="cca_title">
                Business Manager - Volunteering Club Halls of Residence 5 <br/>
                Nanyang Technological University <br/>
                Aug 2021 – Present
            </h1>
            <ul className="cca_pointers">
            <li>Planned and executed Canvassing events to raise funds for the less fortunate </li>
            <li>Perform regular accounting of financial transactions and assets</li>
            <li>Approve financial transactions of the club committee</li>
            </ul>
        </Box>
        <Box className="football_box">
            <h1 className="cca_title">
                Captain - Football Halls of Residence 5 <br/>
                Nanyang Technological University <br/>
                Aug 2021 – Present
            </h1>
            <ul className="cca_pointers">
            <li>Plan and organise weekly training sessions</li>
            </ul>
        </Box>
        <Box className="volunteering_box">
            <h1 className="cca_title">
                Programmes Manager - Volunteering Club @ Institute of Mental Health<br/>
                Nanyang Junior College <br/>
                May 2017 – May 2018
            </h1>
            <ul className="cca_pointers">
            <li>Planned games and activities for 50 patients to encourage interaction and bonding</li>
            <li>Patient facilitation of programme for patient</li>
            <li>Logistic coordinator, oversaw pre-programme preparations</li>
            </ul>
        </Box>
    </div>
}