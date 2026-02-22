import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshWobbleMaterial, Sphere, Environment } from '@react-three/drei';

function RoamingScoop({ color, position, speed, factor, size = 0.4 }) {
    const mesh = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        // Roam freely but keep within roughly visible range
        mesh.current.position.y = position[1] + Math.sin(t * speed * 0.7) * 4;
        mesh.current.position.x = position[0] + Math.cos(t * speed * 0.5) * 6;
        mesh.current.rotation.x = t * 0.1;
        mesh.current.rotation.y = t * 0.15;
    });

    return (
        <Sphere ref={mesh} args={[size, 64, 64]} position={position}>
            <MeshWobbleMaterial
                color={color}
                factor={factor}
                speed={speed}
                roughness={0.2}
                metalness={0.1}
            />
        </Sphere>
    );
}

const ThreeDScene = () => {
    // Exactly 3 roaming scoops as requested
    const scoops = useMemo(() => [
        { color: '#E60000', position: [-5, 2, -2], speed: 0.4, factor: 0.5 }, // Strawberry
        { color: '#FFFBF0', position: [5, -3, -4], speed: 0.3, factor: 0.3 }, // Vanilla
        { color: '#D4AF37', position: [0, 5, -3], speed: 0.5, factor: 0.4 },  // Mango
    ], []);

    return (
        <div className="background-canvas" style={{ pointerEvents: 'none' }}>
            <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
                <ambientLight intensity={0.8} />
                <pointLight position={[10, 10, 10]} intensity={1.5} />
                <ScoopCluster scoops={scoops} />
                <Environment preset="city" />
            </Canvas>
        </div>
    );
};

const ScoopCluster = ({ scoops }) => {
    return (
        <>
            {scoops.map((s, i) => (
                <RoamingScoop key={i} {...s} />
            ))}
        </>
    );
};

export default ThreeDScene;
