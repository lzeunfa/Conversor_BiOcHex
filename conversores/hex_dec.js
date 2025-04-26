let hexInput = document.getElementById("hexadecimal"); // recebe o input

let casasHex = 0;
let posicaoAnalisada = 0;

let numeroDecimal = document.getElementById("decimal");//recebe o input

//funcao para realizar a conversao no onclick
function converter(){
    let hexadecimal = hexInput.value; // atualiza o valor dentro da função
    numeroDecimal.value = "";

    let convertendo =0;//reinicia com valor sendo 0

    casasHex = hexadecimal.length-1;//recebe a quantidade de casas do octal

    for(let i=0; i<=hexadecimal.length-1;i++){
        posicaoAnalisada = casasHex;//var pra analisar a posicao do numero
        

        convertendo += hexadecimal[posicaoAnalisada] * (16**i);//calculo do numero decimal

        casasHex --;//diminui 1 do valor de casas para analisar as demais casas
    }

    numeroDecimal.value = convertendo;
}