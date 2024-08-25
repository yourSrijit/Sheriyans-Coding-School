import React from 'react'
import * as THREE from "three"
import { useTexture } from '@react-three/drei'

function Cyl() {
    let tex=useTexture("./image.png")
  return (
    <mesh rotation={[0,1.4,0.5]}>
        <cylinderGeometry args={[1, 1,1, 70, 70, true]}/>
        {/* radiusTop : Float, radiusBottom : Float, height : Float, radialSegments : Integer, heightSegments : Integer, openEnded : Boolean, */}
        <meshBasicMaterial map={tex} transparent side={THREE.DoubleSide}/>
    </mesh>
  )
}

export default Cyl