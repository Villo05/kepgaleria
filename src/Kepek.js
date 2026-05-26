import Kep from "./Kep.js";

/**
 * Képgyűjtemény kezeléséért és a galéria legenerálásáért felelős osztály.
 */
export default class Kepek{
    /** 
     * A képek adatobjektumait tartalmazó privát lista.
     * @type {Array<Object>} 
     */
    #lista = [];

    /**
     * Létrehoz egy Kepek példányt, kiüríti a szülő elemet, majd kirajzolja a galériát.
     * @param {Array<Object>} lista - A megjelenítendő képek adatainak tömbje.
     * @param {HTMLElement} szuloElem - A DOM elem, amely a galériát befogadja.
     */
    constructor(lista, szuloElem){
        this.#lista = lista;
        this.szuloElem = szuloElem;
        this.szuloElem.innerHTML = "";
        this.megjelenit();
    }

    /**
     * Végigiterál a listán és minden adathoz létrehoz egy új Kep példányt.
     * @returns {void}
     */
    megjelenit(){
        this.#lista.forEach((elem, index) => {
            new Kep(elem, index, this.szuloElem);
        })
    }
}
