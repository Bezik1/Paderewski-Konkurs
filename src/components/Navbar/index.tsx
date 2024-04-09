import { CiMenuFries } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import './index.css'
import { useEffect, useRef, useState } from "react";;
import { reveresedVanishingAnimation, vanishingAnimation } from "../../animations/Vanishing";
import { useRender } from "../../contexts/RenderContext";
import { SUBSITES } from "../../const/subsites";
import gsap from "gsap";

const Navbar = () =>{
    const pointRef = useRef<HTMLDivElement>(null!)
    const listRef = useRef<HTMLDivElement>(null!)
    const showBtnRef = useRef<HTMLDivElement>(null!)
    const [show, setShow] = useState(false)
    const [animate, setAnimate] = useState(false)
    const { render, setRender } = useRender()
    const [lastRender, setLastRender] = useState(0)

    useEffect(() =>{
        if(animate) {
            reveresedVanishingAnimation(listRef.current, 0, 0.1)
            vanishingAnimation(showBtnRef.current, 0)
            reveresedVanishingAnimation(pointRef.current, 0)
        } else {
            vanishingAnimation(listRef.current, 0, 0.1)
            vanishingAnimation(pointRef.current, 0)
        }
    }, [animate])

    useEffect(() =>{
        const tl = gsap.timeline()

        tl.to(pointRef.current, {
            y: `-=${(lastRender-render)*50}`
        })
        setLastRender(render)
    }, [render])

    const handleClick = () =>{ 
        setAnimate(!animate);
        if(show) {
            setShow(!show);
        } else {
            setTimeout(() => {
                setShow(!show);
            }, 900);
        }
    }

    return (
        <div className='navbar'>
            {show 
                ? <div ref={showBtnRef}><CiMenuFries className="menu-btn" onClick={handleClick}/></div>
                : <div className='navbar-list' ref={listRef}>
                    <IoIosClose  className="close-btn" onClick={handleClick}/>
                    {SUBSITES.map((subsite, i) => 
                        <div 
                            className={`navbar-el ${SUBSITES[render].name == subsite.name ? "navbar-el-active" : ""}`} 
                            onClick={() => setRender(i)}
                        >{subsite.name}
                        </div>
                    )}
            </div>}
            <div ref={pointRef} className="point">☉</div>
        </div>
    )
}

export default Navbar