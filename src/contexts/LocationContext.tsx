import { createContext, useContext } from "react";
import { Location } from "../types/Location";
import { HOLANDIA } from "../const/locations";

const LocationContext = createContext<[Location, React.Dispatch<React.SetStateAction<Location>> | undefined]>([
    HOLANDIA, 
    undefined,
])

type LocationContextProvider = {
    location: Location
    setLocation: React.Dispatch<React.SetStateAction<Location>>
    children: React.ReactNode | React.ReactNode[],
}

export const LocationProvider = ({ location, setLocation, children } : LocationContextProvider) =>{
    return (
        <LocationContext.Provider value={[location, setLocation]}>
            { children }
        </LocationContext.Provider>
    )
}

export const useLocationContext = () =>{
    const [location, setLocation] = useContext(LocationContext)

    if(typeof setLocation === 'undefined') throw new Error('Element is not inside Location Context Provider')

    return { location, setLocation }
}