// Thèmes et éléments
const themes = {
    calme: {
        banners: ["images/BannièresCalme (1).jpg", "images/BannièresCalme (2).jpg", "images/BannièresCalme (3).jpg", "images/BannièresCalme (4).jpg", "images/BannièresCalme (5).jpg"],
        dicemanImages: ["images/DicemanCalme (1).jpg", "images/DicemanCalme (2).jpg", "images/DicemanCalme (3).jpg", "images/DicemanCalme (4).jpg", "images/DicemanCalme (5).jpg", "images/DicemanCalme (6).jpg", "images/DicemanCalme (7).jpg", "images/DicemanCalme (8).jpg"],
        music: ["audio/SoundCalme (1).mp3", "audio/SoundCalme (2).mp3", "audio/SoundCalme (3).mp3", "audio/SoundCalme (4).mp3", "audio/SoundCalme (5).mp3", "audio/SoundCalme (6).mp3", "audio/SoundCalme (7).mp3", "audio/SoundCalme (8).mp3"],
        backgrounds: [
            "linear-gradient(to bottom, #bde0fe, #caffbf)",
            "linear-gradient(to bottom, #d0f4de, #a9def9)",
            "linear-gradient(to bottom, #e3f2fd, #ffdde1)"
        ]
    },
    angoissant: {
        banners: ["images/BannièresAngoissant (1).jpg", "images/BannièresAngoissant (2).jpg", "images/BannièresAngoissant (3).jpg", "images/BannièresAngoissant (4).jpg"],
        dicemanImages: ["images/DicemanAngoissant (1).jpg", "images/DicemanAngoissant (2).jpg", "images/DicemanAngoissant (3).jpg", "images/DicemanAngoissant (4).jpg", "images/DicemanAngoissant (5).jpg"],
        music: ["audio/SoundAngoissant (1).mp3", "audio/SoundAngoissant (2).mp3", "audio/SoundAngoissant (3).mp3", "audio/SoundAngoissant (4).mp3", "audio/SoundAngoissant (5).mp3", "audio/SoundAngoissant (6).mp3"],
        backgrounds: [
            "linear-gradient(to bottom, #ffcccc, #d8bfd8)",
            "linear-gradient(to bottom, #ffdfba, #ffc3a0)",
            "linear-gradient(to bottom, #f3d5c0, #fad4c0)"
        ]
    },
    entrainant: {
        banners: ["images/BannièresEntrainant (1).jpg", "images/BannièresEntrainant (2).jpg", "images/BannièresEntrainant (3).jpg", "images/BannièresEntrainant (4).jpg", "images/BannièresEntrainant (5).jpg"],
        dicemanImages: ["images/DicemanEntrainant (1).jpg", "images/DicemanEntrainant (2).jpg", "images/DicemanEntrainant (3).jpg", "images/DicemanEntrainant (4).jpg", "images/DicemanEntrainant (5).jpg", "images/DicemanEntrainant (6).jpg", "images/DicemanEntrainant (7).jpg", "images/DicemanEntrainant (8).jpg", "images/DicemanEntrainant (9).jpg", "images/DicemanEntrainant (10).jpg", "images/DicemanEntrainant (11).jpg"],
        music: ["audio/SoundEntrainant (1).mp3", "audio/SoundEntrainant (2).mp3", "audio/SoundEntrainant (3).mp3", "audio/SoundEntrainant (4).mp3", "audio/SoundEntrainant (5).mp3", "audio/SoundEntrainant (6).mp3", "audio/SoundEntrainant (7).mp3", "audio/SoundEntrainant (8).mp3", "audio/SoundEntrainant (9).mp3", "audio/SoundEntrainant (10).mp3"],
        backgrounds: [
            "linear-gradient(to bottom, #ffafbd, #ffc3a0)",
            "linear-gradient(to bottom, #f5d0c5, #d5c8f2)",
            "linear-gradient(to bottom, #ffdae3, #ffc4e1)"
        ]
    }
};

// Dés
const diceImages = {
    1: ["images/Dice1 blanc.jpg", "images/Dice1 bleu.jpg", "images/Dice1 rose.jpg", "images/Dice1 vert.jpg"],
    2: ["images/Dice2 blanc.jpg", "images/Dice2 bleu.jpg", "images/Dice2 rose.jpg", "images/Dice2 vert.jpg"],
    3: ["images/Dice3 blanc.jpg", "images/Dice3 bleu.jpg", "images/Dice3 rose.jpg", "images/Dice3 vert.jpg"],
    4: ["images/Dice4 blanc.jpg", "images/Dice4 bleu.jpg", "images/Dice4 rose.jpg", "images/Dice4 vert.jpg"],
    5: ["images/Dice5 blanc.jpg", "images/Dice5 bleu.jpg", "images/Dice5 rose.jpg", "images/Dice5 vert.jpg"],
    6: ["images/Dice6 blanc.jpg", "images/Dice6 bleu.jpg", "images/Dice6 rose.jpg", "images/Dice6 vert.jpg"]
};

// Sons
const generateSounds = ["audio/SoundGenerate (1).mp3", "audio/SoundGenerate (2).mp3", "audio/SoundGenerate (3).mp3", "audio/SoundGenerate (4).mp3"];
const diceSounds = ["audio/SoundDice (1).mp3", "audio/SoundDice (2).mp3", "audio/SoundDice (3).mp3", "audio/SoundDice (4).mp3", "audio/SoundDice (5).mp3", "audio/SoundDice (6).mp3"];

// Bouton ROLL THE DICE
document.getElementById("roll-dice").addEventListener("click", () => {
    const randomSound = diceSounds[Math.floor(Math.random() * diceSounds.length)];
    const sound = new Audio(randomSound);
    sound.play();

    // Logique pour choisir un dé et le mettre en surbrillance
    const randomDice = Math.ceil(Math.random() * 6);
    document.querySelectorAll(".dice").forEach((dice, index) => {
        dice.style.opacity = index + 1 === randomDice ? "1" : "0.5";
    });
});
