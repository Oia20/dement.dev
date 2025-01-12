import { motion } from 'framer-motion'
import { Canvas, type ThreeElements } from '@react-three/fiber'
import { OrbitControls, Float, PerspectiveCamera } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { Suspense } from 'react'

type GLTFResult = {
  nodes: any;
  materials: any;
};

declare module '@react-three/fiber' {
  interface ThreeElements {
    mesh: ThreeElements['mesh']
  }
}

const ModelLoadingFallback = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gray-900/5 relative">
      <motion.div
        animate={{ 
          rotateY: 360,
          rotateX: 360,
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
        className="relative w-32 h-32 mb-6"
        style={{
          transformStyle: 'preserve-3d',
          perspective: '1000px'
        }}
      >
        <div className="absolute w-full h-full border-2 border-blue-400/30 bg-blue-400/10" 
             style={{ transform: 'translateZ(16px)' }} />
        <div className="absolute w-full h-full border-2 border-blue-400/30 bg-blue-400/10" 
             style={{ transform: 'rotateY(180deg) translateZ(16px)' }} />
        <div className="absolute w-full h-full border-2 border-blue-400/30 bg-blue-400/10" 
             style={{ transform: 'rotateY(90deg) translateZ(16px)' }} />
        <div className="absolute w-full h-full border-2 border-blue-400/30 bg-blue-400/10" 
             style={{ transform: 'rotateY(-90deg) translateZ(16px)' }} />
        <div className="absolute w-full h-full border-2 border-blue-400/30 bg-blue-400/10" 
             style={{ transform: 'rotateX(90deg) translateZ(16px)' }} />
        <div className="absolute w-full h-full border-2 border-blue-400/30 bg-blue-400/10" 
             style={{ transform: 'rotateX(-90deg) translateZ(16px)' }} />
      </motion.div>

      <div className="space-y-2 text-center">
        <motion.div className="text-xl text-gray-200 font-medium">
          Loading 3D Model...
        </motion.div>
        <motion.div 
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-sm text-gray-200"
        />
      </div>

      <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
    </div>
  );
};

const Model: React.FC<{ position?: [number, number, number] }> = ({ position = [0, 0, 0] }) => {
  const { scene } = useGLTF('./futurepicture.glb') as GLTFResult;
  
  // Clone the scene to avoid mutations
  const clonedScene = scene.clone();
  // Apply position directly to the scene
  clonedScene.position.set(...position);
  
  return <primitive object={clonedScene} />;
};

const Scene = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 6]} />
      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      <Float
        speed={4}
        rotationIntensity={1}
        floatIntensity={1}
      >
        <Model position={[0, -.5, 0]} />
      </Float>
      
    </>
  )
}

export const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-36 lg:pt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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
              A Software Engineer who loves building useful, fun, and creative software! I also freelance, and stay active in many developer communites!
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

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative order-last md:order-last h-[500px]"
          >
            <div className="w-full h-full rounded-2xl overflow-hidden bg-gray-900/10">
              <Suspense fallback={<ModelLoadingFallback />}>
                <Canvas>
                  <Scene />
                </Canvas>
              </Suspense>
            </div>
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl z-10" />
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}