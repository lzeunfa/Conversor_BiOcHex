let numInput = document.getElementById("decimal"); // input decimal como string

let inputBi = document.getElementById("binario");

function converter() {
    let numDecimal = parseInt(numInput.value); // transforma o input em número
    let arrayBi = [];

    while (numDecimal > 0) {
        let resto = numDecimal % 2;
        arrayBi.unshift(resto); // adiciona o dígito mais significativo na frente
        numDecimal = Math.floor(numDecimal / 2); // divide o número por 8 e arredonda para dnv calcular o resto
    }

    let numeroBi = arrayBi.join(""); // junta os dígitos para transformar em número binário

    inputBi.value = numeroBi;//mostra o resultado no input co m o seu value recebendo o resultado
}