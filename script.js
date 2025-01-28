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

// Gestion du bouton CHAOS avec vibration
const chaosBtn = document.getElementById("chaos-btn");

chaosBtn.addEventListener("click", () => {
    // Ajouter une vibration au bouton CHAOS
    chaosBtn.classList.add("vibrate");

    // Retirer la vibration après 200ms
    setTimeout(() => chaosBtn.classList.remove("vibrate"), 200);

    // Lancer le mode CHAOS
    handleGenerate("chaos");
});

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
            const headers = rows.shift(); // En-têtes du fichier CSV

            const diceImages = {
                1: ["images/Dice1 blanc.jpg", "images/Dice1 bleu.jpg", "images/Dice1 rose.jpg", "images/Dice1 vert.jpg"],
                2: ["images/Dice2 blanc.jpg", "images/Dice2 bleu.jpg", "images/Dice2 rose.jpg", "images/Dice2 vert.jpg"],
                3: ["images/Dice3 blanc.jpg", "images/Dice3 bleu.jpg", "images/Dice3 rose.jpg", "images/Dice3 vert.jpg"],
                4: ["images/Dice4 blanc.jpg", "images/Dice4 bleu.jpg", "images/Dice4 rose.jpg", "images/Dice4 vert.jpg"],
                5: ["images/Dice5 blanc.jpg", "images/Dice5 bleu.jpg", "images/Dice5 rose.jpg", "images/Dice5 vert.jpg"],
                6: ["images/Dice6 blanc.jpg", "images/Dice6 bleu.jpg", "images/Dice6 rose.jpg", "images/Dice6 vert.jpg"]
            };

            for (let i = 1; i <= 6; i++) {
                // Filtrer les phrases si mode "generate" ou sélectionner toutes les phrases pour "chaos"
                const filteredRows = mode === "generate"
                    ? filterRows(rows, headers)
                    : rows;

                // Sélectionner une ligne aléatoire parmi les filtres
                const randomRow = filteredRows[Math.floor(Math.random() * filteredRows.length)];

                // Générer la phrase "Verb + Object + Temp"
                const phrase = `${randomRow[headers.indexOf("Verb")]} ${randomRow[headers.indexOf("Object")]} ${randomRow[headers.indexOf("Temp")]}`;

                // Choisir une image aléatoire pour le dé
                const randomImage = diceImages[i][Math.floor(Math.random() * diceImages[i].length)];

                // Mettre à jour l'image et la phrase du dé
                document.querySelector(`#dice-${i} .dice-image`).src = randomImage;
                document.querySelector(`#dice-${i} .dice-phrase`).innerText = phrase;

                // Stocker la description associée dans l'attribut "data-description"
                document.querySelector(`#dice-${i}`).setAttribute("data-description", randomRow[headers.indexOf("Desc")]);
            }
        })
        .catch(error => console.error("Erreur lors du chargement des dés :", error));
}

// Fonction pour filtrer les phrases selon les choix de catégorie et difficulté
function filterRows(rows, headers) {
    const category = document.getElementById("category").value;
    const difficulty = document.getElementById("difficulty").value;

    return rows.filter(row =>
        row[headers.indexOf("Category")] === category &&
        row[headers.indexOf("Difficulty")] === difficulty
    );
}

// Gestion du bouton "ROLL THE DICE"
const rollDiceBtn = document.getElementById("roll-dice-btn");
rollDiceBtn.classList.add(`roll-dice-color-${Math.floor(Math.random() * 5) + 1}`);

rollDiceBtn.addEventListener("click", () => {
    // Lecture d'un son aléatoire
    const sound = new Audio(diceSounds[Math.floor(Math.random() * diceSounds.length)]);
    sound.play();

    // Attendre 1 seconde après la fin du son pour mettre en surbrillance le dé
    sound.onended = () => {
        setTimeout(() => {
            const randomDiceIndex = Math.floor(Math.random() * 6) + 1;
            const selectedDice = document.querySelector(`#dice-${randomDiceIndex}`);

            // Enlever la surbrillance de tous les dés
            document.querySelectorAll(".dice").forEach(dice => dice.classList.remove("highlight"));

            // Ajouter la surbrillance au dé sélectionné
            selectedDice.classList.add("highlight");

            // Afficher la description associée
            const descriptionText = selectedDice.getAttribute("data-description") || "No description available";

            // Remplacer le bouton "ROLL THE DICE" par la phrase de description
            const rollDiceContainer = document.querySelector(".roll-dice-container");
            rollDiceContainer.innerHTML = `<p id="dice-description">${descriptionText}</p>`;

            // Appliquer les styles de la phrase d'accroche
            const descriptionElement = document.getElementById("dice-description");
            descriptionElement.style.fontSize = "1.5em";
            descriptionElement.style.fontStyle = "italic";
            descriptionElement.style.fontWeight = "bold";
            descriptionElement.style.marginTop = "20px";
        }, 1000); // 1 seconde
        
       // Liste des textes dynamiques pour le bouton
const buyOptions = [
    "Buy Me a Coffee",
    "Buy Me a Tea",
    "Get Me a Soda",
    "Treat Me a Juice",
    "Roll Me a Coffee",
    "Offer Me a Potion",
    "Fuel My Chaos"
];

// Fonction pour mettre à jour dynamiquement le texte du bouton
function updateBuyButton() {
    const buyButton = document.getElementById("buy-me-button");
    if (buyButton) {
        const randomText = buyOptions[Math.floor(Math.random() * buyOptions.length)];
        buyButton.innerText = randomText;
    } else {
        console.error("Bouton 'buy-me-button' introuvable.");
    }
}

// Met à jour le texte du bouton après le chargement de la page
document.addEventListener("DOMContentLoaded", updateBuyButton);
    };
});
