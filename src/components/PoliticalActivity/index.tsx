import { useEffect, useRef } from "react"
import PADEREWSKI_FLAG_PATH from "../../assets/paderewski-flag.png"
import "./index.css"
import { vanishingMoveNextAnimation } from "../../animations/Vanishing"
import gsap from "gsap"
import { POLITICAL_ACTIVITY } from "../../const/politicalActivity"

const PoliticalActivity = () =>{
    const moralRef = useRef<HTMLDivElement>(null!)
    const titleRef = useRef<HTMLHeadingElement>(null!)
    const politicalBoxRef = useRef<HTMLDivElement>(null!)

    useEffect(() =>{
        vanishingMoveNextAnimation(politicalBoxRef.current, 0)
    })

    useEffect(() =>{
        const tl = gsap.timeline()
        vanishingMoveNextAnimation(titleRef.current, 0)
        tl.fromTo(moralRef.current, {
            opacity: 0,
        }, {
            opacity: 1,
            delay: 0.3,
        })
    }, [])

    return (
        <div className="political-box" ref={politicalBoxRef}>
            <img src={PADEREWSKI_FLAG_PATH} className="background" />
            <div className="career-background" />
            <div className="moral-authority-content">
                <header className="political-header" ref={titleRef}>Działalność Polityczna</header>
                <div ref={moralRef} className="moral-authority-text">{POLITICAL_ACTIVITY.map(el => 
                                                                                <div 
                                                                                    className="moral-authority-el">
                                                                                        {el}
                                                                                </div>)}
                </div>
            </div>
        </div>
    )
}

export default PoliticalActivity