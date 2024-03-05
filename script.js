const campo_texto = document.querySelector("#textoEncriptado");
const campo_mensaje = document.querySelector("#mensaje_encriptado");


//array
const matriz = [
    ["e", "enter"],//indice 0
    ["i", "imes"],// indice 1
    ["a", "ai"],// indice 2
    ["o", "ober"],//indice 3
    ["u", "ufat"],//indice 4
];

function btnEncriptar() {
    const texto = encriptar(campo_texto.value);
    campo_mensaje.value = texto;
    campo_texto.value = "";
    campo_mensaje.style.backgroundImage = "none"
}



function encriptar(textoEncriptado) {
    textoEncriptado = textoEncriptado.toLowerCase();
    for (let i = 0; i < matriz.length; i++) {
        if (textoEncriptado.includes(matriz[i][0])) {
            textoEncriptado = textoEncriptado.replaceAll(
                matriz[i][0],
                matriz[i][1]
            );
        }
    }
    return textoEncriptado;
}

function btnDesencriptar() {
    const texto = desifrar(campo_texto.value);
    campo_mensaje.value = texto;
    console.log(texto);
}

function desifrar(textoEncriptado) {
    for (let i = 0; i < matriz.length; i++) {
        if (textoEncriptado.includes(matriz[i][0])) {
            textoEncriptado = textoEncriptado.replaceAll(
                matriz[i][1],
                matriz[i][0]
            );
        }
    }
    return textoEncriptado;
}

function btncopiar() {
    const texto = copiar();
    campo_mensaje.value = texto;
    console.log(texto);
}

function copiar() {
    const mensajeCopiar = document.getElementById('mensaje_encriptado').value;
    console.log(mensajeCopiar);
    alert('Mensaje copiado');
    navigator.clipboard.writeText(mensajeCopiar);
}












