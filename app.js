document.getElementById("inputText").addEventListener("input", function() {
    var validationMessage = document.getElementById("validationMessage");
    var inputText = this.value;
    if (/[A-ZÁÉÍÓÚÑáéíóúñ]/.test(inputText)) {
        validationMessage.style.display = "block";
    } else {
        validationMessage.style.display = "none";
    }
});

function encriptar() {
    var inputText = document.getElementById("inputText").value;
    if (/[A-ZÁÉÍÓÚÑáéíóúñ]/.test(inputText)) {
        alert("El texto contiene mayúsculas o caracteres especiales.");
        return;
    }
    var encryptedText = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("outputText").value = encryptedText;
}

function desencriptar() {
    var inputText = document.getElementById("inputText").value;
    var decryptedText = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("outputText").value = decryptedText;
}
