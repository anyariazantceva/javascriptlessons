// 1. Declare an empty array;
let emptyArr = [];

// 2. Declare an array with more than 5 number of items
let fiveArr = ['Hello', 'guys', 'it', 'me', 'apple', 'banana'];

// 3. Find the length of your array
console.log(fiveArr.length);

// 4. Get the first item, the middle item and the last item of the array
let firstElem = fiveArr[0];
let middleElem = fiveArr[fiveArr.length / 2];
let lastElem = fiveArr[fiveArr.length - 1];
console.log(`${firstElem} ${middleElem} ${lastElem}`);

// 5. Declare an array called mixedDataTypes,put different data types and in your array and the array size should be greater than 5
let mixedDataTypes = ['Mixed', 8, true, 'Once', '', 27];

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon.
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// 7. Print the array using console.log()
console.log(itCompanies);

// 8. Print the number of companies in the array
console.log(itCompanies.length);

// 9. Print the first company, middle and last company
console.log(itCompanies[0]);
console.log(itCompanies[itCompanies.length - 1]);
console.log(itCompanies[3]);

// 10. Print out each company
for (let i = 0; i<itCompanies.length; i++) {
    console.log(itCompanies[i]);
}

// 11. Change companies to uppercase and print them out
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i].toUpperCase());
}

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

let newArrTwo = itCompanies.join(', ');
console.log(`${newArrTwo} are big IT companies.`);

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found.

// let userCompany = prompt('Enter a company name...');
// const upperCompany = userCompany.charAt(0).toUpperCase() + userCompany.substring(1);
//
// if (itCompanies.includes(upperCompany)) {
//     console.log(upperCompany);
// } else {
//     console.log(`${upperCompany} is not found`);
// }

// 14. Filter out companies which have more than one 'o' without the filter method
let olArr = [];
for (let i = 0; i < itCompanies.length; i++) {
    if(itCompanies[i].match(/o/gi) === null) {
        // console.log("Too little 'O' letters in a company");
    } else if(itCompanies[i].match(/o/gi).length > 1) {
        olArr.push(itCompanies[i]);
    }

}
console.log(olArr);

// 15. Sort the array using sort() method

itCompanies.sort();
console.log(itCompanies);

// 16. Reverse the array without reverse method
let reversedArr = [];
for(let i = itCompanies.length - 1; i >= 0 ; i--) {
    reversedArr.push(itCompanies[i]);
}

console.log(reversedArr);

// 17. Reverse the array using reverse() method

let reversedArrTwo = itCompanies.reverse();
console.log(reversedArrTwo);

// 18. Slice out the first 3 companies from the array
let slicedFirst = itCompanies.splice(0,3);
console.log(slicedFirst);

// 19. Slice out the last 3 companies from the array
let slicedLast = itCompanies.slice(-3);
console.log(slicedLast);

// 20. Remove the first IT company from the array
itCompanies.shift();

// 21. Remove the last IT company from the array
itCompanies.pop();

// 22. Remove all IT companies
itCompanies.splice(0, itCompanies.length);
console.log(itCompanies);


