
function typeWrite(elemento) {
    const textArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textArray.forEach(function (letra, i) {
        setTimeout(function () {
            elemento.innerHTML += letra;
        }, 65 * i)
    });
}
const intruc1 = document.querySelector(".alerta");
const titulo = document.querySelector(".titulo");
const intruc2 = document.querySelector(".alerta2");

typeWrite(titulo);
typeWrite(intruc1);
typeWrite(intruc2);