import { useEffect, useRef } from 'react'
import { LOCATIONS } from '../../const/locations'
import { useLocationContext } from '../../contexts/LocationContext'
import { Location } from '../../types/Location'
import './index.css'
import { vanishingAnimation } from '../../animations/Vanishing'

const LocationItem = ({ itemLocation } : { itemLocation: Location }) =>{
    const { setLocation } = useLocationContext()

    return (
        <div className='location-el' onClick={() => setLocation(itemLocation)}>
            {itemLocation.name}
        </div>
    )
}

const LocationList = () =>{
    const divRef = useRef<HTMLDivElement>(null!)

    useEffect(() =>{
        vanishingAnimation(divRef.current, 1.2, 0.2)
    }, [])

    return (
        <div className='location-list' ref={divRef}>
           {LOCATIONS.map(location => <LocationItem itemLocation={location}/>)}
        </div>
    )
}

export default LocationList