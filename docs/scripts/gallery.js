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

function updateLine() {
    const lineElement = document.getElementById('line');
    const windowWidth = window.innerWidth;
    const symbol = '=';
    const symbolWidth = 10;

    const numSymbols = Math.floor(windowWidth / symbolWidth);
    lineElement.textContent = symbol.repeat(numSymbols);
}

updateLine();
window.addEventListener('resize', updateLine);
