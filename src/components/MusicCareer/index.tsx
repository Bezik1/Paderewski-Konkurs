import { useEffect, useRef, useState } from "react"
import PADEREWSKI_PATH from "../../assets/paderewski.png"
import { vanishingAnimation } from "../../animations/Vanishing"
import "./index.css"
import { CareerItem } from "../../types/Career"
import { IoLocationOutline } from "react-icons/io5";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { CAREER_ITEMS } from "../../const/career"

const MAX_TEXT_LEN = 100

const CareerElement = ({ item } : { item: CareerItem }) =>{
    const { title, text, location, year } = item
    const [readMore, setReadMore] = useState(false)

    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
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

    useEffect(() =>{
        vanishingAnimation(backgroundRef.current, 0)
    }, [])

    return (
        <div className="music-career">
            <img ref={backgroundRef} className="background" src={PADEREWSKI_PATH} />
            <div className="career-box">
                <div className="career-background" />
                <div className="career-timeline-box">
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