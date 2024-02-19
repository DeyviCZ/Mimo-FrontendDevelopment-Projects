
function convert(){
    let valorInput = document.getElementById("valorInput");
    let unidadSelect = document.getElementById("unidadSelect");
    let result = document.getElementById("result");

    let valor = valorInput.value;
    let unidad = unidadSelect.value;

    if(valor === "" || valor.trim() === ""){
        return alert('Insert Number to Convert')
    } else{
        if(unidad === "miles"){
            let kilometers = valor / 0.621371;
            result.innerText = `Result: ${kilometers.toFixed(3)}`;
        } else if(unidad === "kilometers"){
            let miles = valor * 0.621371;
            result.innerHTML = `Result: ${miles.toFixed(3)}`;
        }
    }
}
