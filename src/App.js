import React from "react";
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei'
import GridLine from "./components/GridLine"

// Import styles
import './App.css';

import space from './space.hdr'

function App() {
    return (
        <div id="canvas-container">
            <Canvas
                camera={{
                    fov: 50,
                    position: [-10, -5, -15],
                    rotation: [Math.PI, 0, 0]
                }}
            >

             <OrbitControls maxDistance={40} enableDamping />

                <ambientLight />
                <pointLight position={[-150, 300, -300]} intensity={0.9} />
                <Environment background={true} files={space} />
            
                <GridLine position={[2.5, 0, 0]} />
        <GridLine position={[0, 0, 0]} />
        <GridLine position={[1.2, -1.2, 0]} rotation={[0, 0, Math.PI / 2]} />
        <GridLine position={[1.2, 1.2, 0]} rotation={[0, 0, Math.PI / 2]} />
            
            </Canvas>
        </div>
    );
};

export default React.memo(App);
