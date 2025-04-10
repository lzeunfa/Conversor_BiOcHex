let binarioInput = document.getElementById("binario"); // recebe o input
let binario = binarioInput.value; // recebe o valor digitado no input

let casasBi = 0;
let posicaoDo1 = 0;
let posicaoReal = 0;


let numeroDecimal = document.getElementById("decimal");//recebe o input

function converter(){
    binario = binarioInput.value; // atualiza o valor dentro da função
    numeroDecimal.value = "";
    let convertendo = 0;


    while(binario.indexOf("1") !== -1){
        casasBi = binario.length; //saber quantos números tem o n binario
        posicaoDo1 = binario.indexOf("1");
        posicaoReal = casasBi - posicaoDo1 - 1; //recebe a posicao da esquerda pra direito do 1

        convertendo += 2 ** posicaoReal; //faz o calculo de 2 elevado a posicao real q se encontra (binarios tem base 2 e da direita pra esquerda vai de ...2^3 2^2 2^1 0)

        // Substitui o '1' já usado por '0' para evitar contar duas vezes
        binario = binario.substring(0, posicaoDo1) + "0" + binario.substring(posicaoDo1 + 1);
    }
    let convertido = convertendo;
    numeroDecimal.value = convertido;
}