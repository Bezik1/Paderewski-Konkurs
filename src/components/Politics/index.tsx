import { useEffect, useRef } from "react"
import PADEREWSKI_FLAG_PATH from "../../assets/paderewski-flag.png"
import './index.css'
import { vanishingMoveNextAnimation } from "../../animations/Vanishing"

const Politics = () =>{
    const backgroundRef = useRef<HTMLImageElement>(null!)

    useEffect(() =>{
        //vanishingAnimation(backgroundRef.current, 0)
        vanishingMoveNextAnimation(backgroundRef.current, 0)
    }, [])

    return (
        <div className='politics-box'>
            <img ref={backgroundRef} src={PADEREWSKI_FLAG_PATH} className='background' />
            <div className="career-box">
                <div className="career-background" />
            </div>
        </div>
    )
}

export default Politics