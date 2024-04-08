    import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
    import './index.css'
    import { useRender } from "../../contexts/RenderContext";
    import { SUBSITES } from "../../const/subsites";
import { ARROWS } from "../../const/arrows";

const NextArrow = ({ arrow } : { arrow: string }) =>{
    const { render, setRender } = useRender()

    switch(arrow)
    {
        case "up":
            return  <IoIosArrowDropup
                        className={`next-arrow ${arrow}`}
                        onClick={() => setRender((render+ARROWS[arrow])%SUBSITES.length)}
                    />
        case "down":
            return  <IoIosArrowDropdown
                        className={`next-arrow ${arrow}`}
                        onClick={() => setRender((render+ARROWS[arrow])%SUBSITES.length)}
                    />
        default:
            return <></>
    }
}

    export default NextArrow