console.clear();

const animals = [
  {
    name: "cat",
    weight: 4,
    continents: [
      "Europe",
      "Asia",
      "Africa",
      "Australia",
      "North-America",
      "South-America",
    ],
  },
  {
    name: "dog",
    weight: 10,
    continents: [
      "Europe",
      "Asia",
      "Africa",
      "Australia",
      "North-America",
      "South-America",
    ],
  },
  { name: "elephant", weight: 4000, continents: ["Africa", "Asia"] },
  {
    name: "rabbit",
    weight: 2,
    continents: [
      "Europe",
      "Asia",
      "Africa",
      "Australia",
      "North-America",
      "South-America",
    ],
  },
  { name: "lion", weight: 200, continents: ["Africa"] },
  { name: "tiger", weight: 150, continents: ["Asia"] },
  {
    name: "horse",
    weight: 500,
    continents: [
      "Europe",
      "Asia",
      "Africa",
      "Australia",
      "North-America",
      "South-America",
    ],
  },
  { name: "giraffe", weight: 600, continents: ["Africa"] },
  { name: "zebra", weight: 300, continents: ["Africa"] },
  {
    name: "penguin",
    weight: 12,
    continents: ["Africa", "Australia", "Antarctica", "South-America"],
  },
  {
    name: "polar bear",
    weight: 450,
    continents: ["North-America", "Asia", "Arctic"],
  },
  { name: "panda", weight: 120, continents: ["Asia"] },
  { name: "koala", weight: 13, continents: ["Australia"] },
  { name: "kangaroo", weight: 70, continents: ["Australia"] },
  {
    name: "monkey",
    weight: 20,
    continents: ["South-America", "Asia", "Africa"],
  },
  { name: "sloth", weight: 8, continents: ["South-America"] },
  { name: "hippo", weight: 1500, continents: ["Africa"] },
  { name: "rhino", weight: 2000, continents: ["Asia", "Africa"] },
];

const firstAnimalStartingWithLetterG = animals.find((animal) =>
  animal.name.startsWith("g")
);

const indexOfAnimalWithNameLongerFive = animals.findIndex(
  (animal) => animal.name.length > 5
);

const animalsSortedAlphabetically = animals.toSorted((a, b) => {
  if (a.name < b.name) {
    return -1; // a kommt vor b
  } else if (a.name > b.name) {
    return 1; // b kommt vor a
  } else {
    return 0; // sie sind gleich
  }
});

const animalsSortedByWeightStartingWithLowest = animals.toSorted((a, b) => {
  if (a.weight < b.weight) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
});

const animalsSortedByWeightReversed = animals
  .toSorted((a, b) => a.weight - b.weight) // Sortiere nach Gewicht
  .toReversed();

const animalWithWeightMoreThanFivehundredExists = animals.some(
  (animal) => animal.weight > 500
);

const allAnimalsInEuropeWeighLessThanOnehundred = !animals.filter(
  (animal) => animal.continents.includes("Europe") && animal.weight < 100
);

const weightOfAllAnimalsInAfrica = animals
  .filter((animal) => animal.continents.includes("Africa"))
  .map((animal) => animal.weight)
  .reduce((total, weight) => total + weight, 0);

const averageWeightOfAllAnimalsInAfrica =
  animals
    .filter((animal) => animal.continents.includes("Africa")) // Tiere in Afrika filtern
    .map((animal) => animal.weight) // Gewichte der Tiere extrahieren
    .reduce((total, weight) => total + weight, 0) / // Summe der Gewichte berechnen
  animals.filter((animal) => animal.continents.includes("Africa")).length; // Durch die Anzahl der Tiere in Afrika teilen

// Alle Werte auf einmal ausgeben als Object:
console.log({
  firstAnimalStartingWithLetterG,
  indexOfAnimalWithNameLongerFive,
  animalsSortedAlphabetically,
  animalsSortedByWeightStartingWithLowest,
  animalsSortedByWeightReversed,
  animalWithWeightMoreThanFivehundredExists,
  allAnimalsInEuropeWeighLessThanOnehundred,
  weightOfAllAnimalsInAfrica,
  averageWeightOfAllAnimalsInAfrica,
});

export {
  firstAnimalStartingWithLetterG,
  indexOfAnimalWithNameLongerFive,
  animalsSortedAlphabetically,
  animalsSortedByWeightStartingWithLowest,
  animalsSortedByWeightReversed,
  animalWithWeightMoreThanFivehundredExists,
  allAnimalsInEuropeWeighLessThanOnehundred,
  weightOfAllAnimalsInAfrica,
  averageWeightOfAllAnimalsInAfrica,
};
