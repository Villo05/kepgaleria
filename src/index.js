import { KEPLISTA } from "./adat.js";
import Kep from "./Kep.js";
import Kepek from "./Kepek.js";
import NagyKep from "./NagyKep.js";

/** 
 * A kis képek galériájának befogadó DOM eleme.
 * @type {HTMLElement} 
 */
const szuloElem = document.querySelector(".tarolo");

/** 
 * A kiemelt nagy kép megjelenítésének befogadó DOM eleme.
 * @type {HTMLElement} 
 */
const nagyKepSzElem = document.querySelector(".nagyKep")

// A kis képekből álló galéria inicializálása és kirajzolása
new Kepek(KEPLISTA, szuloElem);

/** 
 * Az aktuálisan kiválasztott vagy megjelenített kép indexe.
 * @type {number} 
 */
let index = 0;

/** 
 * A kezdeti nagy kép példány létrehozása a lista első elemével.
 * @type {NagyKep} 
 */
const nagyKep = new NagyKep(KEPLISTA[index], 0, nagyKepSzElem, true)

/**
 * Globális esemenykezelő a kis képekre való kattintás lekezelésére.
 * A 'kivalaszt' esemény hatására frissíti az indexet, kiüríti a nagy kép tárolóját,
 * majd megjeleníti az új képet egy Kep példányként.
 * 
 * @param {CustomEvent} event - A Kep osztály által kiváltott egyedi esemény.
 * @param {number} event.detail - A kiválasztott kép egyedi indexe.
 */
window.addEventListener("kivalaszt", (event)=>{
    index = event.detail;
    nagyKepSzElem.innerHTML = "";
    
    /** 
     * Az új kiemelt képként megjelenő Kep példány.
     * @type {Kep} 
     */
    const foKep = new Kep(KEPLISTA[index], index, nagyKepSzElem);
})
