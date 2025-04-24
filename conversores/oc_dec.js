let octalInput = document.getElementById("octal"); // recebe o input
let octal = octalInput.value; // recebe o valor digitado no input

let casasOc = 0;
let posicaoAnalisada = 0;

let numeroDecimal = document.getElementById("decimal");//recebe o input

//funcao para realizar a conversao no onclick
function converter(){
    let octal = octalInput.value; // atualiza o valor dentro da função
    numeroDecimal.value = "";

    let convertendo =0;//reinicia com valor sendo 0

    casasOc = octal.length-1;//recebe a quantidade de casas do octal

    for(let i=0; i<=octal.length-1;i++){
        posicaoAnalisada = casasOc;//var pra analisar a posicao do numero
        

        convertendo += octal[posicaoAnalisada] * (8**i);//calculo do numero decimal

        casasOc --;//diminui 1 do valor de casas para analisar as demais casas
    }

    numeroDecimal.value = convertendo;
}