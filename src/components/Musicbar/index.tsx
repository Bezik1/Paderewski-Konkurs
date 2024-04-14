import { useRef, useState } from "react"
import { GiMusicalScore } from "react-icons/gi";
import "./index.css"
import MUSIC_PATH from '../../assets/background_music.mp3'
import MusicPlayer from "../MusicPlayer";

const Musicbar = () =>{
    const iconRef = useRef<HTMLDivElement>(null!)
    const [rolled, setRolled] = useState(false)
    const [animate, setAnimate] = useState(false)

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
            {rolled && <MusicPlayer path={MUSIC_PATH} animate={animate}>Fantazja Polska Op.19:</MusicPlayer>}
            <div ref={iconRef}>
                <GiMusicalScore className={`icon ${rolled && "icon-active"}`} onClick={handleClick}/>
            </div>
        </div>
    )
}

export default Musicbar