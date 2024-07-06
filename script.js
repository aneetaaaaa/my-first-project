document.getElementById('convertBtn').addEventListener('click', function () {
    const text = document.getElementById('textToConvert').value;
    const language = document.getElementById('language').value;
    const speed = document.getElementById('speed').value;
    const errorPara = document.getElementById('errorPara');

    if (!text) {
        errorPara.textContent = "Please enter some text to convert.";
        return;
    }

    errorPara.textContent = "";
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language;
    utterance.rate = parseFloat(speed);

    speechSynthesis.speak(utterance);
});
