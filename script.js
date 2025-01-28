// Thèmes et éléments
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

// Application d'un thème aléatoire
const themeKeys = Object.keys(themes);
const randomTheme = themes[themeKeys[Math.floor(Math.random() * themeKeys.length)]];
document.body.style.background = randomTheme.backgrounds[Math.floor(Math.random() * randomTheme.backgrounds.length)];
document.getElementById("banner-image").src = randomTheme.banners[Math.floor(Math.random() * randomTheme.banners.length)];
document.getElementById("diceman-image").src = randomTheme.dicemanImages[Math.floor(Math.random() * randomTheme.dicemanImages.length)];

// Gestion de la musique
const audio = new Audio();
document.getElementById("play-music").addEventListener("click", () => {
    audio.src = randomTheme.music[Math.floor(Math.random() * randomTheme.music.length)];
    audio.play().catch(err => console.error("Erreur de lecture audio :", err));
});
document.getElementById("pause-music").addEventListener("click", () => {
    audio.pause();
});

// Phrase aléatoire depuis Phrase_accroche.csv
fetch("Phrase_accroche.csv")
    .then(response => response.text())
    .then(data => {
        const phrases = data.split("\n").map(line => line.trim());
        const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
        document.getElementById("diceman-phrase").innerText = randomPhrase;
    });

// Sons pour Generate et Chaos
const generateSounds = [
    "audio/SoundGenerate (1).mp3", "audio/SoundGenerate (2).mp3", "audio/SoundGenerate (3).mp3",
    "audio/SoundGenerate (4).mp3", "audio/SoundGenerate (5).mp3", "audio/SoundGenerate (6).mp3",
    "audio/SoundGenerate (7).mp3", "audio/SoundGenerate (8).mp3"
];

// Sons pour les dés
const diceSounds = [
    "audio/SoundDice (1).mp3", "audio/SoundDice (2).mp3", "audio/SoundDice (3).mp3",
    "audio/SoundDice (4).mp3", "audio/SoundDice (5).mp3", "audio/SoundDice (6).mp3"
];

// Gestion des actions Generate et Chaos
document.getElementById("generate-btn").addEventListener("click", () => handleGenerate("generate"));
document.getElementById("chaos-btn").addEventListener("click", () => handleGenerate("chaos"));

function handleGenerate(mode) {
    const sound = new Audio(generateSounds[Math.floor(Math.random() * generateSounds.length)]);
    sound.play();
    setTimeout(() => {
        document.querySelector(".choices-container").style.display = "none";
        document.querySelector(".chaos-container").style.display = "none";
        document.querySelector(".dice-container").style.display = "flex";
        document.querySelector(".roll-dice-container").style.display = "block";
        displayDice(mode);
    }, 1000);
}

// Gestion des dés et des phrases associées
function displayDice(mode) {
    fetch("The_True_DiceMan.csv")
        .then(response => response.text())
        .then(data => {
            const rows = data.split("\n").map(row => row.split(","));
            const headers = rows.shift();

            for (let i = 1; i <= 6; i++) {
                const filteredRows = mode === "generate"
                    ? filterRows(rows, headers)
                    : rows;
                const randomRow = filteredRows[Math.floor(Math.random() * filteredRows.length)];
                const phrase = `${randomRow[headers.indexOf("Verb")]} ${randomRow[headers.indexOf("Object")]} ${randomRow[headers.indexOf("Temp")]}`;
                document.querySelector(`#dice-${i} .dice-image`).src = `images/Dice${i} blanc.jpg`;
                document.querySelector(`#dice-${i} .dice-phrase`).innerText = phrase;
                document.querySelector(`#dice-${i}`).setAttribute("data-description", randomRow[headers.indexOf("Description")]);
            }
        });
}

function filterRows(rows, headers) {
    const category = document.getElementById("category").value;
    const difficulty = document.getElementById("difficulty").value;
    return rows.filter(row =>
        row[headers.indexOf("Category")] === category &&
        row[headers.indexOf("Difficulty")] === difficulty
    );
}

// Gestion du bouton Roll the Dice
const rollDiceBtn = document.getElementById("roll-dice-btn");
rollDiceBtn.classList.add(`roll-dice-color-${Math.floor(Math.random() * 5) + 1}`);
rollDiceBtn.addEventListener("click", () => {
    const sound = new Audio(diceSounds[Math.floor(Math.random() * diceSounds.length)]);
    sound.play();
    const randomDiceIndex = Math.floor(Math.random() * 6) + 1;
    const selectedDice = document.querySelector(`#dice-${randomDiceIndex}`);
    document.querySelectorAll(".dice").forEach(dice => dice.classList.remove("highlight"));
    selectedDice.classList.add("highlight");
});
