import { useEffect, useRef, useState } from 'react'
import './index.css'
import { useLocationContext } from '../../contexts/LocationContext'
import { vanishingAnimation } from '../../animations/Vanishing'

const MAX_TEXT_LEN = 400

const Informator = () =>{
    const divRef = useRef<HTMLDivElement>(null!)
    const { location } = useLocationContext()
    const { name, text } = location
    const [readMore, setReadMore] = useState(false)
    
    useEffect(() =>{
        if(text.length > MAX_TEXT_LEN) setReadMore(false)
    }, [text])

    useEffect(() =>{
        vanishingAnimation(divRef.current, 0, 0.2)
    }, [location])

    const resposnsiveReadMore = window.innerWidth <= 800 ? "" : "Czytaj więcej"

    return (
        <div className='info-container'>
            <div className={`informator ${readMore ? 'informator-red-more': ''}`}>
                <div className='content' ref={divRef}>
                    {!readMore
                        ? <><header className='content-header'>{name}</header><article className='content-text read-more-fade'>{text.substring(0, 399)}</article></>
                        : <><header className='content-header'>{name}</header><article className='content-text content-text-more'>{text}</article></>
                    }
                    {text.length > MAX_TEXT_LEN && <div onClick={() => setReadMore(!readMore)} className={`read-more ${readMore ? 'read-active' : ''}`}>
                        {readMore ? "Czytaj mniej" : resposnsiveReadMore}
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Informator