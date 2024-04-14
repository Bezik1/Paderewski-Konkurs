import EMPTY_BACKGROUND from "../../assets/ciekawostki_bg.png"
import { TRIVIAS } from "../../const/trivias"
import "./index.css"

const Trivias = () =>{
    return (
        <div className="trivias-container">
            <img src={EMPTY_BACKGROUND} className="background" />
            <div className="trivias-background" />
            <header className="trivias-header">Ciekawostki</header>
            <div className="trivias-box">
                {TRIVIAS.map(trivia =>(
                    <div className="trivia-column">{trivia}</div>
                ))}
            </div>
        </div>
    )
}

export default Trivias