import { createContext, useContext } from "react";

const RenderContext = createContext<[number, React.Dispatch<React.SetStateAction<number>> | undefined]>([
    0,
    undefined,
])

type RenderContextProvider = {
    render: number
    setRender: React.Dispatch<React.SetStateAction<number>>
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