import { Canvas } from '@react-three/fiber'
import React from 'react'
import './style.css'
import {OrbitControls} from "@react-three/drei"

import Cyl from './Cyl'

function App() {

  return (
    <Canvas camera={{fov:35}}>
      <OrbitControls/> 
      <ambientLight/>
      <Cyl/>
    </Canvas>
  )
}

export default App