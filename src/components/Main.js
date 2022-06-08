import React from "react"
import { Container, Box } from "@chakra-ui/react"

export default function Main() {
    return <Container classname = "main" >
        <div classname="avatar" >3D Avatar</div> 
        <Box classname="intro-box" w="1000px" h="150px" borderRadius="lg" bg='black' color="white" display="flex" alignItems="Center" flexDirection="column">
            <h1 classname="intro-name" style={{ fontSize: "50px"}} >Hi, I&apos;m Gregory!</h1>
            <h2 classname="intro-description">I am fascinated with both front and back-end development, machine learning and am always interested to learn new skills! Feel free to connect with me! :)</h2>
        </Box>
    </Container> 
}