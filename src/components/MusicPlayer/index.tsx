import { ReactNode, useEffect, useRef } from "react";
import { FaGooglePlay } from "react-icons/fa";
import './index.css'
import gsap from "gsap";
import { useMusic } from "../../contexts/MusicContext";

const MusicPlayer = ({ path, animate, children, audioRef, idx } : 
    { path: string, idx: number, animate: boolean, children: ReactNode, audioRef: React.MutableRefObject<HTMLAudioElement> }) =>{
    const playRef = useRef<HTMLDivElement>(null!)
    const { path: currentPath, play, setMusic } = useMusic()

    useEffect(() =>{
        console.log(animate)
        if(animate) {
            gsap.fromTo(playRef.current, {
                opacity: 0, 
                x: -50,
            }, {
                opacity: 1,
                x: 0,
                delay: idx*0.1,
            })
        } else {
            gsap.fromTo(playRef.current, {
                opacity: 1, 
                x: 0,
            }, {
                opacity: 0,
                x: -50,
                delay: idx*0.1,
            })
        }
    }, [animate])

    useEffect(() =>{
        if(play) audioRef.current.play()
        else if (!play) audioRef.current.pause() 
    }, [play])

    const handlePlay = () =>{
        let newMusic: [string, boolean] = ['', false]
        if(path == currentPath && play) newMusic = [currentPath, false]
        else if (path == currentPath && !play) newMusic = [currentPath, true]
        else newMusic = [path, true]

        setMusic(newMusic)
        if(newMusic[0] != currentPath) {
            audioRef.current.src = newMusic[0]
            audioRef.current.play()
        }
    }

    return (
        <>
            <div className="play-container" ref={playRef}>
                <header className="play-header">{children}</header>
                <FaGooglePlay className={`play-icon ${(play && path==currentPath) && "play-icon-active"}`} onClick={handlePlay} />
            </div>
        </>
    )
}

export default MusicPlayer