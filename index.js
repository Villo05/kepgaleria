import { KEPLISTA } from "./adat.js";
import Kep from "./Kep.js";
import Kepek from "./Kepek.js";
import NagyKep from "./NagyKep.js";

const szuloElem = document.querySelector(".tarolo");
const nagyKepSzElem = document.querySelector(".nagyKep")

new Kepek(KEPLISTA, szuloElem);

let index = 0;
const nagyKep = new NagyKep(KEPLISTA[index], 0, nagyKepSzElem, true)
window.addEventListener("kivalaszt", (event)=>{
    index = event.detail;
    nagyKepSzElem.innerHTML = "";
    const foKep = new Kep(KEPLISTA[index], index, nagyKepSzElem);
})

