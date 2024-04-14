import { createContext, useContext } from "react";

const MusicContext = createContext<[[string, boolean], React.Dispatch<React.SetStateAction<[string, boolean]>> | undefined]>([
    ['', false],
    undefined,
])

type MusicContextProvider = {
    music: [string, boolean]
    setMusic: React.Dispatch<React.SetStateAction<[string, boolean]>>
    children: React.ReactNode | React.ReactNode[],
}

export const MusicProvider = ({ music, setMusic, children } : MusicContextProvider) =>{
    return (
        <MusicContext.Provider value={[music, setMusic]}>
            { children }
        </MusicContext.Provider>
    )
}

export const useMusic = () =>{
    const [music, setMusic] = useContext(MusicContext)
    const [path, play] = music

    if(typeof setMusic === 'undefined') throw new Error('Element is not inside Render Context Provider')

    return { path, play, setMusic }
}