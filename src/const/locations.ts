import { Vector3 } from "three";
import { Location } from "../types/Location";

export const STRASBURG: Location = {
    name: "Strasburg",
    text: 'Paderewski początkowo żyjąc w biedzie poznał wiążące się z nią troski. Pracując jako pedagog w konserwatorium w Strasburgu przez wiele tygodni odkładał pieniądze, by pozwolić sobie na wyjazd do Paryża i wysłuchanie koncertu Rubinsteina, który to wcześniej podczas serdecznego spotkania zaprosił go do przybycia na jeden ze swoich występów w stolicy Francji. Po przybyciu na miejsce, podczas rozmowy z Rubinsteinem, Paderewski dowiedział się, że pianista nie zajmuje się sprzedażą biletów. Wszystkie wejściówki zostały już dawno wyprzedane, w sali Erarda mogło zmieścić się jedynie około 700 osób. Mimo usilnych starań i licznych wyrzeczeń młodemu muzykowi nie udało się usłyszeć gry Rubinsteina. Nie usłyszał jej już nigdy.„Człowiekowi żyjącemu w dobrobycie i zbytku jest niezmiernie trudno zrozumieć, że ktoś inny może cierpieć biedę. Wymaga to dużego zasobu wyboraźni, i lepiej by się działo, gdyby ludzie częściej chceili się na nią zdobyć.”Paderewski nigdy nie odmówił nikomu, kto pragnął słuchać jego gry. Nawet gdy bilety nie był już dostępne, zawsze starał się zapewnić chętnemu słuchaczowi jakieś miesjce, ostatecznie nawet dostawiając stołek lub krzesło za estradą.',
    position: new Vector3(0.1, 0.35, 2),
    rotateTo: 0
}

const AUSTRALIA: Location = {
    name: "Australia",
    text: 'Test',
    position: new Vector3(1.4, 0.1, -1.4),
    rotateTo: Math.PI * 1.25
}

const AMERICA: Location = {
    name: "America",
    text: 'Test',
    position: new Vector3(-1.65, 1.1, 0.4),
    rotateTo: Math.PI * 0.44
}

const RUSSIA: Location = {
    name: "Russia",
    text: 'Test',
    position: new Vector3(1.1, 1.1, 1.3),
    rotateTo: Math.PI * (-0.2)
}

export const LOCATIONS: Location[] = [AUSTRALIA, AMERICA, RUSSIA, STRASBURG]