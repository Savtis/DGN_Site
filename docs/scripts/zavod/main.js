load_sounds();

let i = 0;

document.addEventListener('click', function () {
    get_sound(sound_packs_names[i]).play_random();
    if (i >= 2) {
        i = 0;
    } else {
        i++;
    }
});
