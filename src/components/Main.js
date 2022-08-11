import { Container, Box,Avatar,Button,ButtonGroup } from "@chakra-ui/react"
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInstagram,faLinkedin, faGithub,} from "@fortawesome/free-brands-svg-icons";
import {MdEmail} from 'react-icons/md';
import profile_pic from "../images/profile-photo-cropped.jpg"
import Avatar1 from "./Avatar1"
import resume from "../files/Gregory's_Resume.pdf"
import { AiOutlineDownload } from "react-icons/ai"

export default function Main() {
    return <div>
            <Container class = "main" >
               <Canvas
                     camera={{ position: [2, 0, 12.25], fov: 15 }}
                     style={{
                     backgroundColor: '#FFFFFF',
                     width: '400px',
                     height: '400px'
                  }}>
                     <ambientLight intensity={1.00} />
                     <ambientLight intensity={0.1} />
                     <directionalLight intensity={0.3} />

                     <Suspense fallback={null}>
                        <Avatar1 position={[0.025, -0.9, 0]} /> 
                     </Suspense>

                     <OrbitControls />
               </Canvas> 
                  <Box className="main-intro-box">
                     <Box className="main-intro-subbox">
                        <h1 className="intro-name">Hi, I&apos;m Gregory!</h1>
                        <h2 className="intro-description">I am a Year 3 Computer Science student currently studying in Nanyang Technological University. I am interested in both
                        front and backend programming, and also in AI.</h2>
                     </Box>
                     <Avatar className="main-profile-icon" size='3xl' src={profile_pic}/>
                  </Box>
                  <div className= "main-resume">
                     <ButtonGroup variant='outline' spacing='6'>
                        <Button colorScheme='teal' variant='solid'>
                           <a href={resume} download="Gregory's Resume.pdf"> Resume </a>
                           <AiOutlineDownload/>
                        </Button>
                     </ButtonGroup>
                  </div>
                  <div className="main-projects_div">
                     <h3 class="main-projects_header">Projects</h3>
                  </div>
            </Container> 
            <h1 className="socials_tag">Feel free to connect with me! </h1>

            <div className = "socials_bar">
               <a href="https://github.com/gregoryong16"
               className="github_icon">
               <FontAwesomeIcon icon={faGithub} size="2x" />
               </a>

               <a href="https://www.linkedin.com/in/gregory-ong-191555209/"
               className="linkedin_icon">
               <FontAwesomeIcon icon={faLinkedin} size="2x" /> 
               </a>

               <a href="mailto:gregory.ong16@gmail.com"
               className="email_icon">
               <MdEmail size="2em" />
               </a>

               <a href="https://www.instagram.com/gregory.ong/"
               className="instagram_icon">
               <FontAwesomeIcon icon={faInstagram} size="2x" />
               </a>
            </div>
    </div>
}