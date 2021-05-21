import { Plank } from "./plank.model";

const JsonPlanken = [
    {
        titel: 'Hart snijplank',
        lengte: 20,
        breedte: 18,
        dikte: 1.5,
        tags: ["Ik hou van je ",  "handgemaakte gift", "cadeau idee", "cadeau voor valentijn", "keuken"],
        materiaal: "hout",
        prijs: 16.95,
        aantalInStock: 130,
        beschrijving:"hallo"
    },
    {
        titel: 'Varken snijplank',
        lengte: 20,
        breedte: 18,
        dikte: 1.5,
        tags: [ "handgemaakte gift", "cadeau idee", "varken", "boerderij", "keuken"],
        materiaal: "hout",
        prijs: 18.95,
        aantalInStock: 130,
        beschrijving:"hallo"
    },
    {
        titel: 'Peer snijplank',
        lengte: 20,
        breedte: 18,
        dikte: 1.5,
        tags: ["fruit ", "handgemaakte gift", "cadeau idee", "appel", "keuken"],
        materiaal: "hout",
        prijs: 12.95,
        aantalInStock: 130,
        beschrijving:"hallo"
    }
];
export const PLANKEN:  Plank[] = JsonPlanken.map(Plank.fromJSON)