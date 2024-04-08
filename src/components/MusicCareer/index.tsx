import { useEffect, useRef, useState } from "react"
import PADEREWSKI_PATH from "../../assets/paderewski.png"
import { vanishingMoveNextAnimation } from "../../animations/Vanishing"
import "./index.css"
import { CareerItem } from "../../types/Career"
import { IoLocationOutline } from "react-icons/io5";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { CAREER_ITEMS } from "../../const/career"
import { useRender } from "../../contexts/RenderContext"
import { SUBSITES } from "../../const/subsites"

const MAX_TEXT_LEN = 100

const CareerElement = ({ item } : { item: CareerItem }) =>{
    const { title, text, location, year } = item
    const [readMore, setReadMore] = useState(false)

    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work career-el"
            contentStyle={{ background: '#ff00003a', paddingBottom: 0, color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #fff' }}
            date={String(year)}
            dateClassName="career-year"
            iconStyle={{ background: '#ab1515', color: '#fff' }}
            >
            <h3 className="vertical-timeline-element-title">{title}</h3>
            <h4 className="vertical-timeline-element-subtitle">
                <div className="location">
                    <IoLocationOutline />
                    {location}
                </div>
            </h4>
            <p>
                {!readMore 
                    ? text.substring(0, 99)
                    : text
                }
                {text.length > MAX_TEXT_LEN && <div onClick={() => setReadMore(!readMore)} className={`read-more ${readMore ? 'read-active' : ''}`}>
                    {readMore ? "Czytaj mniej" : "Czytaj więcej"}
                </div>}
            </p>
        </VerticalTimelineElement>
    )
}

const MusicCareer = () =>{
    const backgroundRef = useRef<HTMLImageElement>(null!)
    const timelineBoxRef = useRef<HTMLDivElement>(null!)
    const [isScrolledToBottom, setIsScrolledToBottom] = useState(false)
    const { render, setRender } = useRender()

    useEffect(() =>{
        vanishingMoveNextAnimation(backgroundRef.current, 0)
    }, [])

    const handleScroll = () => {
        const { scrollTop, scrollHeight, clientHeight } = timelineBoxRef.current!
        if (scrollTop + clientHeight >= scrollHeight-10) {
            setIsScrolledToBottom(true)
        } else {
            setIsScrolledToBottom(false)
        }
        
        if(isScrolledToBottom) {
            setRender((render+1)%SUBSITES.length)
        }
    }

    return (
        <div className="music-career">
            <img ref={backgroundRef} className="background career-music-background" src={PADEREWSKI_PATH} />
            <div className="career-box">
                <div className="career-background" />
                <div
                    ref={timelineBoxRef}
                    className="career-timeline-box"
                    onScroll={handleScroll}
                    style={{ overflowY: 'auto' }} // Add this style to enable scrolling
                >
                    <VerticalTimeline
                        lineColor="#fff"
                    >
                        {CAREER_ITEMS.map(careerItem => <CareerElement item={careerItem} />)}
                    </VerticalTimeline>
                </div>
            </div>
        </div>
    )
}

export default MusicCareer
