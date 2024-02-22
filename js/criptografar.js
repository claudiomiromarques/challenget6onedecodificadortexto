
function codifica(texto) {
    const codigo = {
        "a": "ai",
        "e": "enter",
        "i": "imes",
        "o": "ober",
        "u": "ufat",
        "b": "bah"
    };

    var caracteres = texto.value.split("");
    
    for (let i = 0; i < caracteres.length; i++) {
        var caractere = caracteres[i];
        if (codigo.hasOwnProperty(caractere)) {
            caracteres[i] = codigo[caractere];
        }
    }
    
    return caracteres.join("");
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
// comente a função acima e descomente essa função, para gerar uma encriptação de forma randomica, apresentanda em letras maiusculas
// numeros e caracteres especiais....

function codifica(texto) {
    const letrasMaisculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numeros = '0123456789';
    const alfanumericos = ['!', '@', '#', '$', '%', '&', '*', '(', ')', '_', '+', '-', '=', '[', ']', '{', '}', '|', ';', ':', "'", '"', ',', '.', '/', '<', '>', '?', '~', '`'];
    
    const caracteres = texto.value.split("");
    let codigoTexto = '';

    for (let i = 0; i < caracteres.length; i++) {
        const character = caracteres[i];
        let novoCaracter = '';
        if (/[a-z]/.test(character)) { // Verifica se é letra minúscula
            const randomIndex = Math.floor(Math.random() * letrasMaisculas.length);
            novoCaracter = letrasMaisculas[randomIndex];
        } else if (/[A-Z]/.test(character)) { // Verifica se é letra maiúscula
            const randomIndex = Math.floor(Math.random() * numeros.length);
            novoCaracter = numeros[randomIndex];
        } else if (/[0-9]/.test(character)) { // Verifica se é número
            const randomIndex = Math.floor(Math.random() * alfanumericos.length);
            novoCaracter = alfanumericos[randomIndex];
        } else { // Se não for nenhum dos anteriores, mantém o caractere original
            novoCaracter = character;
        }
        codigoTexto += novoCaracter;
    }

    return codigoTexto;
}
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function decodifica(texto) {
    const codigo = {
        "ai": "a",
        "enter": "e",
        "imes": "i",
        "ober": "o",
        "ufat": "u",
        "b": "bah"
    };
    texto = texto.value;

    for(var i = 0; i < codigo.length; i++) {
        if(texto.includes(codigo[i][1])) {
            texto = texto.replaceAll(codigo[i][1], codigo[i][0]);
        }
    }
    return texto;
}

function escreveCodificado() {
    var btnCopiar = document.querySelector(".btn-copiar");
    btnCopiar.classList.remove("invisivel");
    
    resultado.textContent = codifica(inputTexto);
}

function escreveDecodificado() {
    var btnCopiar = document.querySelector(".btn-copiar");
    btnCopiar.classList.remove("invisivel");

    resultado.textContent = decodifica(inputTexto);
}

var inputTexto = document.querySelector(".texto-entrada");
var resultado = document.querySelector(".texto-saida");

var btnCodificar = document.querySelector(".btn-codificar");
var btnDecodificar = document.querySelector(".btn-decodificar");

var mensagensErro = document.querySelector(".mensagens-erro");

btnCodificar.onclick = function() {
    var erros = validaTexto(inputTexto);

    if(erros.length > 0) {
        mostraErros(erros);
        resultado.textContent = "";
        return;
    }

    escreveCodificado();
    mensagensErro.innerHTML = "";
}

btnDecodificar.onclick = function() {
    var erros = validaTexto(inputTexto);

    if(erros.length > 0) {
        mostraErros(erros);
        resultado.textContent = "";
        return;
    }
    
    escreveDecodificado();
    mensagensErro.innerHTML = "";
}