// 22. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

function addItem (item) {
    let arrItems = [];
    arrItems.push(item);
    return arrItems;
}

console.log(addItem('Hello'));

// 23. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
let removeArr = ['Hello', 'nice', 'go', 'cook'];
function removeItem (index) {
    removeArr.splice(index, 1);
    return removeArr
}

console.log(removeItem(1));

// 25. Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
function sumOfOdds (num) {
    let sumOdd = 0;
    for(let i = 0; i < num; i++) {
        if(i % 2 !== 0) {
            sumOdd+=i;
        }
    }
    return sumOdd;
}

console.log(sumOfOdds(40));

// 26. Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
function sumOfEven (num) {
    let sumEven = 0;
    for(let i = 0; i < num; i++) {
        if(i % 2 === 0) {
            sumEven += i;
        }
    }
    return sumEven;
}

console.log(sumOfEven(25));

// 27. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
// evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.
function evensAndOdds (num) {
    let evens = 0;
    let odds = 0;
    for(let i = 0; i < num; i++) {
        if(i % 2 !== 0) {
            odds+=i;
        } else {
            evens+=i;
        }
    }
    return evens + odds;
}

console.log(evensAndOdds(10));

// 28. Write a function which takes any number of arguments and return the sum of the arguments
// sum(1, 2, 3); // -> 6
// sum(1, 2, 3, 4); // -> 10
function sumArg (...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum
}

console.log(sumArg(10, 10, 5));
// Arrayof seven random numbers
function arrayRandom () {
    let arr = [];
    for(let i = 0; i < 7; i++) {
        arr.push(Math.floor(Math.random() * 11));
    }
    return arr;
}
console.log(arrayRandom());

// 29. Write a function which generates a randomUserIp.
const randomUserIp = () => Math.floor(Math.random() * 111);
console.log(randomUserIp());

// isEven
const isEven = (n) => {
    if(n % 2 === 0) {
        return true;
    }

};

console.log(isEven(20));

// 30. Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
// console.log(randomHexaNumberGenerator());
// '#ee33df'

const randomHexaNumberGenerator = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';

    for(let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

console.log(randomHexaNumberGenerator());

// 32. Declare a function name userIdGenerator.
// When this function is called it generates seven character id. The function return the id.

function userIdGenerator (c) {
    let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let randomId = '';

    for (let i = 0; i < c; i++) {
        randomId += chars[Math.floor(Math.random() * 62)];
    }

    return randomId;

}

console.log(userIdGenerator( 7));

// 33. Modify question number n . Declare a function name userIdGeneratedByUser.
// It doesn’t take any parameter but it takes two inputs using prompt().
// One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

function questionNumber (a, b) {
    let arr = [];
    for(let i = 0; i < b; i++) {
         arr.push(userIdGenerator(a));
    }
    return arr;

}

console.log(questionNumber(5, 3));

// 34. Write a function name rgbColorGenerator and it generates rgb colors.
// rgbColorGenerator()
// rgb(125,244,255)

function randomRgb () {
    let num = Math.floor(Math.random() * 255);
    return num;
}

const rgbColorGenerator = () => {
    let firstPar = randomRgb();
    let secondPar = randomRgb();
    let thirdPar = randomRgb();
    let randomRgbNum = `rgb(${firstPar},${secondPar},${thirdPar})`;

    return randomRgbNum;
};

console.log(rgbColorGenerator());

// 35. Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

const arrayOfHexaColors = (num) => {
    let hexaArr = [];
    for(let i = 0; i < num; i++) {
        hexaArr.push(randomHexaNumberGenerator());
    }
    return hexaArr;
};

console.log(arrayOfHexaColors(5));

// 36. Write a function arrayOfRgbColors which return any number of RGB colors in an array.
const arrayOfRgbColors = (num) => {
    let rgbArr = [];
    for(let i = 0; i < num; i++) {
        rgbArr.push(rgbColorGenerator());
    }
    return rgbArr;
};

console.log(arrayOfRgbColors(3));

// 40. Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

function shuffleArray (arr) {
    arr.sort(function() {
        return 0.5 - Math.random();
    });
    return arr;
}

console.log(shuffleArray([28, 3, 10, 5, 4]));

// 41. Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
function findFactorial (num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}

console.log(findFactorial(3));

// 42. Call your function isEmpty, it takes a parameter and it checks if it is empty or not

function isEmpty (a) {
    if(a === null || a === '' || a === 0) {
        return 'Is empty';
    } else {
        return "Is not empty";
    }
}

console.log(isEmpty());

// 43. Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items.
// Check if all the array items are number types. If not give return reasonable feedback.

const sumOfArrayItems = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {

        if (typeof arr[i] === 'number') {
            sum += arr[i];

        } else {
            return 'Not all items are numbers in the array'
        }
    }
    return sum;
};

console.log(sumOfArrayItems([12, 4, 3]));

// 45. Write a function called average, it takes an array parameter and returns the average of the items.
// Check if all the array items are number types. If not give return reasonable feedback.

const findAverage = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            sum += arr[i];

        } else {
            return 'Not all items are numbers in the array'
        }
    }
    return sum / arr.length;
};

console.log(findAverage([10, 12, 15, 38]));

// 46. Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array.
// If the array length is less than five it return 'item not found'.

const modifyArray = (arr) => {
    if(arr.length < 5) {
        return 'Item not found';
    } else {
        let deleteElem = arr.splice(4, 1)[0].toUpperCase();
        console.log(deleteElem);
        arr.splice(4, 0, deleteElem);
    }
    return arr

};

console.log(modifyArray(['Hello', 'I', 'Table', 'Ball', 'News', 'dog']));

// 47. Write a function called isPrime, which checks if a number is prime number.
function isPrime (n) {
    if(n > 0 && n % n === 0 && n / 1 === n) {
        return 'Is Prime number'
    } else {
        return 'Is not'
    }
}

console.log(isPrime(5));

// 48. Write a functions which checks if all items are unique in the array.


