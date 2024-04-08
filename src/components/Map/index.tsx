import { useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Earth from '../Earth'
import { Location } from '../../types/Location'
import Informator from '../Informator'
import { STRASBURG } from '../../const/locations'
import { LocationProvider } from '../../contexts/LocationContext'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import LocationList from '../LocationsList'
import { vanishingMoveNextAnimation } from '../../animations/Vanishing'
import COSMOS_PATH from "../../assets/cosmos.jpg"
import { HALF_HEIGHT } from '../../const/other'
import { useRender } from '../../contexts/RenderContext'
import { SUBSITES } from '../../const/subsites'

const Map = () =>{
    const canvasRef = useRef<HTMLCanvasElement>(null!)
    const backgroundRef = useRef<HTMLImageElement>(null!)
    const [currentLocation, setCurrentLocation] = useState<Location>(STRASBURG)
    const { render, setRender } = useRender()
  
    useEffect(() =>{
        window.scrollTo(0, HALF_HEIGHT);
        vanishingMoveNextAnimation(canvasRef.current, 1)
    }, [])

    useEffect(() =>{
        vanishingMoveNextAnimation(backgroundRef.current, 0)
    }, [])

    useEffect(() => {
        const handleScroll = () => {
        const scrollY = window.scrollY;

        if(Number(scrollY.toFixed(3)) > HALF_HEIGHT) setRender((render+1)%SUBSITES.length)
        else if(Number(scrollY.toFixed(3)) < HALF_HEIGHT) setRender((render-1)%SUBSITES.length)
            
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
    return (
        <LocationProvider location={currentLocation} setLocation={setCurrentLocation}>
            <img className='earth-background' src={COSMOS_PATH} ref={backgroundRef}/>
            <Informator />
            <div className='earth-container'>
                <Canvas ref={canvasRef}>
                    <ambientLight intensity={1} />
                    <Earth />
                    <EffectComposer>
                        <Bloom luminanceThreshold={0} luminanceSmoothing={0.4} intensity={0.1} />
                    </EffectComposer>
                </Canvas>
            </div>
            <LocationList />
        </LocationProvider>
    )
}

export default Map