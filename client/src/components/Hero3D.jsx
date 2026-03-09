import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere, Stars } from '@react-three/drei'
import * as THREE from 'three'
import { FaArrowRight, FaLinkedin, FaFileAlt } from 'react-icons/fa'

function AnimatedSphere() {
    const meshRef = useRef()

    useFrame(({ clock }) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = clock.getElapsedTime() * 0.12
            meshRef.current.rotation.y = clock.getElapsedTime() * 0.18
        }
    })

    return (
        <Float speed={1.2} rotationIntensity={0.2} floatIntensity={1}>
            <Sphere ref={meshRef} args={[2.2, 100, 100]} position={[7, 0.5, -3]}>
                <MeshDistortMaterial
                    color="#00d4ff"
                    attach="material"
                    distort={0.35}
                    speed={1.8}
                    roughness={0.2}
                    metalness={0.8}
                    emissive="#7c3aed"
                    emissiveIntensity={0.12}
                    transparent
                    opacity={0.7}
                />
            </Sphere>
        </Float>
    )
}

function FloatingParticles() {
    const count = 150
    const meshRef = useRef()

    const positions = useMemo(() => {
        const arr = new Float32Array(count * 3)
        for (let i = 0; i < count; i++) {
            arr[i * 3] = (Math.random() - 0.5) * 35
            arr[i * 3 + 1] = (Math.random() - 0.5) * 20
            arr[i * 3 + 2] = (Math.random() - 0.5) * 15 - 5
        }
        return arr
    }, [])

    const colors = useMemo(() => {
        const arr = new Float32Array(count * 3)
        const cyan = new THREE.Color('#00d4ff')
        const purple = new THREE.Color('#7c3aed')
        const palette = [cyan, purple]
        for (let i = 0; i < count; i++) {
            const col = palette[Math.floor(Math.random() * palette.length)]
            arr[i * 3] = col.r
            arr[i * 3 + 1] = col.g
            arr[i * 3 + 2] = col.b
        }
        return arr
    }, [])

    useFrame(({ clock }) => {
        if (meshRef.current) {
            meshRef.current.rotation.y = clock.getElapsedTime() * 0.015
        }
    })

    return (
        <points ref={meshRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={count}
                    array={colors}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.04}
                vertexColors
                transparent
                opacity={0.6}
                sizeAttenuation
            />
        </points>
    )
}

function Scene() {
    return (
        <>
            <ambientLight intensity={0.25} />
            <directionalLight position={[8, 5, 5]} intensity={0.7} color="#00d4ff" />
            <directionalLight position={[-5, 3, -5]} intensity={0.3} color="#7c3aed" />
            <pointLight position={[5, 0, 5]} intensity={0.4} color="#ec4899" />
            <AnimatedSphere />
            <FloatingParticles />
            <Stars radius={120} depth={60} count={1000} factor={3} saturation={0} fade speed={0.8} />
        </>
    )
}

export default function Hero3D() {
    return (
        <section className="hero" id="home">
            <div className="hero-canvas">
                <Canvas
                    camera={{ position: [0, 0, 10], fov: 50 }}
                    style={{ background: 'transparent' }}
                    gl={{ antialias: true, alpha: true }}
                >
                    <Scene />
                </Canvas>
            </div>

            <div className="hero-overlay" />

            <div className="hero-content container">
                <div className="hero-badge">
                    <span className="dot" />
                    Available for opportunities
                </div>
                <h1 className="hero-name">
                    Hi, I'm <span className="gradient-text animate-gradient">Gaurav Kumar</span>
                </h1>
                <p className="hero-tagline">
                    Software Engineer crafting scalable web applications with <strong>React</strong>, <strong>Node.js</strong> & <strong>TypeScript</strong>. Currently building impactful products at <strong>Newton School</strong>.
                </p>
                <div className="hero-buttons">
                    <a href="#contact" className="btn btn-primary" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
                        Get in Touch <FaArrowRight />
                    </a>
                    <a href="https://www.linkedin.com/in/gauravgkb99" target="_blank" rel="noreferrer" className="btn btn-outline">
                        <FaLinkedin /> LinkedIn
                    </a>
                    <a href="https://drive.google.com/file/d/1lhw-U1usZ2AgZw42YV99q6C3X93J-2rb/view?usp=sharing" target="_blank" rel="noreferrer" className="btn btn-outline">
                        <FaFileAlt /> Resume
                    </a>
                </div>
            </div>

            <div className="hero-scroll-indicator">
                <span>Scroll</span>
                <div className="scroll-line" />
            </div>
        </section>
    )
}
