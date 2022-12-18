'use strict';
/*
///////////////////////////////////////
// Activating Strict Mode
'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest)
  hasDriversLicense = true;
if (hasDriversLicense)
  console.log("I can drive");
  
//const interface = "audio";
//const private = 534;

///////////////////////////////////////
// Function Declaration
'use strict';

function logger()
{
  console.log("My name is Jonas");
}

// calling / running / invoking
logger();
logger();
logger();

function fruitProcessor(apples, oranges)
{
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


///////////////////////////////////////
// Function expression vs declaration
// Function declaration

function calcAge1(birthYear)
{
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

// Function expression
const calcAge2 = function (birthYear) 
{
  return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2);

///////////////////////////////////////
// Arrow function

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const calcAverage = (scoreOne, scoreTwo, scoreThree) =>(scoreOne + scoreTwo + scoreThree) / 3;


const yearsUntilRetirement = (birthYear, firstName) => 
{
	const age = 2037 - birthYear;
  const retirement = 65 - age;
  //return retirement;
  return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));


///////////////////////////////////////
// Functino within functions

function cutFruitPieces(fruit)
{
  return fruit * 4;
}

function fruitProcessor(apples, oranges)
{
	const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  
  const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges.`
  return juice;
}

console.log(fruitProcessor(2, 3));



const calcAge = function(birthYear)
{
	return 2037 - birthYear;
}


///////////////////////////////////////
// Review about functions

const yearsUntilRetirement = function (birthYear, firstName) 
{
	const age = calcAge(birthYear);
  const retirement = 65 - age;
  
  return retirement >= 0 ? `${firstName} retires in ${retirement} years.` : `${firstName} has been retired for ${retirement * -1} years.`;
  //return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike"));


///////////////////////////////////////
// Coding challenge #1

const calcAverage = (scoreOne, scoreTwo, scoreThree) =>(scoreOne + scoreTwo + scoreThree) / 3;

const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);

const checkWinner = function (avgDolphins, avgKoalas)
{
  if (avgDolphins >= avgKoalas * 2)
  {
  	console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas}).`);
  }
  else if (avgKoalas >= avgDolphins * 2)
  {
  	console.log(`Koalas win (${avgKoalas} vs ${avgDolphins}).`);
  }
	else
  {
  	console.log("There is no winner.");
  }
}

checkWinner(avgDolphins, avgKoalas);


///////////////////////////////////////
// Arrays

const friend1 = "michael";
const friend2 = "steven";
const friend3 = "peter";

const friends = ["michael", "steven", "peter"];
console.log(friends);

console.log(friends[0]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'jay';
console.log(friends);


const jonas = ["stinky", "schemdtmann", 2037 - 1991, friends]
console.log(jonas.length);


// Exercise
function calcAge(birthYear)
{
  return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [age1, age2, age3];
console.log(ages);

///////////////////////////////////////
// Array methods

const friends = ["michael", "steven", "peter"];

// Add elements
const newLength = friends.push("jay");

console.log(friends);
console.log(newLength);

friends.unshift("john");
console.log(friends);

// Remove elements
friends.pop(); // Last element 
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf("michael"));
console.log(friends.indexOf("bob"));

friends.push(23);
console.log(friends.includes("steven"));
console.log(friends.includes("bob"));
console.log(friends.includes(23));

if (friends.includes("steven"))
{
	console.log("You have a friend called Steven.");
}


///////////////////////////////////////
// Coding challenge #2

const calcTip = function(bill)
{
 return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill *0.20;
}

const bills = [125, 555, 44];
const tips = [];
const total = [];

for (let i = 0; i < bills.length; i++)
{
	tips.push(calcTip(bills[i]));
  total.push(bills[i] + tips[i]);
}

console.log(bills);
console.log(tips);
console.log(total);


///////////////////////////////////////
// Objects
const jonas = {
	firstName: "Jonas", 
  lastName: "Schmedtmann",
  age: 2037 - 1991, 
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"]
}

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = "Name";
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt("what do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends");

console.log(jonas[interestedIn]);

if(jonas[interestedIn])
{
	console.log(jonas[intersetedIn]);
} else {
	console.log("Wrong request!");
}

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtmann";

console.log(jonas);

// Challenge
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friends is called ${jonas.friends[0]}.`);


///////////////////////////////////////
// Object methods

const jonas = {
	firstName: "Jonas", 
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,
  
  //calcAge: function(birthYear) {
  //	return 2037 - birthYear;
  //}
  // calcAge: function() {
  // 	return 2037 - this.birthYear;
  // }
  
  calcAge: function() {
  	this.age = 2037 - this.birthYear; 
  	return this.age;
  },
  
  summarize: function () {
  	console.log(`${this.firstName} is a ${this.calcAge()}-year old ${this.job} and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`)
    return;
  }
}

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// console.log(jonas["calcAge"](jonas["birthYear"]));

// Challenge
// "Jonas is a 46-year old teacher and he has a driver's license."
jonas.summarize();


///////////////////////////////////////
// Coding challenge #3

Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall. 
const mark = {
	firstName: "Mark", 
  lastName: "Miller",
  mass: 78,
 	height: 1.69,
  
  calcBMI : function() {
  	this.BMI = this.mass / (this.height ** 2);
    return this.BMI;
  }
}

const john = {
	firstName: "John",
  lastName: "Smith",
  mass: 92,
 	height: 1.95,
  
  calcBMI : function() {
  	this.BMI = this.mass / (this.height ** 2);
    return this.BMI;
  }
}

if (mark.calcBMI() > john.calcBMI())
{
	console.log(`${mark.firstName} ${mark.lastName}'s' BMI (${mark.calcBMI()}) is higher than ${john.firstName} ${john.lastName}'s (${john.calcBMI()})!`);
}
else if (mark.calcBMI() < john.calcBMI())
{
	console.log(`${john.firstName} ${john.lastName}'s' BMI (${john.calcBMI()}) is higher than ${mark.firstName} ${mark.lastName}'s (${mark.calcBMI()})!`);
}
else
{
	console.log(`Both Mark and John have the same BMI!`);
}


///////////////////////////////////////
// For loop
for (let rep = 1; rep <= 10; rep ++)
{
	console.log(`Lifting weights reptition ${rep} times`);
}

///////////////////////////////////////
// Looping through arrays using length method, continue, break functions

const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];

const types = [];

for (let i = 0; i < jonasArray.length; i++)
{
	// Reading from jonas array
	console.log(jonasArray[i], typeof jonasArray[i]);
  
  // Filling types of array
  // types[i] = typeof jonasArray[i];
  types.push(typeof jonasArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++)
{
	ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log("===ONLY STRINGS===");
for (let i = 0; i < jonasArray.length; i++)
{
	if(typeof jonasArray[i] !== 'string')
  {
  	continue;
  }
	console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log("===BREAK WITH NMBER===");
for (let i = 0; i < jonasArray.length; i++)
{
	if(typeof jonasArray[i] === 'number')
  {
  	break;
  }
	console.log(jonasArray[i], typeof jonasArray[i]);
}

///////////////////////////////////////
// Nested loops + reverse loop

const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
];

for (let i = jonasArray.length - 1; i >= 0; i--)
{
	console.log(jonasArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++)
{
	console.log(`===== Starting exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++)
  {
  	console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
  }
}


///////////////////////////////////////
// while Loop
let rep = 1;
while (rep <= 10)
{
	console.log(`Lifting weights reptition ${rep} times`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6)
{
	console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6)
  {
  	console.log(`You rolled a ${dice}`);
  	console.log("loop is about to end...");
  }
}

///////////////////////////////////////
// Coding challenge #4

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array.

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function(bill)
{
 return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill *0.20;
}

for (let i = 0; i < bills.length; i++)
{
	tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}

console.log(bills);
console.log(tips);
console.log(totals);

const calcAverage = function(arr)
{
	let total = 0;
	for (let i = 0; i < arr.length; i++)
  {
  	total += arr[i];
  }
  return total / arr.length;
}

console.log(`Average tip: ${calcAverage(tips)}`);
*/
