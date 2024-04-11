import { INFORMATIONAL_SOURCES, PHOTOGRAPHIC_SOURCES } from "../../const/sources"
import "./index.css"

const Sources = () =>{
    return (
        <div className="sources-container">
            <div className="blob" />
            <div className="sources-content-box">
                <header className="sources-content-header">Fotograficzne</header>
                <div className="sources-content">{PHOTOGRAPHIC_SOURCES.map(source => <div className="source">{source}</div>)}</div>
                <header className="sources-content-header">Informacyjne</header>
                <div className="sources-content">{INFORMATIONAL_SOURCES.map(source => <div className="source">{source}</div>)}</div>
            </div>
        </div>
    )
}

export default Sources