import React from "react"
import {MdOutlineWork} from 'react-icons/md'
import {Button,ButtonGroup } from "@chakra-ui/react"
import amaris from "../images/amaris.png"
import {AiOutlineArrowRight} from 'react-icons/ai'
import AnimatedPage from "./AnimatedPage";
import testimonial from "../files/Amaris Testimonial.pdf"
import { AiOutlineDownload } from "react-icons/ai"

const WORKEXP = [
	{
		company: 'Amaris.Ai',
        position: "AI Intern",
		date: 'May 2022- Aug 2022',
		desc: (
			<p>
				Automate a complete computer vision model(YOLOv5) for stamp detection project with an actual client for the company<br />
                <br />
                Worked with Python, Docker, FastAPI, React and OpenCV
			</p>
		),
		image: amaris,
        website: 'https://www.amaris.ai/',
	},
];

const Work = () => {
    return (
		<AnimatedPage>
			<div className="work_div">
				<div className='expFlex'>
                    <MdOutlineWork size={100} color='black' />
                    <div className="overall_container">
                        {WORKEXP.map((item, index) => (
                            <div class="container">
                                <div class="card" key={index}>
                                    <div class="card_header">
                                        <img src={item.image} alt="card__image" class="card__image" width="500"/>
                                    </div>
                                    <div class="card_body">
                                        <span class="tag tag-blue">{item.date}</span>
                                        <h4>{item.position}</h4>
                                        {item.desc}
                                    </div>
                                    <div class="card_button">
                                        <div className="card_button_left">
                                            <ButtonGroup variant='outline' spacing='6'>
                                                <Button colorScheme='BlackAlpha' variant='outline' height='35px'>
                                                    <a href={testimonial} download="Amaris Testimonial.pdf"> Testimonial </a>
                                                    <AiOutlineDownload/>
                                                </Button>
                                            </ButtonGroup>
                                        </div>
                                        <ButtonGroup variant='outline' spacing='6'>
                                            <Button colorScheme='BlackAlpha' variant='outline' height='35px'>
                                                <a href={item.website}> {item.company}</a>
                                                <AiOutlineArrowRight></AiOutlineArrowRight>
                                            </Button>
                                        </ButtonGroup>
                                    </div>
                                </div>
                            </div> 
                        ))}
                    </div>
				</div>
			</div> 
        </AnimatedPage>
	);
}

export default Work;