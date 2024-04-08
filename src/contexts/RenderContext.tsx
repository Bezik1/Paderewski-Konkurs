import { ReactElement, createContext, useContext } from "react";
import { Location } from "../types/Location";
import { STRASBURG } from "../const/locations";
import Map from "../components/Map";
import { Subsite } from "../types/Subsite";
import { SUBSITES } from "../const/subsites";

const RenderContext = createContext<[Subsite, React.Dispatch<React.SetStateAction<Subsite>> | undefined]>([
    SUBSITES[0],
    undefined,
])

type RenderContextProvider = {
    render: Subsite
    setRender: React.Dispatch<React.SetStateAction<Subsite>>
    children: React.ReactNode | React.ReactNode[],
}

export const RenderProvider = ({ render, setRender, children } : RenderContextProvider) =>{
    return (
        <RenderContext.Provider value={[render, setRender]}>
            { children }
        </RenderContext.Provider>
    )
}

export const useRender = () =>{
    const [render, setRender] = useContext(RenderContext)

    if(typeof setRender === 'undefined') throw new Error('Element is not inside Render Context Provider')

    return { render, setRender }
}