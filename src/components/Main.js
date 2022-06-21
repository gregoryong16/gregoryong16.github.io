import { Container, Box } from "@chakra-ui/react"
import TypeAnimation from 'react-type-animation';
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInstagram,faLinkedin, faGithub,} from "@fortawesome/free-brands-svg-icons";
import {MdEmail} from 'react-icons/md';

import Avatar from "./Avatar1"

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
                        <Avatar position={[0.025, -0.9, 0]} /> 
                     </Suspense>

                     <OrbitControls />
               </Canvas> 
               <Box className="main-intro-box">
                     <h1 class="intro-name">Hi, I&apos;m Gregory!</h1>
                     <div className = "intro-description" style={{ height: '40px' }} > 
                        <TypeAnimation cursor={true} sequence={['I am fascinated with both front and backend development, machine learning and am always down to learn new skills!', 500, ""]} wrapper="h2" repeat={Infinity} />
                     </div>
               </Box>
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