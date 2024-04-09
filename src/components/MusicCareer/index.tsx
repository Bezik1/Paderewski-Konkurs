import { useEffect, useRef } from "react"
import PADEREWSKI_FLAG_PATH from "../../assets/paderewski-flag.png"
import './index.css'
import { vanishingMoveNextAnimation } from "../../animations/Vanishing"
import { useRender } from "../../contexts/RenderContext"
import { SUBSITES } from "../../const/subsites"
import { HALF_HEIGHT } from "../../const/other"
import { FaBirthdayCake } from "react-icons/fa";
import { MUSIC_CAREER_ITEMS } from "../../const/musicCareer"

const MusicCareer = () =>{
    const politicsRef = useRef<HTMLDivElement>(null!)
    const backgroundRef = useRef<HTMLImageElement>(null!)
    const { render, setRender } = useRender()

    useEffect(() =>{
        window.scrollTo(0, HALF_HEIGHT);
        console.log(window.scrollY)
        vanishingMoveNextAnimation(backgroundRef.current, 0)
    }, [])

    useEffect(() => {
        const handleScroll = () => {
        const scrollY = window.scrollY;

        if(Number(scrollY.toFixed(3)) > HALF_HEIGHT) setRender((render+1)%SUBSITES.length)
        else if(Number(scrollY.toFixed(3)) < HALF_HEIGHT) setRender((render-1)%SUBSITES.length)
            
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <div ref={politicsRef} className='politics-box'>
            <img ref={backgroundRef} src={PADEREWSKI_FLAG_PATH} className='politics-background' />
            <div className="career-box">
                <div className="career-background" />
                <div className="career-container">
                    <div className="career-element">
                        {MUSIC_CAREER_ITEMS.map(career_item => <div className="career-el">{career_item.text}</div>)}
                        <FaBirthdayCake className="birth-svg"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MusicCareer