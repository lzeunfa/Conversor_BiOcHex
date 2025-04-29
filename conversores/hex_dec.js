let hexInput = document.getElementById("hexadecimal"); // recebe o input

let casasHex = 0;
let posicaoAnalisada = 0;

let numeroDecimal = document.getElementById("decimal");//recebe o input

//funcao para realizar a conversao no onclick
function converter(){
    let hexadecimal = hexInput.value.toUpperCase(); // atualiza o valor dentro da função
    numeroDecimal.value = "";

    let convertendo =0;//reinicia com valor sendo 0

    casasHex = hexadecimal.length-1;//recebe a quantidade de casas do hexadecimal

    for(let i=0; i<=hexadecimal.length-1;i++){
        posicaoAnalisada = casasHex;//var pra analisar a posicao do numero

        let caractere = hexadecimal[posicaoAnalisada];//recebe o caractere
        let valor;//vai receber o valor dos caracteres

        if(caractere>= '0' && caractere <= '9'){
            valor = parseInt(caractere);
        }else if(caractere >= 'A' && caractere <='F'){
            valor = 10 +(caractere.charCodeAt(0)  - 'A'.charCodeAt(0));//se for letra A-F charCode calcula o valor das letras automaticamente
        }else{
            alert("Caractere inválido no número hexadecimal")
            return;//sai da função se tiver caractere errado
        }

        convertendo += valor * (16**i);//calculo do numero decimal

        casasHex --;//diminui 1 do valor de casas para analisar as demais casas
    }

    numeroDecimal.value = convertendo;
}