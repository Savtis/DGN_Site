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

let paragraphs;
let pres;
let originalTexts;
let originalPreTexts;

function makeGlitch() {
    paragraphs = document.querySelectorAll('p');
    pres = document.querySelectorAll('pre');
    originalTexts = Array.from(paragraphs).map(p => p.innerHTML);
    originalPreTexts = Array.from(pres).map(pre => pre.innerHTML);

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
}

function removeGlitch() {
    paragraphs.forEach((p, index) => {
        p.innerHTML = originalTexts[index];
    });
    pres.forEach((pre, index) => {
        pre.innerHTML = originalPreTexts[index];
    });
}

document.addEventListener('click', function () {
    if (clicked) return;
    clicked = true;

    const sound = document.getElementById('sound');
    sound.play();

    const content = document.querySelector('.content');

    content.classList.add('shifted');

    makeGlitch();

    setTimeout(() => {
        removeGlitch();
        content.classList.remove('shifted');
        clicked = false;
    }, 100);
});

(function () {
    const silly_text = [
        "sudo rm -rf / --no-preserve-root",
        "голые тёлки",
        "yay -S windows",
        "хе-хе-хе-хе-хе-хе",
        "python Dwarf_Fortress.py",
        "Спаси и Сохрани",
        "тебе не кажется, что за тобой следят?",
        "все вымрут, а я останусь",
        "Нет истины в плоти, только предательство",
        "ls -a",
        "git push --force",
        "да, я пользуюсь линуксом, как ты узнал?",
        "вступи в DGN - спаси человечество",
        "вступи в Cuplarax - отупи человечество",
        "STOUT SHAKO FOR 2 REFINED",
        "продам гараж",
        ":D",
        "Займись делом - растяни фимоz"
    ];

    let current_text_i = 0;

    function shuffle_texts() {
        for (let i = silly_text.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [silly_text[i], silly_text[j]] = [silly_text[j], silly_text[i]];
        }
    }

    function very_random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function typeEffect(text) {
        let char_i = 0
        while (true) {
            if (!clicked) {
                document.getElementById("silly").innerHTML += text[char_i];
                char_i++;
                if (char_i >= text.length) break;
            }
            await delay(very_random(60, 100));
        }
        await delay(very_random(100, 700));
        await eraseText(text);
    }

    async function eraseText(text) {
        let eraseIndex = text.length;

        while (eraseIndex > 0) {
            if (!clicked) {
                document.getElementById("silly").innerHTML = document.getElementById("silly").innerHTML.slice(0, -1);
                eraseIndex--;
            }
            await delay(very_random(15, 50));
        }

        current_text_i++;
        if (current_text_i >= silly_text.length) {
            current_text_i = 0;
            shuffle_texts();
        }
        const newText = silly_text[current_text_i];

        await delay(very_random(100, 250));
        await typeEffect(newText);
    }

    shuffle_texts();
    typeEffect('ща.');
})();

setInterval(() => {
    if (!clicked && Math.random() <= 0.2) {
        clicked = true;
        makeGlitch();
        setTimeout(() => {
            removeGlitch();
            clicked = false;
        }, 150);
    }
}, 1000);
