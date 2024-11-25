const frames = ['|', '/', '-', '\\'];
const randomChars = "ъхзщшгнекуцйэждлорпавыф.юбьтимсчя=-0987654321ё\\][poiuytrewqasdfghjkl;'/.,mnbvcxz0987654321▲▨▽◁◐◑◒◓◔◕◖ѬѲѾҦӨΣɰ𮯠𬺡𫠝"
const l = randomChars.length
let currentFrame = 0;
let clicked = false;
function displayNextChar() {
    if (clicked) return;
    document.getElementById('changing-text').innerText = frames[currentFrame];
    currentFrame = (currentFrame + 1) % frames.length;
}
setInterval(displayNextChar, 150);


document.addEventListener('click', function() {
    if (clicked) return;
    clicked = true;

    const sound = document.getElementById('sound');
    sound.play();

    const content = document.querySelector('.content');
    
    content.classList.add('shifted');

    const paragraphs = document.querySelectorAll('p');
    const pres = document.querySelectorAll('pre');
    const originalTexts = Array.from(paragraphs).map(p => p.innerHTML);
    const originalPreTexts = Array.from(pres).map(pre => pre.innerHTML);

    const glitchText = (text) => {
        return text.split('').map(char => {
            return Math.random() < 0.2 ? randomChars[Math.floor(Math.random() * l)] : char;
        }).join('');
    };

    paragraphs.forEach((p, index) => {
        p.innerHTML = glitchText(originalTexts[index]);
    });
    pres.forEach((pre, index) => {
        pre.innerHTML = glitchText(originalPreTexts[index]);
    });
    
    setTimeout(() => {
        paragraphs.forEach((p, index) => {
            p.innerHTML = originalTexts[index];
        });
        pres.forEach((pre, index) => {
            pre.innerHTML = originalPreTexts[index];
        });
        content.classList.remove('shifted');
        clicked = false;
    }, 100);
});
