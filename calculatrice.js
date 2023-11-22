function playButtonSound() {
    var audio = document.getElementById('buttonSound');
    audio.play();
}  

function appendToResult(value) {
    document.getElementById('result').value += value;
    playButtonSound();
}

function clearResult() {
    document.getElementById('result').value = '';
    playButtonSound();
}

function deleteLastDigit() {
    var result = document.getElementById('result').value;
    document.getElementById('result').value = result.slice(0, -1);
    playButtonSound();
}

function calculateResult() {
    var result = document.getElementById('result').value;
    var calculatedResult = eval(result);
    document.getElementById('result').value = calculatedResult;
    playButtonSound();
}





  
