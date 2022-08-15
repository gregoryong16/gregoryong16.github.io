import React from "react"
import {GrAchievement} from "react-icons/gr"
import goldmansachs from "../images/goldmansachs.png"
import AnimatedPage from "./AnimatedPage";

const ACHIEVEMENTS= [
    {
        title: 'GoldMan Sachs Engage 2021 Finalist',
		desc: (
			<ul>
                <li>Extracted Unstructured ESG data and performed topic modelling on reports</li>
                <li>Topic modelling models used include Latent Dirichlet Allocation (LDA) </li>
                <li>Performed multiclass Classification using Light Gradient Boosting Model</li>
            </ul>
		),
		image: goldmansachs,
    },

];
const Achievements = () => {
    return (
        <AnimatedPage>
            <div className="work_div">
                <div className='expFlex'>
                    <GrAchievement size={100} color='black' />
                    <div className="overall_container">
                    {ACHIEVEMENTS.map((item, index) => (
                                <div class="container">
                                    <div class="card" key={index}>
                                        <div class="card__header">
                                            <img src={item.image} alt="card__image" class="card__image" width="500"/>
                                        </div>
                                        <div class="card_body">
                                            <h4>{item.title}</h4>
                                            <p>{item.desc}</p>
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

export default Achievements;