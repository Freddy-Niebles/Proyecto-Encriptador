//  variables
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const encryptBtn = document.getElementById('encryptBtn');
const decryptBtn = document.getElementById('decryptBtn');
const copyBtn = document.getElementById('copyBtn');
const validationMessage = document.getElementById('validationMessage');

// Función para validar el texto
function validateText(text) {
    const regex = /^[a-z\s]*$/;
    return regex.test(text);
}

// Función para cifrar el texto
function encryptText(text) {
    
    let encryptedText = text.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
    return encryptedText;
}

// Función para descifrar el texto
function decryptText(text) {
    
    let decryptedText = text.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
    return decryptedText;
}

// Evento de click para cifrar
encryptBtn.addEventListener('click', () => {
    const text = inputText.value;

    if (validateText(text)) {
        validationMessage.classList.add('hidden');
        outputText.value = encryptText(text);
    } else {
        validationMessage.classList.remove('hidden');
    }
});

// Evento de click para descifrar
decryptBtn.addEventListener('click', () => {
    const text = inputText.value;

    if (validateText(text)) {
        validationMessage.classList.add('hidden');
        outputText.value = decryptText(text);
    } else {
        validationMessage.classList.remove('hidden');
    }
});

// Evento de click para copiar el texto
copyBtn.addEventListener('click', () => {
    outputText.select();
    document.execCommand('copy');
});
