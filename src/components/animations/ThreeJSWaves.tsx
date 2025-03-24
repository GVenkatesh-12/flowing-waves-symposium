
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeJSWaves: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Set up scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    
    // Clear any existing canvas
    if (containerRef.current.firstChild) {
      containerRef.current.removeChild(containerRef.current.firstChild);
    }
    
    containerRef.current.appendChild(renderer.domElement);
    
    // Create the wave grid geometry
    const geometry = new THREE.PlaneGeometry(100, 100, 50, 50);
    
    // Create a blue gradient material
    const material = new THREE.MeshBasicMaterial({
      color: 0x0EA5E9,
      wireframe: true,
      transparent: true,
      opacity: 0.6
    });
    
    const waves = new THREE.Mesh(geometry, material);
    waves.rotation.x = -Math.PI / 2; // Rotate to be horizontal
    scene.add(waves);
    
    // Position camera
    camera.position.z = 30;
    camera.position.y = 20;
    camera.rotation.x = -Math.PI / 6;
    
    // Animation variables
    const positionAttribute = geometry.attributes.position;
    const originalVertices: number[] = [];
    
    // Store original vertex positions
    for (let i = 0; i < positionAttribute.array.length; i++) {
      originalVertices.push(positionAttribute.array[i]);
    }
    
    const amplitude = 0.6;
    const frequency = 0.3;
    const waveSpeed = 0.2;
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Update wave animation
      const time = Date.now() * 0.001;
      const positions = geometry.attributes.position.array;
      
      for (let i = 0; i < positions.length; i += 3) {
        // Get original vertex position
        const originalX = originalVertices[i];
        const originalZ = originalVertices[i + 2];
        
        // Calculate distance from center for radial waves
        const distance = Math.sqrt(originalX * originalX + originalZ * originalZ);
        
        // Apply sine wave based on distance and time
        positions[i + 1] = 
          amplitude * Math.sin(distance * frequency + time * waveSpeed) +
          0.3 * Math.sin(distance * 0.8 + time * 1.2);
      }
      
      geometry.attributes.position.needsUpdate = true;
      
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
