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
    rotateTo: Math.PI * 0.5 
}

const DEUSTH: Location = {
    name: "Rzesza Niemiecka",
    text: 'W Berlinie Ignacy Jan Paderewski pobierał nauki głównie w dziedzinie kompozycji, najpierw u Friedricha Kiela, następnie u jego ucznia – Heinricha Urbana. W wyniku konfliktu z Hermannem Wolffem – znanym niemieckim impresario – Paderewski nie mógł odnieść sukcesu w Berlinie. Paderewski niejednokrotnie grywał w wielu miastach w Niemczech. W Królewskiej Operze w Dreźnie w 1901r. odbyła się prapremiera opery Paderewskiego „Manru”. ',
    position: new Vector3(0.25, 0.49, 1.9),
    rotateTo: -0.1
}

const UK: Location = {
    name: "Wielka Brytania",
    text: "Paderewski po kilku udanych sezonach w Paryżu zadebiutował w 1890r. w Londynie. W wyniku nienajlepszych działań promocyjnych początki były trudne, jednak Paderewski już po trzecim koncercie zdobył uznanie Londyńczyków. Polski pianista występował w wielu miastach, jak i na prowincji Zjednoczonego Królestwa. W 1891r. Paderewski na życzenie Królowej Wiktorii wystąpił przed nią w Windsorze.",
    position: new Vector3(-0.05, 0.6, 1.9),
    rotateTo: 0.1
}

const SWITZERLAND: Location = {
    name: "Szwajcaria",
    text: "Pałacyk położony w Szwajcarii w Riond-Bosson nieopodal Morges stał się dla Padarewskiego domem. Usytuowany był nad Jeziorem Genewskim, rozpościerał się z niego przepiękny widok na Mont-Blanc. W tym miejscu artysta regenerował swoje siły. W 1914r. w spowitej niepewnością atmosferze w Riond-Bosson Paderewski świętował wraz z gośćmi swoje imieniny – uroczystość zakończyła się gdy do zgromadzonych nadeszła wieść o wybuchu I Wojny Światowej. Paderewski ostatni raz był w Szwajcarii w 1940r..",
    position: new Vector3(0.15, 0.35, 2),
    rotateTo: 0
}

const RUSSIA: Location = {
    name: "Rosja",
    text: "Pierwsze tournée po Rosji Paderewski odbył w 1899r.. Słuchaczom podobały się występy polskiego pianisty i wyrażali się o nim z uznaniem, jednak instytucje muzyczne odnosiły się do niego wrogo. Źródłem nieprzyjaznego stosunku do Paderewskiego mógł być fakt, że był Polakiem. Ponadto nie chciano by jakikolwiek artysta zbliżył się sławą do Antoniego Rubinsteina, który otoczony był w Rosji swoistym kultem. Tournée po Rosji obfitowało w nieprzyjemne dla artysty zdarzenia.",
    position: new Vector3(1.05, 0.8, 1.55),
    rotateTo: -0.6
}


const AUSTRIA: Location = {
    name: "Austro-Węgry",
    text: "W 1904r. Paderewski dopłynął do Melbourne po 35 dniach podróży z Marsylii. Wystąpił w wielu miastach, w tym z orkiestrą w Sydney. Paderewski szczególnie zainteresował się plemieniem Maorysów zamieszkujących Nową Zelandię. Zajmowały go ich zwyczaje i życie codzienne w środowisku, w którym otaczały ich liczne gorące gejzery i inne elementy przyrody niespotykane pospolicie w Europie. Pianista był ogromnie zadowolony z pobytu w Nowej Zelandii. Do Australii Paderewski powrócił w 1927r.. Według artysty, tamten rejon świata zmienił się na niekorzyść.",
    position: new Vector3(0.2, 0.4, 2),
    rotateTo: -0.15
}

const AFRICA: Location = {
    name: "Afryka Południowa",
    text: "Na początku 1912r. Paderewski udał się do Afryki Południowej. Podróż określił jako nieprzyjemną. Zastane warunki nie odpowiadały artyście, a na miejscu spotkały go niemiłe i nieprawdopodobne sytuacje. Na artyście wymuszono danie autografu przed koncertem – czego nie chciał robić w trosce o palce, miejscowi ortodoksi zagłuszali jego koncert w czasie Wielkiego Tygodnia, a w prasie wyrażono się o nim jako o zuchwałym, bo bilet na jego koncert kosztował jedną gwineę.",
    position: new Vector3(0.9, -1.2, 1.3),
    rotateTo: -0.3
}

const SOUTH_AMERICA: Location = {
    name: "Ameryka Południowa",
    text: "W 1911r. z konieczności zarobienia pieniędzy Paderewski odbył wielkie tournée po Ameryce Południowej. Artysta występował w Rio de Janeiro, Sao Paulo i Buenos Aires. Zastane warunki bytowe nie zadowalały artysty – wyjątkiem było Beunos Aires, a gra była dla niego męczarnią. Te negatywne opinie wynikały po części z niechęci do gry, która wówczas ogarnęła pianistę.",
    position: new Vector3(-1.75, -0.5, 0.8),
    rotateTo: Math.PI * 0.44
}

export const HOLANDIA: Location = {
    name: "Holandia",
    text: ' Paderewski odbył osobliwe tournee po Holadnii, na które składały się koncerty m.in. w Hadze i Arnhem. Wszystko zaczęło się w 1889r. w Paryżu, gdzie pianistę odwiedził pewien dżentelmen, który zaproponował mu trasę koncertową na korzystnych warunkach. Paderewski miał być wspierany jeszcze przez dwóch innych artystów. Wbrew zapewnieniom impresaria frekwencja na koncertach była daleka od satyfakcjonującej. Paderewski nie zarobił ani grosza, a ponadto, po każdym koncercie pokrywał rachunki za znakomite kolacje dla wszystkich sześciu uczestników trasy koncertowej. Po tym, gdy uczynił ten szlachetny gest po pierwszym koncercie, jego towarzysze podróży uznali za naturalne, że będzie robił to po każdym kolejnym wsytępie. Przeznaczył na ten cel kilka tysięcy franków.',
    position: new Vector3(0.1, 0.49, 2),
    rotateTo: 0
}

export const AUSTRALIA: Location = {
    name: "Australia i Nowa Zelandia:",
    text: 'W 1904r. Paderewski dopłynął do Melbourne po 35 dniach podróży z Marsylii. Wystąpił w wielu miastach, w tym z orkiestrą w Sydney. Paderewski szczególnie zainteresował się plemieniem Maorysów zamieszkujących Nową Zelandię. Zajmowały go ich zwyczaje i życie codzienne w środowisku, w którym otaczały ich liczne gorące gejzery i inne elementy przyrody niespotykane pospolicie w Europie. Pianista był ogromnie zadowolony z pobytu w Nowej Zelandii. Do Australii Paderewski powrócił w 1927r.. Według artysty, tamten rejon świata zmienił się na niekorzyść.',
    position: new Vector3(1.3, 0, -1.5),
    rotateTo: -2.3
}

export const LOCATIONS: Location[] = [AMERICA, AUSTRALIA, FRENCH, DEUSTH, RUSSIA, AUSTRIA, SOUTH_AMERICA, AFRICA, SWITZERLAND, UK, HOLANDIA]