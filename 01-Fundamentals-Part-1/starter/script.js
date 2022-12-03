/*
////////////////////////////////////
// Linking a JavaScript File
let js = "amazing";
console.log(40 + 8 + 23 - 10);

////////////////////////////////////
// Values and Variables
console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);


////////////////////////////////////
// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

////////////////////////////////////
// let, const and var
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher'

lastName = 'Schmedtmann';
console.log(lastName);


////////////////////////////////////
// Basic Operators
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;


////////////////////////////////////
// Operator Precedence
console.log(now - 1991 > now - 2018);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, 
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


////////////////////////////////////
// Coding Challenge #1
const massMark = 95;
const heightMark = 1.88;

const massJohn = 85;
const heightJohn = 1.76;

const bmiJohn = massJohn / (heightJohn ** 2);
const bmiMark = massMark / (heightMark ** 2);

const markHighBMI = bmiMark > bmiJohn

console.log(bmiMark, bmiJohn)
console.log(`Mark's BMI: ${bmiMark}`)
console.log(`John's BMI: ${bmiJohn}`)
console.log(markHighBMI)


////////////////////////////////////
// String and template literals
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log(`String
multiple
lines`);


////////////////////////////////////
// if/else statements
const age = 15;
// If boolean value is True, the code is executed
if (age >= 18)
{
	console.log(`Sarah can start driving license.`);
}
else 
{
	const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :).`);
}

const birthYear = 2012;
let century;

if (birthYear <= 2000)
{
	century = 20;
}
else
{
	century = 21;
}
console.log(`This person was born in the ${century}th century.`);


////////////////////////////////////
// Coding challenge 2
const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

const bmiJohn = massJohn / (heightJohn ** 2);
const bmiMark = massMark / (heightMark ** 2);

if (bmiJohn > bmiMark)
{
	console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark}).`);
}
else
{
	console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn}).`);
}


////////////////////////////////////
// Type conversion and coercion

// Type conversion
const inputYear = "1991";

console.log(Number(inputYear));

console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// Type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log('23' * '2');

let n = "1" + 1; 
n = n - 1;
console.log(n);


////////////////////////////////////
// Falsy and Truthy values
// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
	console.log("Don't spend it all");
} else {
	console.log("Get a job!");
}

let height = 0;
if (height) {
	console.log("Yay! Height is defined");
} else {
	console.log("Height is undefined");
}


////////////////////////////////////
// == vs ===
const age = '18';

if (age === 18)
	console.log("You just became an adult. (strict)");
  
if (age == 18)
	console.log("You just became an adult. (loose)");

const favorite = prompt("What's your favorite number?");
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
	console.log("Cool! 23 is an amazing number!");
}

////////////////////////////////////
// Logical operators
const hasDriversLicense = true; //A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision)
	console.log("Sarah is able to drive");
else
	console.log("Someone else should drive");
  
const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

////////////////////////////////////
// Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

const averageDolphin = (97 + 112 + 81) / 3;
const averageKoala = (109 + 95 + 86) / 3;


if (averageDolphin > averageKoala)
	console.log('Dolphins are the winner!');
else if (averageDolphin < averageKoala)
	console.log('Koalas are the winner!');
else
	console.log('Both teams tie!'); 
  
 BONUS
// Check if team Dolphin has at least 100 points
if (averageDolphin >= 100)
	if (averageKoala >= 100)
  // If both teams have at least 100 points, begin comparison
  	if (averageDolphin > averageKoala)
      console.log('Dolphins are the winner!');
    else if (averageDolphin < averageKoala)
      console.log('Koalas are the winner!');
    else
			console.log('Both teams tie!');
  // If team Koala doesn't have at least 100 points, Dolphin wins    
  else
  	console.log('Dolphins are the winner!');
// If team Dolphin doesn't have at least 100 points, Koala wins    
else if (averageKoala >= 100)
	console.log('Koalas are the winner!');
else
	console.log('Nobody wins!'); 


////////////////////////////////////
// Switch statement
const day = 'monday';

switch(day) {
	case 'monday': // day === "monday" 
  	console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case 'tuesday':
  	console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
  	console.log("Write code examples");
    break;
  case "friday":
  	console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
  	console.log("Enjoy the weekend");
    break;
  default:
  	console.log("Not a valid day!");
}


if (day === "monday")
{
	console.log("Plan course structure");
  console.log("Go to coding meetup");
}
else if (day === "tuesday")
{
  console.log("Prepare theory videos");
}
else if ((day === "wednesday") || (day === "thursday"))
{
  console.log("Write code examples");
}
else if (day === "friday")
{
  console.log("Record videos");
}
else if ((day === "saturday") || (day === "sunday"))
{
  console.log("Enjoy the weekend");
}
else
{
  console.log("Not a valid day!");
}


////////////////////////////////////
// Ternary operator
const age = 23;

age >= 18 ? console.log("I like to drink wine") : console.log("I like to drink water"); 

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}.`);


////////////////////////////////////
// Coding challenge #4
const billBeforeTip = Number(prompt("Bill"));
const tip = billBeforeTip >= 50 && billBeforeTip <= 300 ? (billBeforeTip * 0.15) : (billBeforeTip * 0.2);

console.log(`Your bill before tip: ${billBeforeTip}.`);
console.log(`Your tip amount: ${tip}.`);
console.log(`Your total bill: ${billBeforeTip + tip}`);

*/






