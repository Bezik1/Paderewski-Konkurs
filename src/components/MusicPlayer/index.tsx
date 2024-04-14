import { ReactNode, useEffect, useRef, useState } from "react";
import { FaGooglePlay } from "react-icons/fa";
import './index.css'
import gsap from "gsap";

const MusicPlayer = ({ currentPath, path, setCurrentPath, animate, children,audioRef } : 
    { currentPath: string, path: string, setCurrentPath: React.Dispatch<React.SetStateAction<string>>, animate: boolean, children: ReactNode, audioRef: React.MutableRefObject<HTMLAudioElement> }) =>{
    const playRef = useRef<HTMLDivElement>(null!)
    const [play, setPlay] = useState(false)
    const [firstPlay, setFirstPlay] = useState(true)

    useEffect(() =>{
        console.log(animate)
        if(animate) {
            gsap.fromTo(playRef.current, {
                opacity: 0, 
                x: -50,
            }, {
                opacity: 1,
                x: 0,
            })
        } else {
            gsap.fromTo(playRef.current, {
                opacity: 1, 
                x: 0,
            }, {
                opacity: 0,
                x: -50
            })
        }
    }, [animate])

    useEffect(() =>{
        if(audioRef.current && firstPlay) {
            audioRef.current.currentTime += 7
            audioRef.current.volume = 0.5
            setFirstPlay(false)
        }

        if(play) audioRef.current.play()
        else audioRef.current.pause() 
    }, [play])

    const handlePlay = () =>{
        if(path == currentPath) setPlay(!play)
        else setCurrentPath(path)
    }

    return (
        <>
            <div className="play-container" ref={playRef}>
                <header className="play-header">{children}</header>
                <FaGooglePlay className={`play-icon ${play && "play-icon-active"}`} onClick={handlePlay} />
            </div>
        </>
    )
}

export default MusicPlayer