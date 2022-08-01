import React from "react"
import pic from "../images/icon.png"
import {useNavigate} from 'react-router-dom';
export default function Navbar() {
    const navigate = useNavigate();
    const navigateHome = () => {
        // 👇️ navigate to /
        navigate('/');
      };
    const navigateEducation = () => {
        // 👇️ navigate to /
        navigate('/education');
      };
    const navigateSkills = () => {
        // 👇️ navigate to /
        navigate('/skills');
      };
    const navigateWork = () => {
    // 👇️ navigate to /
    navigate('/work');
    };
    const navigateProjects = () => {
        // 👇️ navigate to /
        navigate('/projects');
    };
    const navigateCCA = () => {
        // 👇️ navigate to /
        navigate('/cca');
    };
    const navigateAchievements = () => {
        // 👇️ navigate to /
        navigate('/achievements');
    };
    return <nav className="nav">
        <button className="nav-profile_button" onClick={navigateHome} >
            <img src={pic} className="nav-icon" alt= "icon"/>
            <h1 className="nav-profile_text">Gregory Ong</h1>
        </button>
        <button className="nav-education_button" onClick={navigateEducation}> Education</button>
        <button className="nav-skills_button" onClick={navigateSkills}> Skills</button>
        <button className="nav-work_button" onClick={navigateWork}> Work</button>
        <button className="nav-projects_button" onClick={navigateProjects}> Projects</button>
        <button className="nav-cca_button" onClick={navigateCCA}> CCA</button>
        <button className="nav-achievements_button" onClick={navigateAchievements}> Achievements</button>
        </nav> 
}