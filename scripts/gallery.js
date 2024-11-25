let element = document.getElementById('dot')
let state = 0

function displayNextChar() {
    if (state == 3) {
        element.innerText = element.innerText.slice(0, -3);
        state = 0;
    } else {
        element.innerText += '.'
        state++;
    }
}
setInterval(displayNextChar, 800);