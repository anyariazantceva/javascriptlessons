// 1. Iterate 0 to 10 using for loop, do the same using while and do while loop.

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }

// let j = 0;
// do {
//     console.log(j);
//     j++;
// } while (j <= 10);

// 2. Iterate 10 to 0 using for loop, do the same using while and do while loop.
// for (let i = 10; i >= 0; i--) {
//     console.log(i);
// }

// let i = 10;
// while (i >= 0) {
//     console.log(i);
//     i--;
// }

// let j = 10;
// do {
//     console.log(j);
//     j--;
// } while (j >= 0);

/* 3. Write a loop that makes seven calls to console.log to output the following triangle:
    #
    ##
    ###
    ####
    #####
    ######
    ####### */


for (let i = 1; i <= 7; i++) {

    for (let j = 1; j <= i; j++) {
        document.write('#');
    }
    document.write('<br/>');

}

// 4. Iterate the array, ['HTML', 'CSS', 'JavaScript'] using a for loop and print out the items.
let arrTech = ['HTML', 'CSS', 'JavaScript'];

for (let i = 0; i < arrTech.length; i++) {
    console.log(arrTech[i]);
}

// 5. Use for loop to iterate from 0 to 100 and print only even numbers

// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// 6. Use for loop to iterate from 0 to 100 and print only odd numbers

// for (let i = 0; i <= 100; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }

// 7. Use for loop to iterate from 0 to 100 and print and print the sum of all numbers.
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
}
console.log(sum);

// 8. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let sumEven = 0;
let sumOdd = 0;

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        sumEven += i;
    } else {
        sumOdd += i;
    }

}

console.log(sumEven);
console.log(sumOdd);