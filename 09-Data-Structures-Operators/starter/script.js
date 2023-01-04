'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
    order: function (starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
  },

  // Taking destructure of object as arguments
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/* 
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// OR assignment operator (||=)
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Nullish assignment operator (??=) (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator (&&=)
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS';
rest2.owner &&= '<ANONYMOUS';

console.log(rest1);
console.log(rest2);

///////////////////////////////////////
// Nullish coalescing operator

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests || 10;

console.log(guests1);

// ?? nullish coalescing operator
// Nullish: null and undefined only
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);


///////////////////////////////////////
// Short Circuiting / more on operators

// Use ANY data type, return ANY data type, short-circuiting
// If first value/operand is a truthy value, then the operand is not evaluated
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
// If all values are falsy, return the last
console.log(undefined || null);

// Return the first truthy value
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

//restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

// Short-circuiting application (set a default value if numGuests doesn't exist)
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('--- AND ---');
// && operator returns the first falsy value
console.log(0 && 'Jonas');
// If all the operand before the last, && returns the last operand
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'jonas');

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

// Execute code in 2nd operand if first one is true
restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');

///////////////////////////////////////
// Rest operator / Takes elements and packs them into an array

// 1) Breakdown elements inside data structures
// SPREAD = RIGHT side of = sign
const arr = [1, 2, ...[3, 4]];

// REST = LEFT side of = sign
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

// 2) Functions (rest parameters)
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'oni on', 'olives', 'spinach');
///////////////////////////////////////
// Spread Operator (...)

const arr = [7, 8, 9];
const baddNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(baddNewArray);

const newArr = [1, 2, ...arr]; // Spread operator
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2+ arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets, NOT objects
const str = 'Jonas';
const letters = [...str, ' ', ' S.'];
console.log(letters);
console.log(...str);
// console.log(`${...str} Schmedtmann`); // Comma-seperated values only work inside arrays or as function arguments

const ingredients = [
  prompt("Let's make pasta! Ingredients 1:"),
  prompt("Let's make pasta! Ingredients 2:"),
  prompt("Let's make pasta! Ingredients 3:"),
];
// restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = {
  foundedIn: 1998,
  ...restaurant,
  founder: 'Guiseppe',
};
console.log(newRestaurant);

// Object copy
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name, restaurant.name); */

///////////////////////////////////////
// Destructuring Objects ({x, y, z} = objectName)
// Function taking an object as argument
/* restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant; // Have to specify name of properties inside object
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj); // Need surrounding parantheses
console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

///////////////////////////////////////
// Destructuring Arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

Destructuring arrays; assigning multiple variables at once to elements inside the array
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables (array destructuring)
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log(restaurant.order(2, 0));

// Receive 2 retun values from a function
const [starter, mainCourse] = restaurant.order(2, 0); // 2 variables from 1 function call
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested; // i is 2, j is 5, k is 6 :)
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8]; // 1 is the default value when there's no appropriate element from array
console.log(p, q, r); */
