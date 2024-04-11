import Map from "../components/Map";
import { Subsite } from "../types/Subsite";
import Timeline from "../components/Timeline";
import MusicCareer from "../components/MusicCareer";
import Sources from "../components/Sources";
import PoliticalActivity from "../components/PoliticalActivity";

export const SUBSITES: Subsite[] = [
    {
        name: "Oś Czasu",
        el: <Timeline />
    },
    {
        name: "Kariera Muzyczna",
        el: <MusicCareer />
    },
    {
        name: "Mapa",
        el: <Map />
    },
    {
        name: "Działalność Polityczna",
        el: <PoliticalActivity />
    },
    {
        name: "Ciekawostki",
        el: <div>Test</div>
    },
    {
        name: "Autorytet Moralny",
        el: <div>Test</div>
    },
    {
        name: "AI",
        el: <div>Test</div>
    },
    {
        name: "Źródła",
        el: <Sources />
    }
]