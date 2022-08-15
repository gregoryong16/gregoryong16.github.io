import React from "react"
import {MdOutlineSportsKabaddi} from "react-icons/md"
import tyh from "../images/tyh.png"
import interact from "../images/interact.png"
import football from "../images/football.png"
import AnimatedPage from "./AnimatedPage";

const CCA = [
	{
		title: 'Business Manager - Volunteering Club',
        school: "Nanyang Technological University",
        date: "Aug 2021 – Aug 2022",
		desc: (
			<ul>
                <li>Planned and executed Canvassing events to raise funds for the less fortunate </li>
                <li>Perform regular accounting of financial transactions and assets</li>
                <li>Approve financial transactions of the club committee</li>
            </ul>
		),
		image: tyh,
	},
    {
        title: 'Captain - Football',
        school: "Nanyang Technological University",
        date: "Aug 2021 – Aug 2022",
		desc: (
			<ul>
                <li>Plan and organise weekly training sessions</li>
            </ul>
		),
		image: football,
    },
    {
        title: 'Programmes Manager - Volunteering @ Institute of Mental Health',
        school: "Nanyang Junior College",
        date: "May 2017 – May 2018",
		desc: (
			<ul>
                <li>Planned games and activities for 50 patients to encourage interaction and bonding</li>
                <li>Patient facilitation of programme for patient</li>
                <li>Logistic coordinator, oversaw pre-programme preparations</li>
            </ul>
		),
		image: interact,
    },
];


const Cca = () => {
    return (
        <AnimatedPage>      
            <div className="work_div">
                <div className='expFlex'>
                    <MdOutlineSportsKabaddi size={100} color='black' />
                    <div className="overall_container">
                    {CCA.map((item, index) => (
                                <div class="container">
                                    <div class="card" key={index}>
                                        <div class="card__header">
                                            <img src={item.image} alt="card__image" class="card__image" width="500"/>
                                        </div>
                                        <div class="card_body">
                                            <span class="tag tag-blue">{item.date}</span>
                                            <span class="tag tag-red"> {item.school}</span>
                                            <h4>{item.title}</h4>
                                            <p>{item.desc}</p>
                                        </div>
                                    </div>
                                </div> 
                            ))}
                    </div>
                </div>
                <button className="prev">
                <i className="fa fa-angle-left"></i> 
                </button>


                <button className="next">
                <i className="fa fa-angle-right"></i> 
                </button>
            </div> 
        </AnimatedPage>     
    )
}

export default Cca;
