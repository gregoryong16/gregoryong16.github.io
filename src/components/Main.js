import React from "react"
import { Container, Box } from "@chakra-ui/react"
import TypeAnimation from 'react-type-animation';

export default function Main() {
    return <Container class = "main" >
        <div class="main-avatar">3D Avatar</div> 
        <Box className="main-intro-box">
            <h1 class="intro-name">Hi, I&apos;m Gregory!</h1>
            <div className = "intro-description" style={{ height: '40px' }} > 
            <TypeAnimation cursor={true} sequence={['I am fascinated with machine learning, both front and back-end development and am always interested to learn new skills! Feel free to connect with me! :)', 500, ""]} wrapper="h2" repeat={Infinity} />
            </div>
        </Box>
    </Container> 
}