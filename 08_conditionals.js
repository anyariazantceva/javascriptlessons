/* 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:
You are old enough to drive but if not 18 give feedback to wait for the years he supposed to wait for. Output:
Enter your age: 30
You are old enough to drive.*/

// let userAge = prompt('enter your age');
// let defaultAge = 18;

// if (userAge >= defaultAge) {
//     console.log('You are old enough to drive');
// } else {
//     let diff = defaultAge - userAge;
//     console.log(`You have to wait ${diff} years to drive`);
// }

// /* 2. Compare the values of myAge and yourAge using if … else. Based on the comparison log to console who is older (me or you). Use prompt(“Enter your age:”) to get the age as input. Output:
// Enter your age: 30
// You are 5 years older than me. */

// let myAge = 27;
// let userNew = prompt('Enter your age please');
// if (userAge < myAge) {
//     let leftAge = myAge - userNew;
//     console.log(`You are ${leftAge} younger than me`);
// } else if (userNew === myAge) {
//     console.log('You are exactly the same age as me');
// } else {
//     let leftAge = userNew - myAge;
//     console.log(`You are ${leftAge} years older than me`);
// }

/* 3. If a is greater than b return a is greater than b else a is less than b. 
Output: sh let a = 4; let b = 3; 4 is greater than 3 */
// let a = prompt('Enter A number');
// let b = prompt('Enter B number');

// a > b ? console.log('A is greater than B') : console.log('A is less than B');

/* 4. Write a code which give grade students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0 -49, F */

let studentScore = prompt('enter your score');

if (studentScore >= 80 && studentScore <= 100) {
    console.log('Your grade is A');
} else if (studentScore >= 70 && studentScore <= 89) {
    console.log('Your grade is B');
} else if (studentScore >= 60 && studentScore <= 69) {
    console.log('Your grade is C');
} else if (studentScore >= 50 && studentScore <= 59) {
    console.log('Your grade is D');
} else {
    console.log('Your grade is F');
}

/* 5. Check if the season is Autumn, Winter, Spring or Summer. If the user input is:
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer */

let monthName = prompt('Enter a month please');

switch (monthName) {
    case 'september':
    case 'october':
    case 'november':
        console.log('The season is Autumn');
    case 'december':
    case 'january':
    case 'february':
        console.log('The season is Winter');
    case 'march':
    case 'april':
    case 'may':
        console.log('The season is Spring');
    case 'june':
    case 'july':
    case 'august':
        console.log('The season is Summer');
}