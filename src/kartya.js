export function megjelenit(obj = {foto,nev},szuloElem){
    let kod  =`
            <div class="kartya">
                <img src="${obj.foto}" alt="${obj.nev} ">
                <p>${obj.nev}</p>
            </div>
            `
    szuloElem.innerHTML = kod;
    
}