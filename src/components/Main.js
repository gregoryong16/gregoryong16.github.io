import { Container, Box } from "@chakra-ui/react"
import TypeAnimation from 'react-type-animation';
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Avatar from "./Avatar"

export default function Main() {
    <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
    return <Container class = "main" >
        <div class="main-avatar">3D Avatar</div>
        <Canvas
         camera={{ position: [2, 0, 12.25], fov: 15 }}
         style={{
            backgroundColor: '#111a21',
            width: '100vw',
            height: '100vh',
         }}
      >
         <ambientLight intensity={1.25} />
         <ambientLight intensity={0.1} />
         <directionalLight intensity={0.4} />
         <Suspense fallback={null}>
            <Avatar position={[0.025, -0.9, 0]} /> 
         </Suspense>
         <OrbitControls />
      </Canvas> 
        <Box className="main-intro-box">
            <h1 class="intro-name">Hi, I&apos;m Gregory!</h1>
            <div className = "intro-description" style={{ height: '40px' }} > 
            <TypeAnimation cursor={true} sequence={['I am fascinated with machine learning, both front and back-end development and am always interested to learn new skills! Feel free to connect with me! :)', 500, ""]} wrapper="h2" repeat={Infinity} />
            </div>
        </Box>
    </Container> 
}