

export default class NagyKep{
    #obj = {}
    #index = 0;
    constructor(obj={foto: "",nev: ""},index,szuloElem){
        this.#obj = obj;
        this.szuloElem = szuloElem;
        this.#index = index;
        this.megjelenit();
    }

 

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