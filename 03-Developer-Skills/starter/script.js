// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/* const x = "23";
if (x === 23) console.log(23);

const calcAge = birthYear => 2037 - birthYear;

console.log(calcAge(1950)); 

const measureKelvin = function() {
    const measurement = {
        type: "temperature",
        unit: "celsius",

        // C) FIX
        // value: Number(prompt("Degrees celsius: "))
        value: 10
    }

    // B) FIND
    console.table(measurement);

    // console.log(measurement.value);
    // console.warn(measurement.value);
    // console.error(measurement.value);
    
    const kelvin = measurement.value + 273;
    return kelvin;
}

// A) IDENTIFY BUG
console.log(measureKelvin());

// Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
    const temps = t1.concat(t2);
    console.log(temps);
  
    let max = 0;
    let min = 0;
  
    for (let i = 0; i < temps.length; i++) {
      const curTemp = temps[i];
      if (typeof curTemp !== 'number') continue;
  
      if (curTemp > max) max = curTemp;
      if (curTemp < min) min = curTemp;
    }
    console.log(max, min);
    return max - min;
  };
  const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
  // Identify bug
  console.log(amplitudeBug);


Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]

const printForecast = function(arr)
{
	let forecast = "";
	for (let i = 1; i <= arr.length; i++)
  {
  	forecast += `... ${arr[i - 1]}ºC in ${i} days `;
  }
  console.log(forecast);
}

const forecastOne = [17, 21, 23];
const forecastTwo = [12, 5, -5, 0, 4];

printForecast(forecastOne);
printForecast(forecastTwo);
*/