import { TextureLoader, Group, Mesh, Vector3 } from 'three';
import { Sphere } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { EARTH_TEXTURE, SPECULAR_TEXTURE } from '../../const/paths';
import { Location } from '../../types/Location';
import { LOCATIONS } from '../../const/locations';
import gsap from 'gsap';
import { useLocationContext } from '../../contexts/LocationContext';

const LocationPoint = ({ itemLocation, handleRotate }: { itemLocation: Location; handleRotate: (location: Location) => void }) => {
    const { camera } = useThree();
    const { location } = useLocationContext();
    const pointRef = useRef<Group>(null!);
    const [hovered, setHovered] = useState(false);
  
    const handlePointerOver = () => {
      setHovered(true);
    };
  
    const handlePointerOut = () => {
      setHovered(false);
    };
  
    useEffect(() => {
      handleRotate(location);
    }, [location]);
  
    useFrame(() => {
      if (!pointRef.current) return;
  
      const vector = new Vector3();
      vector.setFromMatrixPosition(pointRef.current.matrixWorld).project(camera);
        
      const visible = vector.z < 0.95;
      pointRef.current.visible = visible;
    });
  
    return (
      <group position={itemLocation.position} ref={pointRef}>
        <Sphere args={[0.025, 32, 32]} onClick={() => handleRotate(itemLocation)} onPointerOver={handlePointerOver} onPointerOut={handlePointerOut}>
          <meshStandardMaterial color={hovered || location === itemLocation ? 0xff0049 : 0xb425a5} emissive={hovered || location === itemLocation ? 0xff0049 : 0xb425a5} emissiveIntensity={100} />
        </Sphere>
      </group>
    );
  };
  
  const Earth = () => {
    const { location, setLocation } = useLocationContext();
    const textureLoader = new TextureLoader();
    const colorMap = textureLoader.load(EARTH_TEXTURE);
    const specularMap = textureLoader.load(SPECULAR_TEXTURE);
    const meshRef = useRef<Mesh>(null);
    const earthRef = useRef<Group>(null!);
  
    useEffect(() => {
      if (meshRef.current === null) return;
      meshRef.current.rotation.y += Math.PI * 1.5;
      meshRef.current.rotation.x += Math.PI * 0.2;
    }, []);
  
    const handleRotate = (clickedLocation: Location) => {
      gsap.to(earthRef.current.rotation, {
        y: clickedLocation.rotateTo,
        duration: 1,
        ease: 'power1.inOut',
      });
      setLocation(clickedLocation);
    };
  
    useEffect(() => {
      handleRotate(location);
    }, [location]);
  
    useFrame(() => (earthRef.current.rotation.y -= 0.0003));
  
    return (
      <group ref={earthRef} position={[-1.5, 0, 0]}>
        <Sphere args={[2, 16, 16]} ref={meshRef}>
          <meshPhongMaterial map={colorMap} color={0xffffff} emissive={0xffffff} emissiveIntensity={0.2} alphaMap={specularMap} alphaTest={0.15} />
        </Sphere>
        {LOCATIONS.map((location) => (
          <LocationPoint itemLocation={location} handleRotate={handleRotate} />
        ))}
      </group>
    );
  };
  
  export default Earth;