import Map from "../components/Map";
import MusicCareer from "../components/MusicCareer";
import Politics from "../components/Politics";
import { Subsite } from "../types/Subsite";

export const SUBSITES: Subsite[] = [
    {
        name: "Oś Czasu",
        el: <MusicCareer />
    },
    {
        name: "Działalność Polityczna",
        el: <Politics />
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
        name: "Kariera Muzyczna",
        el: <></>
    },
]