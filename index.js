// initial array (namesOne) will store names entered by user
let namesOne = [
  "rick",
  "petra",
  "martha",
  "david",
  "sarah",
  "milan",
  "beata",
  "jimmy",
];

let namesTwo = [];

// randomise namesOne Array Index (fisher-yates method used here)
// This will stop assignments matching with user input order

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
shuffleArray(namesOne);

// OBJECTS
// This for loop below will create objects with a key and value
let nameObjectOne = {};
let nameObjectTwo = {};

for (let i = 0; i < namesOne.length; i += 2) {
  let key = namesOne[i];
  let value = i + 1 < namesOne.length ? namesOne[i + 1] : null;
  nameObjectOne[key] = value;
  namesTwo.push(key);

  //   reverse values and keys
  if (value) {
    nameObjectTwo[value] = key;
    // randomise value for more interesting distribution
    shuffleArray(namesTwo);
  }
}

console.log("Santa 1 Assign", nameObjectOne);
console.log("Santa 2 Assign", nameObjectTwo);

// OUTPUTS - SANTA 1
const left = document.getElementById("output-left");
const right = document.getElementById("output-right");

// I need to iterate over the nameObjectOne OBJECT and get the key, value pairs.

for (const [key, value] of Object.entries(nameObjectOne)) {
  left.innerHTML += `
  <div class="left">
    <p>${key}</p> 
    <p>${value}</p>
</div>
  `;
}

// Shuffle the namesTwo array before entering the loop
shuffleArray(namesTwo);

// OUTPUTS - SANTA 2
for (const [key, value] of Object.entries(nameObjectTwo)) {
  right.innerHTML += `
    <div class="right">
      <p>${key}</p>
      <p>${namesTwo.pop()}</p>
    </div>
  `;
}

console.log(namesTwo);
