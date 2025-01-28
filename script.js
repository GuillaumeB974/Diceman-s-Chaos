// === Thèmes et Éléments ===
const themes = {
    calme: {
        banners: ["images/BannièresCalme (1).jpg", "images/BannièresCalme (2).jpg", "images/BannièresCalme (3).jpg", "images/BannièresCalme (4).jpg", "images/BannièresCalme (5).jpg"],
        dicemanImages: ["images/DicemanCalme (1).jpg", "images/DicemanCalme (2).jpg", "images/DicemanCalme (3).jpg", "images/DicemanCalme (4).jpg", "images/DicemanCalme (5).jpg", "images/DicemanCalme (6).jpg", "images/DicemanCalme (7).jpg", "images/DicemanCalme (8).jpg"],
        music: ["audio/SoundCalme (1).mp3", "audio/SoundCalme (2).mp3", "audio/SoundCalme (3).mp3", "audio/SoundCalme (4).mp3", "audio/SoundCalme (5).mp3", "audio/SoundCalme (6).mp3", "audio/SoundCalme (7).mp3", "audio/SoundCalme (8).mp3"],
        backgrounds: ["linear-gradient(to bottom, #bde0fe, #caffbf)", "linear-gradient(to bottom, #d0f4de, #a9def9)", "linear-gradient(to bottom, #e3f2fd, #ffdde1)"]
    },
    angoissant: {
        banners: ["images/BannièresAngoissant (1).jpg", "images/BannièresAngoissant (2).jpg", "images/BannièresAngoissant (3).jpg", "images/BannièresAngoissant (4).jpg"],
        dicemanImages: ["images/DicemanAngoissant (1).jpg", "images/DicemanAngoissant (2).jpg", "images/DicemanAngoissant (3).jpg", "images/DicemanAngoissant (4).jpg", "images/DicemanAngoissant (5).jpg"],
        music: ["audio/SoundAngoissant (1).mp3", "audio/SoundAngoissant (2).mp3", "audio/SoundAngoissant (3).mp3", "audio/SoundAngoissant (4).mp3", "audio/SoundAngoissant (5).mp3", "audio/SoundAngoissant (6).mp3"],
        backgrounds: ["linear-gradient(to bottom, #ffcccc, #d8bfd8)", "linear-gradient(to bottom, #ffdfba, #ffc3a0)", "linear-gradient(to bottom, #f3d5c0, #fad4c0)"]
    },
    entrainant: {
        banners: ["images/BannièresEntrainant (1).jpg", "images/BannièresEntrainant (2).jpg", "images/BannièresEntrainant (3).jpg", "images/BannièresEntrainant (4).jpg", "images/BannièresEntrainant (5).jpg"],
        dicemanImages: ["images/DicemanEntrainant (1).jpg", "images/DicemanEntrainant (2).jpg", "images/DicemanEntrainant (3).jpg", "images/DicemanEntrainant (4).jpg", "images/DicemanEntrainant (5).jpg", "images/DicemanEntrainant (6).jpg", "images/DicemanEntrainant (7).jpg", "images/DicemanEntrainant (8).jpg", "images/DicemanEntrainant (9).jpg", "images/DicemanEntrainant (10).jpg", "images/DicemanEntrainant (11).jpg"],
        music: ["audio/SoundEntrainant (1).mp3", "audio/SoundEntrainant (2).mp3", "audio/SoundEntrainant (3).mp3", "audio/SoundEntrainant (4).mp3", "audio/SoundEntrainant (5).mp3", "audio/SoundEntrainant (6).mp3", "audio/SoundEntrainant (7).mp3", "audio/SoundEntrainant (8).mp3", "audio/SoundEntrainant (9).mp3", "audio/SoundEntrainant (10).mp3"],
        backgrounds: ["linear-gradient(to bottom, #ffafbd, #ffc3a0)", "linear-gradient(to bottom, #f5d0c5, #d5c8f2)", "linear-gradient(to bottom, #ffdae3, #ffc4e1)"]
    }
};

