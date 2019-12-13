
// Area of Circle

const pi = Math.PI;
let area = 0;

function areaOfCircle(r) {
    area = pi * (r * r);
    console.log(area);
}

areaOfCircle(50);

// 1. Declare a function fullName and it print out your full name.

// function fullName(fullName) {
//     return fullName;
// }
//
// console.log(fullName('Anna Riazantseva'));

// 2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
const fullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`;
};

console.log(fullName('Bill', 'Smith'));

// Function sum of all numbers

const sumOfAllNumbers = (n) => {
    let sum = 0;
    for(let i = 0; i < n; i++) {
        sum+=i;
    }
    return sum;
};

console.log(sumOfAllNumbers(50));

// 3. Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(a, b) {
    let sum = a + b;
    return sum;
}
console.log(addNumbers(5, 5));

// find even numbers in the array

function findEvenNumbers (num) {
    let numArr = [];
    for (let i = 0; i < num; i++) {
        if(i % 2 === 0) {
            numArr.push(i);
        }
    }

    return numArr;
}

console.log(findEvenNumbers(200));

// 4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle (length, width) {
    let area = length * width;
    return area;
}

console.log(areaOfRectangle(24, 80));

// 5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

function perimeterOfRectangle(l, w) {
    let perimeter = 0;
    perimeter = 2 * (l + w);
    return perimeter
}

console.log(perimeterOfRectangle(100, 20));

// 6. A volume of a rectangular prism is calculated as follows: volume = length x width x height.
// Write a function which calculates volumeOfRectPrism.

function volumeOfRectPrism (l, w, h) {
    let volume = 0;
    volume = l * w * h;
    return volume;
}

console.log(volumeOfRectPrism(20, 40, 40));

// 7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle (r) {
    let area = Math.floor(Math.PI * r * r);
    return area;
}

console.log(areaOfCircle(60));

// 8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

function circumOfCircle (r) {
    let circum = 0;
    circum = Math.floor(2 * Math.PI * r);
    return circum;
}

console.log(circumOfCircle(50));

// 9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function calcDensity (mass, volume) {
    let density = 0;
    density = mass / volume;
    return density
}

console.log(calcDensity(20, 4));

// 10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken.
// Write a function which calculates a speed of a moving object, speed.

function calcSpeed (dist, time) {
    let speed = dist / time;
    return speed;

}

console.log(calcSpeed(100, 10));

// power number
const square = (n) => n * n;


console.log(square(2));

// 11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function gravity (mass, gravity) {
    return mass * gravity;
}

console.log(gravity(10, 10));

// 12.Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32.
// Write a function which convert oC to oF convertCelciusToFahrenheit.

function convertCelciusToFahrenheit (celcius) {
    let f = (celcius * 9/5) + 32;
    return f;
}

console.log(convertCelciusToFahrenheit(20));

// 13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi.
// BMI is used to broadly define different weight groups in adults 20 years old or older.
// Check if a person is underweight, normal, overweight or obese based the information given below.
// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more

function bmi (weight, height) {
    let mass = weight / (height * height);
    if(mass < 18.5) {
        return 'Underweight';
    } else if (mass >= 18.5 && mass <= 24.9) {
        return 'Normal weight';
    } else if (mass >= 25 && mass <= 29.9) {
        return 'Overweight';
    } else {
        return 'Obese';
    }
}

console.log(bmi(10, 20));

// 14. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
let checkSeason = (month) => {
    switch(month) {
        case 'january':
        case 'february':
        case 'december':
            return 'Winter';
            break;
        case 'march':
        case 'april':
        case 'may':
            return 'Spring';
            break;
        case 'june':
        case 'july':
        case 'august':
            return 'Summer';
            break;
        case 'september':
        case 'october':
        case 'november':
            return 'Autumn';
            break;

    }

};

console.log(checkSeason('april'));

// 15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
// console.log(findMax(0, 10, 5));
// 10;
// console.log(findMax(0, -10, -2));
// 0;

let findMax = (a, b, c) => {
    let max = Math.max(a, b, c);
    return max;
};
console.log(findMax(45, 10, 5));

// 16. Linear equation is calculated as follows: ax + b = c. Write a function which calculates value of a linear equation, solveLinEquation.
let solveLinEquation = (a, x, b) => {
  let c = a*x + b;
  return c;
};

console.log(solveLinEquation(5, 2, 1));

// sumNumbsInArray
const sumNumbsInArray = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum+=arr[i];

    }
    return sum
};
console.log(sumNumbsInArray([5, 4, 19, 12]));

// reverse Array

const reverseArray = (arr) => {
    let newArr = arr.reverse();
    return newArr;
};

console.log(reverseArray([1, 3, 8 , 9, 12]));


// 18. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

function printArray (arr) {
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    return arr;

}

console.log(printArray([2, 4, 1, 5, 6, 8]));

// 19. Declare a function name swapValues. This function swaps value of x to y.
// swapValues(3, 4); // x => 4, y=>3
// swapValues(4, 5); // x = 5, y = 4

function swapValues (x, y) {
    [x, y] = [y, x];
    return `${x} ${y}`;
}

console.log(swapValues(4, 5));

// 21.Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function capitalizedArray (arr) {
    let newArr = [];
    for(let i = 0; i<arr.length; i++) {
        newArr.push(arr[i].toUpperCase());
    }
    return newArr
}

console.log(capitalizedArray(['Apple', 'Ball', 'Lesson', 'Anything']));


