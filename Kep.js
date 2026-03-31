

export default class Kep{
    #obj = {}
    #index = 0;
    constructor(obj={foto,nev},index,szuloElem){
        this.#obj = obj;
        this.szuloElem = szuloElem;
        this.#index = index;
        this.megjelenit();
        this.esemenyKezelo();
    }

    esemenyKezelo(){
        this.buttonElem = document.querySelector(".kartya:last-child button");
        console.log(this.buttonElem);
        this.buttonElem.addEventListener("click", (event) => {
            console.log(event.target);
            console.log(this);
            this.sajatEsemeny();
        })
    }

    megjelenit(){
        let kod  =`
            <div class="kartya">
                <img src="${this.#obj.foto}" alt="${this.#obj.nev} ">
                <p>${this.#obj.nev}</p>
                <button>Tetszik ${this.#obj.nev}</button>
            </div>
            `
    this.szuloElem.insertAdjacentHTML("beforeend", kod);
    }

    sajatEsemeny(){
        console.log("sajatesemeny");
        const e = new CustomEvent("tetszik", {detail:this.#index})
        window.dispatchEvent(e);
    }
    
}