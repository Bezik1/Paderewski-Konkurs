import { useRef, useState } from "react"
import { GiMusicalScore } from "react-icons/gi";
import "./index.css"
import MUSIC_PATH from '../../assets/background_music.mp3'
import MUSIC_PATH_2 from '../../assets/Chants du voyageur, Op.8 (Paderewski, Ignacy Jan).mp3'
import MUSIC_PATH_3 from '../../assets/Ignacy Jan Paderewski - 6 Humoresques de Concert Op. 14 (audio sheet music).mp3'
import MusicPlayer from "../MusicPlayer";
import { useMusic } from "../../contexts/MusicContext";

const MUSIC_PATHS = [
    {
        path: MUSIC_PATH,
        text: "Fantazja Polska Op.19"
    }, 
    {
        path: MUSIC_PATH_2,
        text: "Chants du voyageur, Op.8"
    },
    {
        path: MUSIC_PATH_3,
        text: "Humoresques de Concert Op. 14"
    }, 
]

const Musicbar = () =>{
    const audioRef = useRef<HTMLAudioElement>(null!)
    const iconRef = useRef<HTMLDivElement>(null!)
    const [rolled, setRolled] = useState(false)
    const [animate, setAnimate] = useState(false)
    const { path } = useMusic()

    const handleClick = () =>{ 
        setAnimate(!animate);
        if(!rolled) {
            setRolled(!rolled);
        } else {
            setTimeout(() => {
                setRolled(!rolled);
            }, 500);
        }
    }

    return (
        <div className="musicbar">
            <div className="musicbar-container">
            {rolled && MUSIC_PATHS.map(({text, path}, idx) => <MusicPlayer 
                                                path={path}
                                                idx={idx}
                                                audioRef={audioRef} 
                                                animate={animate}
                                            >
                                                {text}
                                            </MusicPlayer>
            )}
            </div>
            <div ref={iconRef}>
                <GiMusicalScore className={`icon ${rolled && "icon-active"}`} onClick={handleClick}/>
            </div>
            <audio ref={audioRef}>
                <source src={path} type="audio/mpeg" />
            </audio>
        </div>
    )
}

export default Musicbar