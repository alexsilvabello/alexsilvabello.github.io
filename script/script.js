// Lê o campo textarea a ser criptografada
let frase = document.querySelector("#cripto");
// Chama a função para criptografar
let button_Cripto = document.querySelector(".button_Cripto");
// Chama a função para descriptografar
let button_Descripto = document.querySelector(".button_Descripto");
// Chama a função do botão copiar
let button_Copia = document.querySelector(".button_Copia");
// Lê o campo textarea do resultado
let result = document.querySelector("#resultado");
// Chama a função para não permitir caracteres especiais
const regex = new RegExp("^[a-z \b]");


button_Cripto.addEventListener('click', (event) => {

    event.preventDefault();

    result.textContent = caracteres(convert(frase.value));

    frase.value = "";

})

button_Descripto.addEventListener('click', (event) => {

    event.preventDefault();

    result.textContent = caracteres(desconvert(frase.value));

    frase.value = "";

})

button_Copia.addEventListener('click', (event) => {

    event.preventDefault();

    result.select();

    document.execCommand('copy');
    alert("Copiado para área de transferência")
    
})



function convert(frase) {

    let nova_Frase = frase.replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat").toLowerCase();

    return nova_Frase;

}

function desconvert(frase) {

    let nova_Frase_desconvert = frase.replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u").toLowerCase();

    return nova_Frase_desconvert;

}

function caracteres(frase_teste) {

    if (!regex.test(frase_teste)) {

        return "CARACTERES ESPECIAIS NÃO SÃO PERIMITIDOS"
    }

    else {
        return  frase_teste;

    }

}


//Regras mantidar para recordação futura

/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/

/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/
