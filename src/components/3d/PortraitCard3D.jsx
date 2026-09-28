import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Image, Float } from '@react-three/drei';
import * as THREE from 'three';
import { personalInfo } from '../../data/portfolioData';
import { Sparkles, Compass, CheckCircle2 } from 'lucide-react';

/* Subtle Minimalist Floating Abstract 3D Shapes */
function FloatingAbstractShapes() {
  const torusRef = useRef();
  const sphereRef = useRef();
  const pillRef = useRef();

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.25;
      torusRef.current.rotation.y = t * 0.35;
      torusRef.current.position.y = 1.3 + Math.sin(t * 0.8) * 0.12;
    }
    if (sphereRef.current) {
      sphereRef.current.position.y = -1.3 + Math.cos(t * 0.7) * 0.1;
      sphereRef.current.position.x = -2.1 + Math.sin(t * 0.5) * 0.08;
    }
    if (pillRef.current) {
      pillRef.current.rotation.z = t * 0.2;
      pillRef.current.rotation.x = t * 0.15;
      pillRef.current.position.y = 1.6 + Math.cos(t * 0.6) * 0.1;
    }
  });

  return (
    <group>
      {/* Frosted translucent minimalist Torus */}
      <mesh ref={torusRef} position={[2.1, 1.3, -0.4]}>
        <torusGeometry args={[0.42, 0.06, 16, 48]} />
        <meshStandardMaterial
          color="#3b82f6"
          roughness={0.2}
          metalness={0.1}
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Subtle floating sphere */}
      <mesh ref={sphereRef} position={[-2.1, -1.3, 0.2]}>
        <sphereGeometry args={[0.24, 32, 32]} />
        <meshStandardMaterial
          color="#60a5fa"
          roughness={0.25}
          metalness={0.1}
          transparent
          opacity={0.65}
        />
      </mesh>

      {/* Floating minimalist cylinder / pill */}
      <mesh ref={pillRef} position={[-2.0, 1.6, -0.3]}>
        <cylinderGeometry args={[0.12, 0.12, 0.45, 24]} />
        <meshStandardMaterial
          color="#93c5fd"
          roughness={0.3}
          metalness={0.1}
          transparent
          opacity={0.6}
        />
      </mesh>
    </group>
  );
}

/* 3D Portrait Card Mesh with Mouse Parallax */
function PortraitMesh() {
  const cardGroupRef = useRef();

  useFrame((state) => {
    if (!cardGroupRef.current) return;
    // Parallax mouse tilt with smooth damping
    const targetRotY = (state.pointer.x * Math.PI) / 9;
    const targetRotX = (-state.pointer.y * Math.PI) / 11;
    const targetPosX = state.pointer.x * 0.25;
    const targetPosY = state.pointer.y * 0.2;

    cardGroupRef.current.rotation.y = THREE.MathUtils.lerp(
      cardGroupRef.current.rotation.y,
      targetRotY,
      0.08
    );
    cardGroupRef.current.rotation.x = THREE.MathUtils.lerp(
      cardGroupRef.current.rotation.x,
      targetRotX,
      0.08
    );
    cardGroupRef.current.position.x = THREE.MathUtils.lerp(
      cardGroupRef.current.position.x,
      targetPosX,
      0.08
    );
    cardGroupRef.current.position.y = THREE.MathUtils.lerp(
      cardGroupRef.current.position.y,
      targetPosY,
      0.08
    );
  });

  return (
    <group ref={cardGroupRef}>
      {/* 3D Card Backplate (White, beveled appearance) */}
      <mesh position={[0, 0, -0.06]}>
        <boxGeometry args={[3.04, 3.84, 0.08]} />
        <meshStandardMaterial
          color="#ffffff"
          roughness={0.15}
          metalness={0.05}
        />
      </mesh>

      {/* Subtle border trim */}
      <mesh position={[0, 0, -0.03]}>
        <boxGeometry args={[3.08, 3.88, 0.04]} />
        <meshStandardMaterial
          color="#e2e8f0"
          roughness={0.3}
          metalness={0.0}
        />
      </mesh>

      {/* Actual Portrait Photo of Sastha K */}
      <Suspense fallback={null}>
        <Image
          url="/sastha.jpeg"
          scale={[2.92, 3.72]}
          radius={0.08}
          toneMapped={false}
          position={[0, 0, 0.02]}
        />
      </Suspense>
    </group>
  );
}

/* Scene Setup inside Canvas */
function Portrait3DScene() {
  return (
    <>
      <ambientLight intensity={1.1} />
      <directionalLight position={[4, 5, 4]} intensity={1.2} />
      <directionalLight position={[-4, -3, 2]} intensity={0.5} color="#dbeafe" />
      <pointLight position={[0, 3, 3]} intensity={0.4} color="#ffffff" />
      
      <Float
        speed={1.5}
        rotationIntensity={0.2}
        floatIntensity={0.3}
        floatingRange={[-0.08, 0.08]}
      >
        <PortraitMesh />
        <FloatingAbstractShapes />
      </Float>
    </>
  );
}

/* Fallback card if WebGL is unavailable */
function CSSCardFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="relative w-full max-w-[340px] sm:max-w-[380px] rounded-3xl overflow-hidden bg-white border border-zinc-200 shadow-xl transition-transform hover:scale-[1.02] duration-300">
        <img
          src="/sastha.jpeg"
          alt="Sastha K - UI/UX Designer"
          className="w-full h-[420px] object-cover object-top"
        />
      </div>
    </div>
  );
}

/* Main Exported Component */
export default function PortraitCard3D() {
  const [hasWebGLError, setHasWebGLError] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative w-full max-w-[480px] mx-auto select-none">
      {/* Decorative ambient backdrop glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-blue-100/60 to-indigo-100/40 rounded-3xl filter blur-2xl transform scale-95 opacity-70" />

      {/* 3D Canvas Container */}
      <div className="relative w-full h-[460px] sm:h-[520px] rounded-3xl bg-white/40 border border-zinc-200/80 backdrop-blur-sm shadow-[0_20px_50px_rgba(0,0,0,0.06)] overflow-visible flex items-center justify-center">
        {hasWebGLError ? (
          <CSSCardFallback />
        ) : (
          <Canvas
            camera={{ position: [0, 0, 5.2], fov: 45 }}
            className="w-full h-full cursor-grab active:cursor-grabbing"
            onError={() => setHasWebGLError(true)}
          >
            <Suspense fallback={null}>
              <Portrait3DScene />
            </Suspense>
          </Canvas>
        )}

        {/* Floating Verified Badge (Bottom Left) */}
        <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-white/95 backdrop-blur-md border border-zinc-200/90 rounded-2xl p-3 sm:p-3.5 shadow-lg flex items-center gap-3 z-20">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
            <Compass className="w-5 h-5" />
          </div>
          <div className="text-left">
            <div className="text-xs font-bold text-zinc-900 flex items-center gap-1">
              <span>{personalInfo.title}</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
            </div>
            <div className="text-[11px] font-mono text-zinc-500">
              {personalInfo.degree}
            </div>
          </div>
        </div>

        {/* Floating Target Badge (Top Right) */}
        <div className="absolute -top-3 -right-2 sm:-top-4 sm:-right-4 bg-white/95 backdrop-blur-md border border-zinc-200/90 rounded-2xl px-3.5 py-2 shadow-lg flex items-center gap-2 z-20">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <div className="text-left">
            <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-600 block">
              Target Company
            </span>
            <span className="text-xs font-extrabold text-zinc-900">
              {personalInfo.targetCompany}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
