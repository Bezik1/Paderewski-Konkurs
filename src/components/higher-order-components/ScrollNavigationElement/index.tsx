import { useEffect, useRef } from "react";
import { useRender } from "../../../contexts/RenderContext";
import { HALF_HEIGHT } from "../../../const/other";
import { SUBSITES } from "../../../const/subsites";
import "./index.css"

const ScrollNavigationElement = ({ children } : { children: React.ReactNode | React.ReactNode[] }) =>{
    const { render, setRender } = useRender()
    const boxRef = useRef<HTMLDivElement>(null!)

    useEffect(() =>{
        window.scrollTo(0, HALF_HEIGHT);
    }, [])

    useEffect(() => {
        const handleScroll = () => {
        const scrollY = window.scrollY;

        if(Number(scrollY.toFixed(3)) > HALF_HEIGHT) setRender((render+1)%SUBSITES.length)
        else if(Number(scrollY.toFixed(3)) < HALF_HEIGHT) setRender((render-1)%SUBSITES.length)
            
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return <div ref={boxRef} className="scroll-box">{children}</div>
}

export default ScrollNavigationElement