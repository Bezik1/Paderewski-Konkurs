import Map from "../components/Map";
import MusicCareer from "../components/MusicCareer";
import { Subsite } from "../types/Subsite";

export const SUBSITES: Subsite[] = [
    {
        name: "Oś Czasu",
        el: <MusicCareer />
    },
    {
        name: "Mapa",
        el: <Map />
    },
    {
        name: "AI",
        el: <></>
    },
    {
        name: "Ciekawostki",
        el: <></>
    },
    {
        name: "Autorytet Moralny",
        el: <></>
    },
    {
        name: "Działalność Polityczna",
        el: <></>
    },
    {
        name: "Kariera Muzyczna",
        el: <></>
    },
]