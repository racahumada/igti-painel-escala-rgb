window.addEventListener('load', start);

function start() {
    console.log('Página Carregada!');
    event.preventDefault();

    inputValues();
}

function inputValues() {

    function updateValue(event) {
        var inputOp = event.target.id;
        if(inputOp === "inputR") {
            valorR.value = event.target.value;
        } else if(inputOp === "inputG") {
            valorG.value = event.target.value;
        } else if(inputOp === "inputB") {
            valorB.value = event.target.value;
        }

        divCorFinal.style.backgroundColor = `rgb(${valorR.value}, ${valorG.value}, ${valorB.value})`;

    } 


    //Recuperando Ranges
    var inputR = document.querySelector("#inputR");
    var inputG = document.querySelector("#inputG");
    var inputB = document.querySelector("#inputB");

    //Recuperando Input de Textos
    var valorR = document.querySelector("#valorR");
    var valorG = document.querySelector("#valorG");
    var valorB = document.querySelector("#valorB");

    //Recuperando DIV
    var divCorFinal = document.querySelector("#corFinal");

    valorR.value = inputR.value;
    valorG.value = inputG.value;
    valorB.value = inputB.value;

    //Eventos de Alterar cores
    inputR.addEventListener('input', updateValue);
    inputG.addEventListener('input', updateValue);
    inputB.addEventListener('input', updateValue);

    // Estão comentados porque os eventos acima usavam mousemove
    // inputR.addEventListener('keydown', updateValue);
    // inputG.addEventListener('keydown', updateValue);
    // inputB.addEventListener('keydown', updateValue);

    //Carregando cor inicial na DIV de COR
    divCorFinal.style.backgroundColor = `rgb(${inputR.value},${inputG.value},${inputB.value})`;

}

