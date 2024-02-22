
function validaTexto(texto) {
    const erros = [];

    // trim remove espaços em branco no início e no final do texto//
    if (!texto.value.trim()) {
        erros.push("Digite algum texto!");
    }

    if (/[A-Z-À-Ú-á-ú]/.test(texto.value)) {
        erros.push("Apenas letras minúsculas e sem acento!");
    }

    return erros;
}

function mostraErros(erros) {
    var ul = document.querySelector(".mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var log = document.createElement("log");
        log.textContent = erro;
        ul.appendChild(log);
    });
    
}