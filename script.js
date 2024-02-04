// Player information
const players = [
  {
    name: "Cristiano Ronaldo",
    age: 36,
    goals: 805,
    description:
      "Cristiano Ronaldo is a Portuguese professional footballer widely considered one of the greatest football players of all time.",
    image:
      "https://i.pinimg.com/originals/a9/f0/b1/a9f0b14597e20acd2f1bcebe416a8b29.jpg"
  },
  {
    name: "Lionel Messi",
    age: 34,
    goals: 672,
    description:
      "Lionel Messi is an Argentine professional footballer known for his incredible skill, agility, and goal-scoring prowess.",
    image: "https://blog.confirmbets.com/wp-content/uploads/2019/07/Messi.jpg"
  },
  {
    name: "Kylian Mbappe",
    age: 23,
    goals: 98,
    description:
      "Kylian Mbappe is a French professional footballer known for his speed, skill, and goal-scoring ability. He is considered one of the brightest young talents in the world.",
    image:
      "https://tmssl.akamaized.net/images/portrait/originals/342229-1533629004.jpg"
  }
];

// Get the players container
const playersContainer = document.getElementById("players-container");

// Create player cards dynamically
players.forEach((player) => {
  const playerCard = document.createElement("div");
  playerCard.classList.add("player-card");

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("player-image-container");

  const image = document.createElement("img");
  image.src = player.image;

  const playerName = document.createElement("h2");
  playerName.textContent = player.name;

  const playerAge = document.createElement("p");
  playerAge.textContent = `Age: ${player.age}`;

  const playerGoals = document.createElement("p");
  playerGoals.textContent = `Goals: ${player.goals}`;

  const playerDescription = document.createElement("p");
  playerDescription.classList.add("player-description");
  playerDescription.textContent = player.description;

  imageContainer.appendChild(image);
  playerCard.appendChild(imageContainer);
  playerCard.appendChild(playerName);
  playerCard.appendChild(playerAge);
  playerCard.appendChild(playerGoals);
  playerCard.appendChild(playerDescription);

  playersContainer.appendChild(playerCard);
});

// end
