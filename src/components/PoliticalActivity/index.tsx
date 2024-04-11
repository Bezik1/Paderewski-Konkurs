import { useEffect, useRef } from "react"
import PADEREWSKI_FLAG_PATH from "../../assets/paderewski-flag.png"
import "./index.css"
import { vanishingMoveNextAnimation } from "../../animations/Vanishing"

const PoliticalActivity = () =>{
    const politicalBoxRef = useRef<HTMLDivElement>(null!)

    useEffect(() =>{
        vanishingMoveNextAnimation(politicalBoxRef.current, 0)
    })

    return (
        <div className="political-box" ref={politicalBoxRef}>
            <img src={PADEREWSKI_FLAG_PATH} className="background" />
            <div className="career-background" />
        </div>
    )
}

export default PoliticalActivity