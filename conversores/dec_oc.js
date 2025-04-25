let numInput = document.getElementById("decimal"); // input decimal como string

let inputOc = document.getElementById("octal");

function converter() {
    let numDecimal = parseInt(numInput.value); // transforma o input em número
    let arrayOc = [];

    while (numDecimal > 0) {
        let resto = numDecimal % 8;
        arrayOc.unshift(resto); // adiciona o dígito mais significativo na frente
        numDecimal = Math.floor(numDecimal / 8); // divide o número por 8 e arredonda para dnv calcular o resto
    }

    let numeroOc = arrayOc.join(""); // junta os dígitos para transformar em número binário

    inputOc.value = numeroOc;//mostra o resultado no input co m o seu value recebendo o resultado
}
