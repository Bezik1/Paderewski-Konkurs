import { useEffect, useRef } from "react"
import { INFORMATIONAL_SOURCES, MUSIC_SOURCES, PHOTOGRAPHIC_SOURCES, SOURCES_AUTHORS } from "../../const/sources"
import "./index.css"
import { vanishingAnimation, vanishingMoveNextAnimation } from "../../animations/Vanishing"

const Sources = () =>{
    const boxRef1 = useRef<HTMLDivElement>(null!)
    const boxRef2 = useRef<HTMLDivElement>(null!)
    const boxRef3 = useRef<HTMLDivElement>(null!)
    const titleRef1 = useRef<HTMLHeadingElement>(null!)
    const titleRef2 = useRef<HTMLHeadingElement>(null!)
    const titleRef3 = useRef<HTMLHeadingElement>(null!)
    const blobRef = useRef<HTMLDivElement>(null!)
    const creditsRef = useRef<HTMLDivElement>(null!)

    useEffect(() =>{
        vanishingMoveNextAnimation(blobRef.current, 0)
        vanishingAnimation(titleRef1.current, 0)
        vanishingAnimation(boxRef1.current, 0.1, 0.1)
        vanishingAnimation(titleRef2.current, 0.5)
        vanishingAnimation(boxRef2.current, 0.6, 0.1)
        vanishingAnimation(titleRef3.current, 1.0)
        vanishingAnimation(boxRef3.current, 1.1, 0.1)

        vanishingAnimation(creditsRef.current, 1.2)
    })

    return (
        <div className="sources-container">
            <div ref={blobRef}>
                <div className="blob"/>
                <div className="blob-2"/>
            </div>
            <div className="sources-content-box">
                <header className="sources-content-header" ref={titleRef1}>Źródła Fotograficzne</header>
                <div 
                    className="sources-content"
                    ref={boxRef1}
                >
                    {PHOTOGRAPHIC_SOURCES.map(source => <div className="source">{source}</div>)}
                </div>
                <header className="sources-content-header" ref={titleRef2}>Źródła Informacyjne</header>
                <div 
                    className="sources-content"
                    ref={boxRef2}
                >
                    {INFORMATIONAL_SOURCES.map(source => <div className="source">{source}</div>)}
                </div>
                <header className="sources-content-header" ref={titleRef3}>Źródła Muzyczne</header>
                <div 
                    className="sources-content"
                    ref={boxRef3}
                >
                    {MUSIC_SOURCES.map(source => <div className="source">{source}</div>)}
                </div>
            </div>
            <div className="authors" ref={creditsRef}>
                {SOURCES_AUTHORS}
            </div>
        </div>
    )
}

export default Sources