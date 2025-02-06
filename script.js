document.addEventListener("DOMContentLoaded", () => {
  // === Gestion du viewport et basculement des classes mobile/desktop ===
  const checkViewport = () => {
    const isMobile = window.innerWidth <= 768;
    document.body.classList.toggle("mobile-view", isMobile);
    document.body.classList.toggle("desktop-view", !isMobile);
  };
  checkViewport();
  window.addEventListener("resize", checkViewport);

  // === Thèmes et Éléments ===
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
      backgrounds: [
        "linear-gradient(to bottom, #bde0fe, #caffbf)",
        "linear-gradient(to bottom, #d0f4de, #a9def9)",
        "linear-gradient(to bottom, #e3f2fd, #ffdde1)"
      ],
      extraImages: [
        "images/extra-imageCalme (1).png",
        "images/extra-imageCalme (2).png",
        "images/extra-imageCalme (3).png"
      ]
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
      backgrounds: [
        "linear-gradient(to bottom, #ffcccc, #d8bfd8)",
        "linear-gradient(to bottom, #ffdfba, #ffc3a0)",
        "linear-gradient(to bottom, #f3d5c0, #fad4c0)"
      ],
      extraImages: [
        "images/extra-imageAngoissant (1).png",
        "images/extra-imageAngoissant (2).png",
        "images/extra-imageAngoissant (3).png"
      ]
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
      backgrounds: [
        "linear-gradient(to bottom, #ffafbd, #ffc3a0)",
        "linear-gradient(to bottom, #f5d0c5, #d5c8f2)",
        "linear-gradient(to bottom, #ffdae3, #ffc4e1)"
      ],
      extraImages: [
        "images/extra-imageEntrainant (1).png",
        "images/extra-imageEntrainant (2).png",
        "images/extra-imageEntrainant (3).png",
        "images/extra-imageEntrainant (4).png"
      ]
    }
  };

  const themeKeys = Object.keys(themes);
  const randomTheme = themes[themeKeys[Math.floor(Math.random() * themeKeys.length)]];
  document.body.style.background = randomTheme.backgrounds[Math.floor(Math.random() * randomTheme.backgrounds.length)];
  document.getElementById("banner-image").src = randomTheme.banners[Math.floor(Math.random() * randomTheme.banners.length)];
  document.getElementById("diceman-image").src = randomTheme.dicemanImages[Math.floor(Math.random() * randomTheme.dicemanImages.length)];
  document.getElementById("extra-image").src = randomTheme.extraImages[Math.floor(Math.random() * randomTheme.extraImages.length)];

  // === Génération des Phrases Aléatoires ===
  fetch("Phrase_accroche.csv")
    .then(response => response.text())
    .then(data => {
      const phrases = data.split("\n").map(line => line.trim()).filter(line => line.length > 0);
      const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
      document.getElementById("diceman-phrase").innerText = randomPhrase;
    })
    .catch(error => console.error("Erreur lors du chargement des phrases :", error));

  // === Sons utilisés pour les boutons Generate et Roll Dice ===
  const generateSounds = [
    "audio/SoundGenerate (1).mp3",
    "audio/SoundGenerate (2).mp3",
    "audio/SoundGenerate (3).mp3"
  ];
  const diceSounds = [
    "audio/SoundDice (1).mp3",
    "audio/SoundDice (2).mp3",
    "audio/SoundDice (3).mp3"
  ];

  // === Gestion des Boutons Chaos et Generate ===
  const chaosBtn = document.getElementById("chaos-btn");
  const generateBtn = document.getElementById("generate-btn");

  if (chaosBtn) {
    chaosBtn.addEventListener("click", () => {
      chaosBtn.classList.add("vibrate");
      setTimeout(() => chaosBtn.classList.remove("vibrate"), 200);
      document.body.classList.add("flash-animation");
      setTimeout(() => document.body.classList.remove("flash-animation"), 500);
      handleGenerate("chaos");
    });
  }

  if (generateBtn) {
    generateBtn.addEventListener("click", () => handleGenerate("generate"));
  }

  const handleGenerate = (mode) => {
    const sound = new Audio(generateSounds[Math.floor(Math.random() * generateSounds.length)]);
    sound.play().catch(err => console.error("Erreur de lecture du son :", err));
    setTimeout(() => {
      const choicesContainer = document.querySelector(".choices-container");
      const chaosContainer = document.querySelector(".chaos-container");
      if (choicesContainer) choicesContainer.style.display = "none";
      if (chaosContainer) chaosContainer.style.display = "none";
      setTimeout(() => {
        const diceContainer = document.querySelector(".dice-container");
        const rollDiceContainer = document.querySelector(".roll-dice-container");
        if (diceContainer) diceContainer.style.display = "flex";
        if (rollDiceContainer) rollDiceContainer.style.display = "block";
        displayDice(mode);
      }, 2000);
    }, 1000);
  };

  const displayDice = (mode) => {
    fetch("The_True_DiceMan.csv")
      .then(response => response.text())
      .then(data => {
        const rows = data.split("\n").map(row => row.split(","));
        const headers = rows.shift();
        const diceImages = {
          1: ["images/Dice1 blanc.jpg", "images/Dice1 bleu.jpg", "images/Dice1 rose.jpg", "images/Dice1 vert.jpg"],
          2: ["images/Dice2 blanc.jpg", "images/Dice2 bleu.jpg", "images/Dice2 rose.jpg", "images/Dice2 vert.jpg"],
          3: ["images/Dice3 blanc.jpg", "images/Dice3 bleu.jpg", "images/Dice3 rose.jpg", "images/Dice3 vert.jpg"],
          4: ["images/Dice4 blanc.jpg", "images/Dice4 bleu.jpg", "images/Dice4 rose.jpg", "images/Dice4 vert.jpg"],
          5: ["images/Dice5 blanc.jpg", "images/Dice5 bleu.jpg", "images/Dice5 rose.jpg", "images/Dice5 vert.jpg"],
          6: ["images/Dice6 blanc.jpg", "images/Dice6 bleu.jpg", "images/Dice6 rose.jpg", "images/Dice6 vert.jpg"]
        };

        for (let i = 1; i <= 6; i++) {
          const filteredRows = mode === "generate" ? filterRows(rows, headers) : rows;
          const randomRow = filteredRows[Math.floor(Math.random() * filteredRows.length)];
          const phrase = `${randomRow[headers.indexOf("Verb")]} ${randomRow[headers.indexOf("Object")]} ${randomRow[headers.indexOf("Temp")]}`;
          const randomImage = diceImages[i][Math.floor(Math.random() * diceImages[i].length)];
          const diceElement = document.querySelector(`#dice-${i}`);
          if (diceElement) {
            const diceImageElement = diceElement.querySelector(".dice-image");
            const dicePhraseElement = diceElement.querySelector(".dice-phrase");
            if (diceImageElement) diceImageElement.src = randomImage;
            if (dicePhraseElement) dicePhraseElement.innerText = phrase;
            diceElement.setAttribute("data-description", randomRow[headers.indexOf("Desc")]);
          }
        }
      })
      .catch(error => console.error("Erreur lors du chargement des dés :", error));
  };

  const filterRows = (rows, headers) => {
    const category = document.getElementById("category").value;
    const difficulty = document.getElementById("difficulty").value;
    return rows.filter(row =>
      row[headers.indexOf("Category")] === category &&
      row[headers.indexOf("Difficulty")] === difficulty
    );
  };

  // === Gestion du bouton "ROLL THE DICE" ===
  const rollDiceBtn = document.getElementById("roll-dice-btn");
  if (rollDiceBtn) {
    rollDiceBtn.classList.add(`roll-dice-color-${Math.floor(Math.random() * 5) + 1}`);
    rollDiceBtn.addEventListener("click", () => {
      const diceSound = new Audio(diceSounds[Math.floor(Math.random() * diceSounds.length)]);
      diceSound.play().catch(err => console.error("Erreur de lecture du son des dés :", err));
      diceSound.onended = () => {
        setTimeout(() => {
          const randomDiceIndex = Math.floor(Math.random() * 6) + 1;
          const selectedDice = document.querySelector(`#dice-${randomDiceIndex}`);
          document.querySelectorAll(".dice").forEach(dice => dice.classList.remove("highlight"));
          if (selectedDice) {
            selectedDice.classList.add("highlight");
            const descriptionText = selectedDice.getAttribute("data-description") || "No description available";
            const rollDiceContainer = document.querySelector(".roll-dice-container");
            if (rollDiceContainer) {
              rollDiceContainer.innerHTML = `<p id="dice-description">${descriptionText}</p>`;
              const descriptionElement = document.getElementById("dice-description");
              if (descriptionElement) {
                descriptionElement.style.fontSize = "1.5em";
                descriptionElement.style.fontStyle = "italic";
                descriptionElement.style.fontWeight = "bold";
                descriptionElement.style.color = "#555";
                descriptionElement.style.margin = "20px auto";
              }
            }
          }
        }, 1000);
      };
    });
  }

  // === Gestion de la bannière des cookies ===
  const cookieBanner = document.getElementById("cookie-banner");
  const acceptCookiesButton = document.getElementById("accept-cookies");
  if (cookieBanner && acceptCookiesButton) {
    cookieBanner.style.display = localStorage.getItem("cookiesAccepted") === "true" ? "none" : "block";
    acceptCookiesButton.addEventListener("click", () => {
      localStorage.setItem("cookiesAccepted", "true");
      cookieBanner.style.display = "none";
    });
  }

  // === Gestion du bouton "Buy Me a Coffee" ===
  const buyButtons = document.querySelectorAll("#buy-me-button");
  const buyOptions = [
    "☕ Buy Me a Coffee",
    "🔥 Support My Chaos",
    "🎲 Fuel the Dice",
    "⚡ Power the Randomness",
    "👽 Send Coffee to Mr. Fifth",
    "💡 Keep the Chaos Alive",
    "✨ Fill Me with Gold",
    "🍵 Buy Me a Tea",
    "🥤 Get Me a Soda",
    "💰 Toss Me some Coins",
    "🧪 Offer Me a Potion",
    "🧃 Treat Me a Juice",
    "🎲 Roll Me a Coffee"
  ];
  if (buyButtons.length > 0) {
    buyButtons.forEach(button => {
      button.innerText = buyOptions[Math.floor(Math.random() * buyOptions.length)];
      button.addEventListener("click", () => window.open("https://ko-fi.com/dicemanschaos", "_blank"));
    });
  }

  // === Redirection aléatoire des boutons "How to Play" ===
  const howToPlayButtons = document.querySelectorAll("#random-how-to-play");
  const howToPlayPages = [
    "how-to-play-1.html",
    "how-to-play-2.html",
    "how-to-play-3.html",
    "how-to-play-4.html"
  ];
  if (howToPlayButtons.length > 0) {
    howToPlayButtons.forEach(button => {
      button.addEventListener("click", event => {
        event.preventDefault();
        const randomPage = howToPlayPages[Math.floor(Math.random() * howToPlayPages.length)];
        console.log("Redirection vers :", randomPage);
        window.location.href = randomPage;
      });
    });
  }

  // === Gestion de la musique (PC/Mobile) ===
  const audio = new Audio(); // Objet audio global
  const playButton = document.getElementById("play-music");
  const pauseButton = document.getElementById("pause-music");

  if (playButton && pauseButton) {
    playButton.addEventListener("click", () => {
      if (randomTheme.music && randomTheme.music.length > 0) {
        if (!audio.paused) audio.pause();
        const randomIndex = Math.floor(Math.random() * randomTheme.music.length);
        audio.src = randomTheme.music[randomIndex];
        console.log("Lecture de :", audio.src);
        audio.play().catch(err => console.error("Erreur de lecture audio :", err));
      } else {
        console.error("randomTheme.music est vide ou non défini !");
      }
    });

    pauseButton.addEventListener("click", () => {
      console.log("Musique en pause");
      audio.pause();
    });
  }
});
