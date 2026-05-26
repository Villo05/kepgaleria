/**
 * Egy egyedi képkártya megjelenítéséért és kattintási eseményéért felelős osztály.
 */
export default class Kep{
    /** 
     * A kép adatait (foto, nev) tároló privát objektum.
     * @type {Object} 
     */
    #obj = {}
    /** 
     * A kép egyedi azonosító indexe a listában.
     * @type {number} 
     */
    #index = 0;

    /**
     * Létrehoz egy Kep példányt.
     * @param {Object} [obj={foto: "", nev: ""}] - A kép objektum.
     * @param {string} obj.foto - A kép elérési útja.
     * @param {string} obj.nev - A kép alternatív szövege/neve.
     * @param {number} index - A kép indexe.
     * @param {HTMLElement} szuloElem - A DOM elem, amibe a képkártya beágyazásra kerül.
     */
    constructor(obj={foto: "",nev: ""},index,szuloElem){
        this.#obj = obj;
        this.szuloElem = szuloElem;
        this.#index = index;
        this.megjelenit();
        this.esemenyKezelo();
    }

    /**
     * Megkeresi az utoljára beszúrt kép elemet és hozzáadja a kattintás figyelőt.
     * @returns {void}
     */
    esemenyKezelo(){
        this.kepElem = document.querySelector(".kartya:last-child");
        console.log(this.kepElem);
        this.kepElem.addEventListener("click", (event) => {
            this.sajatEsemeny();
        })
    }

    /**
     * Legenerálja a kártya HTML kódját és beszúrja a szülő elem végére.
     * @returns {void}
     */
    megjelenit(){
        let kod  =`
            <div class="kartya">
                <img src="${this.#obj.foto}" alt="${this.#obj.nev} ">
            </div>
            `
        
        this.szuloElem.insertAdjacentHTML("beforeend", kod);
    }

    /**
     * Létrehoz és kivált egy egyedi 'kivalaszt' eseményt a window objektumon, 
     * átadva a kép aktuális indexét a detail mezőben.
     * @returns {void}
     */
    sajatEsemeny(){
        const e = new CustomEvent("kivalaszt", {detail:this.#index});
        window.dispatchEvent(e);
    }
}
