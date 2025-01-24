// Définir les thèmes et leurs éléments
const themes = {
    calme: {
        banners: [
            "images/BannièresCalme (1).jpg",
            "images/BannièresCalme (2).jpg",
            "images/BannièresCalme (3).jpg",
            "images/BannièresCalme (4).jpg",
            "images/BannièresCalme (5).jpg"
        ],
        dicemanImages: [
            "images/DicemanCalme (1).jpg",
            "images/DicemanCalme (2).jpg",
            "images/DicemanCalme (3).jpg",
            "images/DicemanCalme (4).jpg",
            "images/DicemanCalme (5).jpg",
            "images/DicemanCalme (6).jpg",
            "images/DicemanCalme (7).jpg",
            "images/DicemanCalme (8).jpg"
        ],
        music: [
            "audio/SoundCalme (1).mp3",
            "audio/SoundCalme (2).mp3",
            "audio/SoundCalme (3).mp3",
            "audio/SoundCalme (4).mp3",
            "audio/SoundCalme (5).mp3",
            "audio/SoundCalme (6).mp3",
            "audio/SoundCalme (7).mp3",
            "audio/SoundCalme (8).mp3"
        ],
        background: "linear-gradient(to bottom, #a2d5f2, #e3fdfd)"
    },
    angoissant: {
        banners: [
            "images/BannièresAngoissant (1).jpg",
            "images/BannièresAngoissant (2).jpg",
            "images/BannièresAngoissant (3).jpg",
            "images/BannièresAngoissant (4).jpg"
        ],
        dicemanImages: [
            "images/DicemanAngoissant (1).jpg",
            "images/DicemanAngoissant (2).jpg",
            "images/DicemanAngoissant (3).jpg",
            "images/DicemanAngoissant (4).jpg",
            "images/DicemanAngoissant (5).jpg"
        ],
        music: [
            "audio/SoundAngoissant (1).mp3",
            "audio/SoundAngoissant (2).mp3",
            "audio/SoundAngoissant (3).mp3",
            "audio/SoundAngoissant (4).mp3",
            "audio/SoundAngoissant (5).mp3",
            "audio/SoundAngoissant (6).mp3"
        ],
        background: "linear-gradient(to bottom, #2b2b2b, #4a0000)"
    },
    entrainant: {
        banners: [
            "images/BannièresEntrainant (1).jpg",
            "images/BannièresEntrainant (2).jpg",
            "images/BannièresEntrainant (3).jpg",
            "images/BannièresEntrainant (4).jpg",
            "images/BannièresEntrainant (5).jpg"
        ],
        dicemanImages: [
            "images/DicemanEntrainant (1).jpg",
            "images/DicemanEntrainant (2).jpg",
            "images/DicemanEntrainant (3).jpg",
            "images/DicemanEntrainant (4).jpg",
            "images/DicemanEntrainant (5).jpg",
            "images/DicemanEntrainant (6).jpg",
            "images/DicemanEntrainant (7).jpg",
            "images/DicemanEntrainant (8).jpg",
            "images/DicemanEntrainant (9).jpg",
            "images/DicemanEntrainant (10).jpg",
            "images/DicemanEntrainant (11).jpg"
        ],
        music: [
            "audio/SoundEntrainant (1).mp3",
            "audio/SoundEntrainant (2).mp3",
            "audio/SoundEntrainant (3).mp3",
            "audio/SoundEntrainant (4).mp3",
            "audio/SoundEntrainant (5).mp3",
            "audio/SoundEntrainant (6).mp3",
            "audio/SoundEntrainant (7).mp3",
            "audio/SoundEntrainant (8).mp3",
            "audio/SoundEntrainant (9).mp3",
            "audio/SoundEntrainant (10).mp3"
        ],
        background: "linear-gradient(to bottom, #ffafbd, #ffc3a0)"
    }
};

// Sélection d'un thème aléatoire
const themeKeys = Object.keys(themes);
const randomTheme = themes[themeKeys[Math.floor(Math.random() * themeKeys.length)]];

// Appliquer les éléments du thème
document.body.style.background = randomTheme.background;
document.getElementById("banner-image").src = randomTheme.banners[Math.floor(Math.random() * randomTheme.banners.length)];
document.getElementById("diceman-image").src = randomTheme.dicemanImages[Math.floor(Math.random() * randomTheme.dicemanImages.length)];

// Jouer la musique
const audio = new Audio(randomTheme.music[Math.floor(Math.random() * randomTheme.music.length)]);
setTimeout(() => audio.play(), 2000); // Commence après 2 secondes
audio.loop = true;