// === Initialisation des Thèmes ===
const themeKeys = Object.keys(themes);
const randomTheme = themes[themeKeys[Math.floor(Math.random() * themeKeys.length)]];
document.body.style.background = randomTheme.backgrounds[Math.floor(Math.random() * randomTheme.backgrounds.length)];
document.getElementById("banner-image").src = randomTheme.banners[Math.floor(Math.random() * randomTheme.banners.length)];
document.getElementById("diceman-image").src = randomTheme.dicemanImages[Math.floor(Math.random() * randomTheme.dicemanImages.length)];

// === Gestion de la Musique ===
const audio = new Audio();
document.getElementById("play-music").addEventListener("click", () => {
    audio.src = randomTheme.music[Math.floor(Math.random() * randomTheme.music.length)];
    audio.play().catch(err => console.error("Erreur de lecture audio :", err));
});
document.getElementById("pause-music").addEventListener("click", () => {
    audio.pause();
});

// === Génération des Phrases Aléatoires ===
fetch("Phrase_accroche.csv")
    .then(response => response.text())
    .then(data => {
        const phrases = data.split("\n").map(line => line.trim());
        const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
        document.getElementById("diceman-phrase").innerText = randomPhrase;
    });

// === Sons et Gestion des Dés ===
// Sons pour les boutons Generate et Chaos
const generateSounds = ["audio/SoundGenerate (1).mp3", "audio/SoundGenerate (2).mp3", "audio/SoundGenerate (3).mp3"];
const diceSounds = ["audio/SoundDice (1).mp3", "audio/SoundDice (2).mp3", "audio/SoundDice (3).mp3"];

// Ajout des animations et Gestion de CHAOS
document.getElementById("chaos-btn").addEventListener("click", () => {
    const chaosBtn = document.getElementById("chaos-btn");
    chaosBtn.classList.add("vibrate");
    setTimeout(() => chaosBtn.classList.remove("vibrate"), 200);
    handleGenerate("chaos");
});

// Fonction pour le clic sur Generate
document.getElementById("generate-btn").addEventListener("click", () => handleGenerate("generate"));

// === Fonction Handle Generate ===
function handleGenerate(mode) {
    const sound = new Audio(generateSounds[Math.floor(Math.random() * generateSounds.length)]);
    sound.play();
    setTimeout(() => {
        document.querySelector(".choices-container").style.display = "none";
        document.querySelector(".chaos-container").style.display = "none";
        setTimeout(() => {
            document.querySelector(".dice-container").style.display = "flex";
            document.querySelector(".roll-dice-container").style.display = "block";
            displayDice(mode);
        }, 2000);
    }, 1000);
}

// === Gestion des Dés ===
function displayDice(mode) {
    fetch("The_True_DiceMan.csv")
        .then(response => response.text())
        .then(data => {
            const rows = data.split("\n").map(row => row.split(","));
            const headers = rows.shift();
            const diceImages = {
                1: ["images/Dice1 blanc.jpg", "images/Dice1 bleu.jpg", "images/Dice1 rose.jpg", "images/Dice1 vert.jpg"],
                2: ["images/Dice2 blanc.jpg", "images/Dice2 bleu.jpg", "images/Dice2 rose.jpg", "images/Dice2 vert.jpg"]
                // Continuez pour les dés 3 à 6
            };
            // Logique pour les dés...
        })
        .catch(error => console.error("Erreur lors du chargement des dés :", error));
}

// === Bouton "Buy Me a Coffee" Dynamique ===
document.addEventListener("DOMContentLoaded", () => {
    const buyButton = document.getElementById("buy-me-button");
    if (buyButton) {
        const buyOptions = [
            "Buy Me a Coffee",
            "Buy Me a Tea",
            "Get Me a Soda",
            "Treat Me a Juice",
            "Roll Me a Coffee"
        ];
        buyButton.innerText = buyOptions[Math.floor(Math.random() * buyOptions.length)];
    }
});
