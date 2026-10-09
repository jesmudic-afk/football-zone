
const searchInput = document.getElementById("playerSearch");
const playerCards = document.querySelectorAll(".player-card");
const playerCount = document.getElementById("playerCount");
const emptyMessage = document.getElementById("emptyMessage");

const dialog = document.getElementById("playerDialog");
const dialogName = document.getElementById("dialogName");
const dialogText = document.getElementById("dialogText");
const closeDialog = document.getElementById("closeDialog");
const doneButton = document.getElementById("doneButton");

// Search for players by name, country or club.
searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.trim().toLowerCase();
  let visiblePlayers = 0;

  playerCards.forEach(function (card) {
    const searchableText =
      card.dataset.search.toLowerCase();

    const matches = searchableText.includes(searchTerm);

    card.hidden = !matches;

    if (matches) {
      visiblePlayers++;
    }
  });

  playerCount.textContent =
    visiblePlayers + (visiblePlayers === 1 ? " player" : " players");

  emptyMessage.hidden = visiblePlayers !== 0;
});

// Information for the player pop-up.
const playerProfiles = {
  "Cristiano Ronaldo": {
    country: "Portugal",
    position: "Forward",
    description:
      "Cristiano Ronaldo is a Portuguese football star known for his goal scoring, athleticism and long career at the highest level."
  },

  "Lionel Messi": {
    country: "Argentina",
    position: "Forward",
    description:
      "Lionel Messi is an Argentine football star celebrated for his dribbling, passing, creativity and goal scoring."
  },

  "Neymar Jr.": {
    country: "Brazil",
    position: "Forward",
    description:
      "Neymar Jr. is a Brazilian football star known for his flair, close control, creativity and attacking skills."
  },

  "Kylian Mbappé": {
    country: "France",
    position: "Forward",
    description:
      "Kylian Mbappé is a French football star known for his speed, movement and finishing."
  }, 
  "Salvation chukwudi": {
    country: "Brasil",
    position: "referee/coach/striker",
    description:
     "Chukwudi Salvation is a brasilian star known for giving michael nutmegs and scoring bangers from any  part of the pitch."
  }
};

// Open a player's details.
document.querySelectorAll(".details-button").forEach(function (button) {
  button.addEventListener("click", function () {
    const name = button.dataset.player;
    const profile = playerProfiles[name];

    if (!profile) return;

    dialogName.textContent = name;
    dialogText.textContent =
      profile.country + " · " + profile.position + ". " +
      profile.description;

    dialog.showModal();
  });
});

// Close the pop-up.
closeDialog.addEventListener("click", function () {
  dialog.close();
});

doneButton.addEventListener("click", function () {
  dialog.close();
});

// Close when the user clicks outside the pop-up.
dialog.addEventListener("click", function (event) {
  if (event.target === dialog) {
    dialog.close();
  }
});

// Automatically display the current year.
document.getElementById("year").textContent =
  new Date().getFullYear();