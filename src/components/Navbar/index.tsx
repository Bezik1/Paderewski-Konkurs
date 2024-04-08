import { CiMenuFries } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import './index.css'
import { useEffect, useRef, useState } from "react";;
import { reveresedVanishingAnimation, vanishingAnimation } from "../../animations/Vanishing";
import { useRender } from "../../contexts/RenderContext";
import { SUBSITES } from "../../const/subsites";

const Navbar = () =>{
    const listRef = useRef<HTMLDivElement>(null!)
    const showBtnRef = useRef<HTMLDivElement>(null!)
    const [show, setShow] = useState(true)
    const [animate, setAnimate] = useState(true)
    const { render, setRender } = useRender()

    useEffect(() =>{
        if(animate) {
            reveresedVanishingAnimation(listRef.current, 0, 0.1)
            vanishingAnimation(showBtnRef.current, 0)
        } else {
            vanishingAnimation(listRef.current, 0, 0.1)
        }
    }, [animate, show])

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
                    {SUBSITES.map(subsite => 
                        <div 
                            className={`navbar-el ${render.name == subsite.name ? "navbar-el-active" : ""}`} 
                            onClick={() => setRender(subsite)}
                        >{subsite.name}
                        </div>
                    )}
                    <IoIosClose  className="close-btn" onClick={handleClick}/> 
            </div>}
        </div>
    )
}

export default Navbar