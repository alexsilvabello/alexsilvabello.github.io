
// Função que remove caracteres especiais / acentos para codificar/decodificar a frase
function normalizar(frase){
    fraselimpa = frase.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return fraselimpa;

}

// Botão para leitura do campo input e codificação da frase.
var botaoCriptografar = document.querySelector("#btn-cripto");
botaoCriptografar.addEventListener("click", function() {
    event.preventDefault();
    var formcodificar = document.querySelector('#criptografa');
    var formmensagem = document.querySelector('#mensagem')
    var caixatexto = document.querySelector('#msg')
    var frasecriptografar = formcodificar.inputtexto.value;
    frasecriptografar = normalizar(frasecriptografar);
    var frasecodificada = codificar(frasecriptografar);
    caixatexto.value = frasecodificada;
});

// Função para codificar a palavra / frase
function codificar(frase) {
    frasecod = frase.replace(/i/gi,"imes").replace(/e/gi,"enter").replace(/a/gi, "ai").replace(/o/gi,"ober").replace(/u/gi,"ufat").toLowerCase();
    return frasecod;
}



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
