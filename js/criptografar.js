
function codifica(texto) {
    const mapeamento = {
        "a": "ai",
        "e": "enter",
        "i": "imes",
        "o": "ober",
        "u": "ufat",
        "b": "bah"
    };

    const caracteres = texto.value.split("");

     // Substituir cada caractere pelo seu código correspondente, se existir
     const textoCodificado = caracteres.map(function(caractere) {
        
    // Se o caractere estiver no objeto de mapeamento, substitua-o; caso contrário, mantenha-o igual
        return mapeamento[caractere] || caractere;
    });

    // Juntar os caracteres codificados em uma string e retornar
        return textoCodificado.join("");
 
}

function decodifica(texto) {
    // Objeto de mapeamento para as decodificações
    const codigo = {
        "ai": "a",
        "enter": "e",
        "imes": "i",
        "ober": "o",
        "ufat": "u",
        "bah": "b" 
    };

    // Obtendo o texto a ser decodificado
    texto = texto.value;

    // Iterando sobre as chaves e valores do objeto de codificação
    for (const [codificado, decodificado] of Object.entries(codigo)) {

    // Substituindo todas as ocorrências do texto codificado pelo texto decodificado
        texto = texto.split(codificado).join(decodificado);
    }

    // Retornando o texto decodificado
    return texto;
}

function escreveCodificado() {
    var btnCodificar = document.querySelector(".btn-codificar");
    btnCopiar.classList.remove("invisivel");
    
    resultado.textContent = codifica(inputTexto);
}

function escreveDecodificado() {
    var btnDecodificar = document.querySelector(".btn-decodificar");
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