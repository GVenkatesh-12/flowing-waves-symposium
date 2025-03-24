
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeJSWaves: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Set up scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      precision: 'highp'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    // Clear any existing canvas
    if (containerRef.current.firstChild) {
      containerRef.current.removeChild(containerRef.current.firstChild);
    }
    
    containerRef.current.appendChild(renderer.domElement);
    
    // Create a more professional looking wave grid
    const gridSize = 100;
    const segments = 75; // Higher resolution for smoother waves
    const geometry = new THREE.PlaneGeometry(gridSize, gridSize, segments, segments);
    
    // Create a gradient material with custom shader for more professional look
    const uniforms = {
      time: { value: 0 },
      color1: { value: new THREE.Color('#0EA5E9') }, // Primary blue
      color2: { value: new THREE.Color('#2563EB') }, // Secondary blue
    };
    
    const material = new THREE.ShaderMaterial({
      uniforms: uniforms,
      vertexShader: `
        uniform float time;
        varying vec2 vUv;
        varying float vElevation;
        
        void main() {
          vUv = uv;
          
          vec3 pos = position;
          float dist = distance(vec2(0.5, 0.5), uv) * 2.0;
          
          // Create smooth wave patterns
          float elevationA = sin(uv.x * 15.0 + time * 0.5) * 0.2;
          float elevationB = sin(uv.y * 10.0 + time * 0.3) * 0.1;
          float elevationC = sin(dist * 8.0 - time * 0.5) * 0.25;
          
          // Apply wave height with falloff from center
          float falloff = smoothstep(1.0, 0.4, dist);
          vElevation = (elevationA + elevationB + elevationC) * falloff;
          pos.z += vElevation;
          
          // Project position to clip space
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          
          // Pass elevation to fragment shader
          vElevation = vElevation;
        }
      `,
      fragmentShader: `
        uniform vec3 color1;
        uniform vec3 color2;
        varying float vElevation;
        varying vec2 vUv;
        
        void main() {
          // Create a smooth gradient based on elevation and position
          float intensity = (vElevation + 0.3) * 0.8;
          intensity = clamp(intensity, 0.0, 1.0);
          
          // Mix colors based on intensity for a professional gradient
          vec3 color = mix(color1, color2, intensity);
          
          // Add slight edge transparency
          float alpha = smoothstep(0.0, 0.2, 1.0 - distance(vUv, vec2(0.5)));
          alpha = alpha * 0.7 + 0.3; // Base transparency
          
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
      wireframe: false,
    });
    
    const waves = new THREE.Mesh(geometry, material);
    waves.rotation.x = -Math.PI / 2.5; // Rotate to be more visible
    waves.position.y = -5; // Position slightly lower
    scene.add(waves);
    
    // Position camera for a more dramatic angle
    camera.position.z = 25;
    camera.position.y = 15;
    camera.rotation.x = -Math.PI / 5.5;
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Update time uniform for shader animation
      uniforms.time.value = performance.now() * 0.001;
      
      renderer.render(scene, camera);
    };
    
    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Start animation
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        if (containerRef.current.contains(renderer.domElement)) {
          containerRef.current.removeChild(renderer.domElement);
        }
      }
      
      // Dispose resources
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);
  
  return <div ref={containerRef} className="canvas-container" />;
};

export default ThreeJSWaves;
