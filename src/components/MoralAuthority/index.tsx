import { useEffect, useRef } from "react"
import { vanishingMoveNextAnimation } from "../../animations/Vanishing"
import PADEREWSKI_PATH from "../../assets/paderewski.png"
import './index.css'
import { MORAL_AUTHORITY_TEXT } from "../../const/moralAuthority"
import gsap from "gsap"

const MoralAuthority = () =>{
    const backgroundRef = useRef<HTMLImageElement>(null!)
    const moralRef = useRef<HTMLDivElement>(null!)
    const titleRef = useRef<HTMLHeadingElement>(null!)

    useEffect(() =>{
        vanishingMoveNextAnimation(backgroundRef.current, 0)
    }, [])

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
        <div className='moral-authority-container'>
            <img ref={backgroundRef} src={PADEREWSKI_PATH} className='politics-background' />
            <div className="career-background" />
            <div className="moral-authority-content">
                <header className="moral-authority-header" ref={titleRef}>Autorytet Morlany</header>
                <div ref={moralRef} className="moral-authority-text">{MORAL_AUTHORITY_TEXT.map(el => 
                                                                                <div 
                                                                                    className="moral-authority-el">
                                                                                        {el}
                                                                                </div>)}
                </div>
            </div>
        </div>
    )
}

export default MoralAuthority