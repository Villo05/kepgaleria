/**
 * Egy képet és annak nevét tartalmazó kártya HTML struktúráját generálja le,
 * majd felülírja vele a megadott szülőelem tartalmát.
 * 
 * @param {Object} [obj={foto: undefined, nev: undefined}] - A megjelenítendő kép adatobjektuma.
 * @param {string} obj.foto - A kép fájl elérési útja vagy URL-je.
 * @param {string} obj.nev - A kép neve és alternatív szövege.
 * @param {HTMLElement} szuloElem - Az a DOM elem, amelynek a belső HTML tartalmát lecseréli a kártyára.
 * @returns {void}
 */
export function megjelenit(obj = {foto,nev},szuloElem){
    let kod  =`
            <div class="kartya">
                <img src="${obj.foto}" alt="${obj.nev} ">
                <p>${obj.nev}</p>
            </div>
            `
    szuloElem.innerHTML = kod;
    
}

