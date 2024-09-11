console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

if (SUPER_SECRET_PASSWORD === receivedPassword) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 100;

if (number % 2 === 0) {
  console.log("Even number");
} else {
  console.log("Uneven number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 2837;
let pricePerHotdog;

if (numberOfHotdogs < 5) {
  pricePerHotdog = 2;
} else if (numberOfHotdogs >= 5 && numberOfHotdogs < 100) {
  pricePerHotdog = 1.5;
} else if (numberOfHotdogs >= 100 && numberOfHotdogs < 1000000) {
  pricePerHotdog = 1;
} else if (numberOfHotdogs >= 1000000) {
  pricePerHotdog = 0.1;
}
const totalPrice = numberOfHotdogs * pricePerHotdog;
console.log(
  `For ${numberOfHotdogs} hotdog, the total price is ${totalPrice} euros`
);
// Part 4: Daytime
const currentHour = 12;

const statement = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const userName = "Thorsten";

const greeting =
  userName === "Archibald"
    ? "Hello " + "Coach" + "!"
    : "Hello " + userName + "!";

console.log(greeting);
