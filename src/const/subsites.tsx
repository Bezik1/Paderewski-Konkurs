import Map from "../components/Map";
import { Subsite } from "../types/Subsite";
import Timeline from "../components/Timeline";
import MusicCareer from "../components/MusicCareer";

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
]