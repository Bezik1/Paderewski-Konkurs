import { Vector3 } from "three";
import { Location } from "../types/Location";

const FRENCH: Location = {
    name: "Francja",
    text: 'W biografii Ignacego Jana Paderewskiego Francja widnieje wielokrotnie. W 1888r. Paryżu, w Sali Erarda, młody pianista zagrał recital, który rozpoczął jego światową karierę. Paderewski przez pewien okres mieszkał w stolicy Francji i grywał tam wielokrotnie. W 1919r.   Paderewski uczestniczył w Konferencji pokojowej w Paryżu. We Francji podpisał traktat wersalski. W 1940r. przemawiał w Paryżu podczas inauguracji Rady Narodowej RP, której był przewodniczącym.',
    position: new Vector3(0.05, 0.4, 2),
    rotateTo: 0
}

const AMERICA: Location = {
    name: "USA",
    text: 'Ignacy Jan Paderewski po raz pierwszy przybył do Stanów Zjednoczonych w 1891r.. Odbył wówczas prawdopodobnie najbardziej wycieńczające tournée w karierze – zagrał 109 koncertów i recitali w 130 dni. Do 1939r. zagrał w USA 19 tras koncertowych. Paderewski szczególnie cenił ten kraj i zamieszkujących go ludzi, dostrzegał w nim wiele inicjatyw i działań podejmowanych dla rozwoju kultury i nauki.  Pianista przeznaczył spore nakłady finansowe i odbył liczne koncerty dobroczynne na rzecz m. in. budowy pomników, pomocy muzykom i na inne szczytne cele w tym kraju. Dzięki swojej pozycji w USA i podjętym działaniom Paderewski przyczynił się wielce do uwzględnienia odbudowy niepodległej polski w słynnych 14. punktach prezydenta Wilsona. Pianista w czasie obu wojen światowych, będąc w Stanach Zjednoczonych, wspierał rodaków podbudowując ich na duchu i podejmując liczne działania ukierunkowane na niesienie im pomocy. Paderewski zmarł w Nowym Jorku w 1941r.. Wielki artysta i mąż stanu spoczywał w USA aż do 1992r..',
    position: new Vector3(-1.65, 1.1, 0.4),
    rotateTo: Math.PI * 0.44
}

const DEUSTH: Location = {
    name: "Rzesza Niemiecka",
    text: 'W Berlinie Ignacy Jan Paderewski pobierał nauki głównie w dziedzinie kompozycji, najpierw u Friedricha Kiela, następnie u jego ucznia – Heinricha Urbana. W wyniku konfliktu z Hermannem Wolffem – znanym niemieckim impresario – Paderewski nie mógł odnieść sukcesu w Berlinie. Paderewski niejednokrotnie grywał w wielu miastach w Niemczech. W Królewskiej Operze w Dreźnie w 1901r. odbyła się prapremiera opery Paderewskiego „Manru”. ',
    position: new Vector3(0.25, 0.49, 2),
    rotateTo: -0.1
}

export const HOLANDIA: Location = {
    name: "Holandia",
    text: ' Paderewski odbył osobliwe tournee po Holadnii, na które składały się koncerty m.in. w Hadze i Arnhem. Wszystko zaczęło się w 1889r. w Paryżu, gdzie pianistę odwiedził pewien dżentelmen, który zaproponował mu trasę koncertową na korzystnych warunkach. Paderewski miał być wspierany jeszcze przez dwóch innych artystów. Wbrew zapewnieniom impresaria frekwencja na koncertach była daleka od satyfakcjonującej. Paderewski nie zarobił ani grosza, a ponadto, po każdym koncercie pokrywał rachunki za znakomite kolacje dla wszystkich sześciu uczestników trasy koncertowej. Po tym, gdy uczynił ten szlachetny gest po pierwszym koncercie, jego towarzysze podróży uznali za naturalne, że będzie robił to po każdym kolejnym wsytępie. Przeznaczył na ten cel kilka tysięcy franków.',
    position: new Vector3(0.1, 0.49, 2),
    rotateTo: 0
}

export const LOCATIONS: Location[] = [FRENCH, AMERICA, DEUSTH, HOLANDIA]