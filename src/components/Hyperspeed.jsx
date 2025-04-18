import React, { useRef, useEffect, useMemo } from "react";
import * as THREE from "three";
import { EffectComposer, Bloom, Glitch } from "postprocessing";
import { hyperspeedPresets } from "./hyperspeedPresets";

const Hyperspeed = ({ effectOptions = hyperspeedPresets.three }) => {
  const mountRef = useRef(null);
  const scene = useMemo(() => new THREE.Scene(), []);

  useEffect(() => {
    const container = mountRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      effectOptions.fov,
      width / height,
      0.1,
      1000
    );
    camera.position.set(0, 4, 0);
    camera.lookAt(0, 0, 0);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Postprocessing setup
    const composer = new EffectComposer(renderer);
    composer.addPass(new THREE.RenderPass(scene, camera));

    // Add effects
    const bloomPass = new Bloom({
      intensity: 2,
      luminanceThreshold: 0.8,
      luminanceSmoothing: 0.5,
    });
    composer.addPass(bloomPass);

    // Your existing hyperspeed scene setup here (roads, cars, etc.)
    // This is where you'd implement the actual hyperspeed visualization
    // using the effectOptions parameters from your presets

    // Example geometry (replace with your actual scene setup)
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
      wireframe: true,
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Update your scene animations here
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      composer.render();
    };

    animate();

    // Cleanup
    return () => {
      container.removeChild(renderer.domElement);
      scene.remove(cube);
      geometry.dispose();
      material.dispose();
    };
  }, [effectOptions, scene]);

  return <div ref={mountRef} style={{ width: "100%", height: "100%" }} />;
};

export default Hyperspeed;
