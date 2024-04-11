import { useEffect, useRef } from "react"
import PADEREWSKI_PATH from "../../assets/paderewski.png"
import './index.css'
import { vanishingMoveNextAnimation } from "../../animations/Vanishing"
import { FaBirthdayCake } from "react-icons/fa";
import { MUSIC_CAREER_ITEMS } from "../../const/musicCareer"
import gsap from "gsap"

const MusicCareer = () =>{
    const backgroundRef = useRef<HTMLImageElement>(null!)
    const careerRef = useRef<HTMLDivElement>(null!)
    const titleRef = useRef<HTMLHeadingElement>(null!)

    useEffect(() =>{
        vanishingMoveNextAnimation(titleRef.current, 0)
        vanishingMoveNextAnimation(backgroundRef.current, 0)
    }, [])

    useEffect(() =>{
        const tl = gsap.timeline()
        tl.fromTo(careerRef.current, {
            opacity: 0,
        }, {
            opacity: 1,
            delay: 0.3,
        })
    }, [])

    return (
        <div className='politics-box'>
            <img ref={backgroundRef} src={PADEREWSKI_PATH} className='politics-background' />
            <div className="career-box">
                <div className="career-background" />
                <div className="career-container-box">
                    <header className="music-career-header" ref={titleRef}>Kariera Muzyczna</header>
                    <div className="career-container" ref={careerRef}>
                        <div className="career-element">
                            {MUSIC_CAREER_ITEMS.map(career_item => <div className="career-el">{career_item.text}</div>)}
                            <FaBirthdayCake className="birth-svg"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MusicCareer