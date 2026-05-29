import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

// Floating Blob Component
function FloatingBlob({ position, color, size, speed, distort }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed) * 0.2
      meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime * speed) * 0.2
    }
  })

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={2}>
      <Sphere ref={meshRef} args={[size, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.1}
        />
      </Sphere>
    </Float>
  )
}

// Small floating spheres
function FloatingSphere({ position, color, size }) {
  return (
    <Float speed={3} rotationIntensity={1} floatIntensity={3}>
      <Sphere args={[size, 32, 32]} position={position}>
        <meshStandardMaterial 
          color={color} 
          roughness={0.3} 
          metalness={0.2}
          transparent
          opacity={0.9}
        />
      </Sphere>
    </Float>
  )
}

// Particles background
function Particles({ count = 50 }) {
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i += 3) {
      pos[i] = (Math.random() - 0.5) * 20
      pos[i + 1] = (Math.random() - 0.5) * 20
      pos[i + 2] = (Math.random() - 0.5) * 10
    }
    return pos
  }, [count])

  const ref = useRef()

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1
    }
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.05} 
        color="#f8b4c2" 
        transparent 
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  )
}

// Main 3D Scene
export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%',
        pointerEvents: 'none'
      }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
      <directionalLight position={[-10, -10, -5]} intensity={0.3} color="#f8b4c2" />
      <pointLight position={[0, 5, 5]} intensity={0.5} color="#ff9a70" />
      
      {/* Main decorative blobs */}
      <FloatingBlob 
        position={[4, 1, -2]} 
        color="#f8b4c2" 
        size={1.5} 
        speed={1.5} 
        distort={0.4} 
      />
      <FloatingBlob 
        position={[-4, -1, -3]} 
        color="#ffd4bf" 
        size={1.2} 
        speed={1.2} 
        distort={0.3} 
      />
      <FloatingBlob 
        position={[3, -2, -1]} 
        color="#ddd0ff" 
        size={0.8} 
        speed={1.8} 
        distort={0.5} 
      />
      
      {/* Smaller floating spheres */}
      <FloatingSphere position={[-3, 2, -1]} color="#f48aa3" size={0.3} />
      <FloatingSphere position={[5, -1, 0]} color="#b5f2e0" size={0.25} />
      <FloatingSphere position={[-5, -2, -2]} color="#c4b0f4" size={0.35} />
      <FloatingSphere position={[2, 3, -2]} color="#ffb899" size={0.2} />
      <FloatingSphere position={[-2, -3, -1]} color="#f8b4c2" size={0.28} />
      <FloatingSphere position={[4, 2, -3]} color="#85e5c9" size={0.22} />
      <FloatingSphere position={[-4, 1, 0]} color="#f48aa3" size={0.18} />
      
      {/* Particle system */}
      <Particles count={100} />
    </Canvas>
  )
}
