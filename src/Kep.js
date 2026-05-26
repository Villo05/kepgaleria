

export default class Kep{
    #obj = {}
    #index = 0;
    constructor(obj={foto: "",nev: ""},index,szuloElem){
        this.#obj = obj;
        this.szuloElem = szuloElem;
        this.#index = index;
        this.megjelenit();
        this.esemenyKezelo();
    }

    esemenyKezelo(){
        this.kepElem = document.querySelector(".kartya:last-child");
        console.log(this.kepElem);
        this.kepElem.addEventListener("click", (event) => {
            this.sajatEsemeny();
        })
    }

    megjelenit(){
        let kod  =`
            <div class="kartya">
                <img src="${this.#obj.foto}" alt="${this.#obj.nev} ">
            </div>
            `
        
        this.szuloElem.insertAdjacentHTML("beforeend", kod);
    }

    sajatEsemeny(){
        const e = new CustomEvent("kivalaszt", {detail:this.#index});
        window.dispatchEvent(e);
    }
}