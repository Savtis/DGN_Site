class SoundPack {
    /** @type {string} */
    name;

    /** @type {Array<HTMLAudioElement>} */
    sounds = [];

    play_random() {
        new Audio(this.sounds[Math.floor(Math.random() * this.sounds.length)].src).play();
    }
}

const sound_count = 3;
const sound_packs_names = ["fish", "fuel", "metal"];

/** @type {Array<SoundPack>} */
const sound_packs = [];

function load_sounds() {
    for (const name of sound_packs_names) {
        let buf = new SoundPack();
        buf.name = name;
        for (let i = 0; i < sound_count; i++) {
            buf.sounds.push(new Audio(`/res/zavod/sound/${name}${i+1}.wav`));
        }
        sound_packs.push(buf);
    }
}

