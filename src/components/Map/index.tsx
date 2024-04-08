import { useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Earth from '../Earth'
import { Location } from '../../types/Location'
import Informator from '../Informator'
import { STRASBURG } from '../../const/locations'
import { LocationProvider } from '../../contexts/LocationContext'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import LocationList from '../LocationsList'
import { vanishingAnimation } from '../../animations/Vanishing'
import COSMOS_PATH from "../../assets/cosmos.jpg"

const Map = () =>{
    const canvasRef = useRef<HTMLCanvasElement>(null!)
    const backgroundRef = useRef<HTMLImageElement>(null!)
    const [currentLocation, setCurrentLocation] = useState<Location>(STRASBURG)
  
    useEffect(() =>{
      vanishingAnimation(canvasRef.current, 1)
    }, [])

    useEffect(() =>{
        vanishingAnimation(backgroundRef.current, 0)
    }, [])
    
    return (
        <LocationProvider location={currentLocation} setLocation={setCurrentLocation}>
            <img className='background' src={COSMOS_PATH} ref={backgroundRef}/>
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