import { KEPLISTA } from "./adat.js";
import Kepek from "./Kepek.js";

const szuloElem = document.querySelector(".tarolo");
const tetszikElem = document.querySelector(".tetszik");


new Kepek(KEPLISTA, szuloElem);

const TETSZIKLISTA = [];
window.addEventListener("tetszik", function(event){
    console.log(event.detail);
    TETSZIKLISTA.push(KEPLISTA[event.detail]);
    new Kepek(TETSZIKLISTA, tetszikElem)
})
