let numInput = document.getElementById("decimal"); // input decimal como string

let inputHex = document.getElementById("hexadecimal");

function converter() {
    let numDecimal = parseInt(numInput.value); // transforma o input em número
    let arrayHex = [];
    let caractere;

    while (numDecimal > 0) {
        let resto = numDecimal % 16;

        if(resto>9 && resto<=15){
            switch (resto){
                case 10:
                    caractere = 'A';
                break;

                case 11:
                    caractere = 'B';
                break;

                case 12:
                    caractere = 'C';
                break;

                case 13:
                    caractere = 'D';
                break;

                case 14:
                    caractere = 'E';
                break;

                case 15:
                    caractere = 'F';
                break;
            }
            arrayHex.unshift(caractere);
        }else{
            arrayHex.unshift(resto); // adiciona o dígito mais significativo na frente
        }
        numDecimal = Math.floor(numDecimal / 16); // divide o número por 16 e arredonda para dnv calcular o resto
    }

    let numeroHex = arrayHex.join(""); // junta os dígitos para transformar em número hexadecimal

    inputHex.value = numeroHex;//mostra o resultado no input co m o seu value recebendo o resultado
}
