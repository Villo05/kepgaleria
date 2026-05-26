/**
 * A kiemelt nagy kép és a hozzá tartozó szöveges leírás megjelenítéséért felelős osztály.
 */
export default class NagyKep{
    /** 
     * A nagy kép adatait (foto, nev) tároló privát objektum.
     * @type {Object} 
     */
    #obj = {}
    /** 
     * A nagy kép egyedi azonosító indexe a listában.
     * @type {number} 
     */
    #index = 0;

    /**
     * Létrehoz egy NagyKep példányt.
     * @param {Object} [obj={foto: "", nev: ""}] - A kép adatobjektuma.
     * @param {string} obj.foto - A kép elérési útja.
     * @param {string} obj.nev - A kép neve és alternatív szövege.
     * @param {number} index - A kép indexe a listában.
     * @param {HTMLElement} szuloElem - A DOM elem, amibe a nagy kép és a felirat beágyazásra kerül.
     */
    constructor(obj={foto: "",nev: ""},index,szuloElem){
        this.#obj = obj;
        this.szuloElem = szuloElem;
        this.#index = index;
        this.megjelenit();
    }

    /**
     * Legenerálja a nagy kép kártyájának és a hozzá tartozó névnek a HTML kódját,
     * majd beszúrja a szülő elem végére.
     * @returns {void}
     */
    megjelenit(){
        let kod  =`
            <div class="kartya">
                <img src="${this.#obj.foto}" alt="${this.#obj.nev} ">
                
            </div>
            `
        kod += `<p>${this.#obj.nev}</p>`
        this.szuloElem.insertAdjacentHTML("beforeend", kod);
    }
}
