import React from "react"
import pic from "../images/icon.png"

export default function Navbar() {
    return <nav className="nav">
        <button className="nav-profile_button">
            <img src={pic} className="nav-icon" alt= "icon"/>
            <h1 className="nav-profile_text">Gregory Ong</h1>
        </button>
        <button className="nav-education_button"> Education</button>
        <button className="nav-skills_button"> Skills</button>
        <button className="nav-work_button"> Work</button>
        <button className="nav-projects_button"> Projects</button>
        <button className="nav-cca_button"> CCA</button>
        <button className="nav-achievements_button"> Achievements</button>
        </nav> 
}