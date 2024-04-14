import { useEffect, useRef } from "react"
import EMPTY_BACKGROUND from "../../assets/ciekawostki_bg.png"
import { TRIVIAS } from "../../const/trivias"
import "./index.css"
import { vanishingAnimation, vanishingMoveNextAnimation } from "../../animations/Vanishing"

const Trivias = () =>{
    const backgroundRef = useRef<HTMLDivElement>(null!)
    const titleRef = useRef<HTMLHeadElement>(null!)
    const columnsRef = useRef<HTMLDivElement>(null!)

    useEffect(() =>{
        vanishingMoveNextAnimation(backgroundRef.current, 0)
        vanishingAnimation(columnsRef.current, 0.3)
        vanishingMoveNextAnimation(titleRef.current, 0.1)
    })

    return (
        <div className="trivias-container" ref={backgroundRef}>
            <img src={EMPTY_BACKGROUND} className="background" />
            <div className="trivias-background" />
            <header className="trivias-header" ref={titleRef}>Ciekawostki</header>
            <div className="trivias-box" ref={columnsRef}>
                {TRIVIAS.map(trivia =>(
                    <div className="trivia-column">{trivia}</div>
                ))}
            </div>
        </div>
    )
}

export default Trivias