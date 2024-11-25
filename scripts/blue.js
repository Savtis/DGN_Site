

async function loadCode() {
    const randomChars = "ъхзщшгнекуцйэждлорпавыф.юбьтимсчя=-0987654321ё\\][poiuytrewqasdfghjkl;'/.,mnbvcxz0987654321▲▨▽◁◐◑◒◓◔◕◖ѬѲѾҦӨΣɰ𮯠𬺡𫠝"
    const l = randomChars.length
    const response = await fetch('../res/program.c');
    const text = await response.text();
    let chance = 0.0;

    let index = 0;
    const codeDiv = document.getElementById('code');

    const intervalId = setInterval(() => 
        {
            if (index < text.length) {
                if (chance > Math.random() && text[index] != ' ' && text[index] != '\n' && chance > 0.26) {
                    codeDiv.textContent += randomChars[Math.floor(Math.random() * l)]
                } else {
                    codeDiv.textContent += text[index];
                }
                index++;
                if (chance < 0.5) {
                    chance += 0.0006;
                }
            } else {
                clearInterval(intervalId);
            }
        },
        8
    )
}

loadCode();