// Thèmes et éléments
const themes = {
    calme: {
        banners: ["images/BannièresCalme (1).jpg", "images/BannièresCalme (2).jpg"],
        dicemanImages: ["images/DicemanCalme (1).jpg", "images/DicemanCalme (2).jpg"],
        music: ["audio/SoundCalme (1).mp3", "audio/SoundCalme (2).mp3"],
        backgrounds: [
            "linear-gradient(to bottom, #bde0fe, #caffbf)",
            "linear-gradient(to bottom, #d0f4de, #a9def9)",
            "linear-gradient(to bottom, #e3f2fd, #ffdde1)"
        ]
    },
    angoissant: {
        banners: ["images/BannièresAngoissant (1).jpg", "images/BannièresAngoissant (2).jpg"],
        dicemanImages: ["images/DicemanAngoissant (1).jpg", "images/DicemanAngoissant (2).jpg"],
        music: ["audio/SoundAngoissant (1).mp3", "audio/SoundAngoissant (2).mp3"],
        backgrounds: [
            "linear-gradient(to bottom, #ffcccc, #d8bfd8)",
            "linear-gradient(to bottom, #ffdfba, #ffc3a0)",
            "linear-gradient(to bottom, #f3d5c0, #fad4c0)"
        ]
    },
    entrainant: {
        banners: ["images/BannièresEntrainant (1).jpg", "images/BannièresEntrainant (2).jpg"],
        dicemanImages: ["images/DicemanEntrainant (1).jpg", "images/DicemanEntrainant (2).jpg"],
        music: ["audio/SoundEntrainant (1).mp3", "audio/SoundEntrainant (2).mp3"],
        backgrounds: [
            "linear-gradient(to bottom, #ffafbd, #ffc3a0)",
            "linear-gradient(to bottom, #f5d0c5, #d5c8f2)",
            "linear-gradient(to bottom, #ffdae3, #ffc4e1)"
        ]
    }
};

// Sélection aléatoire d'un thème
const themeKeys = Object.keys(themes);
const randomTheme = themes[themeKeys[Math.floor(Math.random() * themeKeys.length)]];

// Appliquer les éléments du thème
document.body.style.background = randomTheme.backgrounds[Math.floor(Math.random() * randomTheme.backgrounds.length)];
document.getElementById("banner-image").src = randomTheme.banners[Math.floor(Math.random() * randomTheme.banners.length)];
document.getElementById("diceman-image").src = randomTheme.dicemanImages[Math.floor(Math.random() * randomTheme.dicemanImages.length)];

// Phrase aléatoire depuis Phrase_accroche.csv
fetch("Phrase_accroche.csv")
    .then(response => response.text())
    .then(data => {
        const phrases = data.split("\n").map(line => line.trim());
        const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
        document.getElementById("diceman-phrase").innerText = randomPhrase;
    });

// Musique
const audio = new Audio(randomTheme.music[Math.floor(Math.random() * randomTheme.music.length)]);
audio.loop = true;

// Boutons musique
document.getElementById("play-music").addEventListener("click", () => audio.play());
document.getElementById("pause-music").addEventListener("click", () => audio.pause());
