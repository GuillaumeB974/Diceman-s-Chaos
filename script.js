// Thèmes et éléments
const themes = {
    calme: { banners: [...], dicemanImages: [...], music: [...], background: "linear-gradient(to bottom, #a2d5f2, #e3fdfd)" },
    angoissant: { banners: [...], dicemanImages: [...], music: [...], background: "linear-gradient(to bottom, #2b2b2b, #4a0000)" },
    entrainant: { banners: [...], dicemanImages: [...], music: [...], background: "linear-gradient(to bottom, #ffafbd, #ffc3a0)" }
};

// Choisir un thème aléatoire
const themeKeys = Object.keys(themes);
const randomTheme = themes[themeKeys[Math.floor(Math.random() * themeKeys.length)]];

// Appliquer les éléments du thème
document.body.style.background = randomTheme.background;
document.getElementById("banner-image").src = randomTheme.banners[Math.floor(Math.random() * randomTheme.banners.length)];
document.getElementById("diceman-image").src = randomTheme.dicemanImages[Math.floor(Math.random() * randomTheme.dicemanImages.length)];

// Lecture d'une phrase aléatoire
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

// Boutons de contrôle
document.getElementById("play-music").addEventListener("click", () => audio.play());
document.getElementById("pause-music").addEventListener("click", () => audio.pause());
