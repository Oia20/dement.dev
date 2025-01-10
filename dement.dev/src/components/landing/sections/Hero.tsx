import { motion } from 'framer-motion'
import { Canvas, type ThreeElements } from '@react-three/fiber'
import { OrbitControls, Float, PerspectiveCamera } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

declare module '@react-three/fiber' {
  interface ThreeElements {
    mesh: ThreeElements['mesh']
  }
}

const Scene = () => {
  const meshRef = useRef<THREE.Mesh>(null)

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <OrbitControls enableZoom={false} enablePan={false} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Float
        speed={4} // Animation speed
        rotationIntensity={1} // XYZ rotation intensity
        floatIntensity={1} // Up/down float intensity
      >
        <mesh ref={meshRef}>
          <octahedronGeometry args={[1.5, 0]} />
          <meshStandardMaterial
            color="#4299e1"
            wireframe
            emissive="#4299e1"
            emissiveIntensity={0.5}
          />
        </mesh>
      </Float>
    </>
  )
}

export const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center pt-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left column with text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6 text-center md:text-left"
                    >
                        <motion.h1 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text"
                        >
                            Hey, I'm Jacob Dement👋
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-xl md:text-2xl text-gray-400"
                        >
                            A Full Stack Developer passionate about building elegant solutions to complex problems
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            className="flex flex-wrap gap-4 justify-center md:justify-start"
                        >
                            <a
                                href="#projects"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-colors"
                            >
                                View Projects
                            </a>
                            <a
                                href="/your-resume.pdf"
                                className="bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full transition-colors"
                            >
                                Download Resume
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right column with Three.js scene */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative order-first md:order-last h-[500px]"
                    >
                        <div className="w-full h-full rounded-2xl overflow-hidden bg-gray-900/20">
                            <Canvas>
                                <Scene />
                            </Canvas>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10" />
                        <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
