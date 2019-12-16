const countries = ['Estonia', 'Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland'];
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 3. Use forEach to console.log each country in the countries array.
countries.forEach((country) => {
    console.log(country);
});

// 4. Use forEach to console.log each name in the names array.
names.forEach((name) => {
   console.log(name)
});

// 5. Use forEach to console.log each number in the numbers array.
numbers.forEach((number) => {
    console.log(number);
});

// 6. Use map to create a new array by changing each country to uppercase in the countries array;
let upperCountries = countries.map((country) => country.toUpperCase());
console.log(upperCountries);

// 7. Use map to create a new array by changing each number to square in the numbers array
let squaredNumbers = numbers.map((num) => num * num);
console.log(squaredNumbers);

// 8. Use map to change to each name to uppercase in the names array
let upperNames = names.map((name) => name.toUpperCase());
console.log(upperNames);

// 9. Use filter to filter out countries containing land.
let filteredCountries = countries.filter((country) => country.includes('land'));
console.log(filteredCountries);

// 10. Use filter to filter out countries having six character.
let sixArray = countries.filter((country) => country.length === 6);
console.log(sixArray);

// 11. Use filter to filter out countries containing six letters and more in the country array.
let moreArray = countries.filter((country) => country.length >= 6);
console.log(moreArray);

// 12. Use filter to filter out country start with 'E';
let eCountries = countries.filter((country) => country.startsWith('E'));
console.log(eCountries);

// 13. Chain two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
let newArrComp = countries.map((country) => country.toUpperCase()).filter((country) => country.includes('LAND'));
console.log(newArrComp);

// 14. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
function getStringLists (arr) {
    let newArr = arr.filter((item) => typeof item === 'string');
    return newArr;
}

console.log(getStringLists([1, 'Hello', true, 'My', 5, ' Ball']));

// 15. Use reduce to sum all the numbers in the numbers array.
let sumOfNumbers = numbers.reduce((sum, number) => sum + number);
console.log(sumOfNumbers);

// 16. Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
let phrase = countries.reduce((p, c) => p + c );

// 18. Use some to check if some names' length greater than seven in names array
const someArr = ['Thomas', 'Carolina', 'Nicholas'];
const checkSome = (element) => {
    return element.length > 7;
};

console.log(someArr.some(checkSome));

// 19. Use every to check if all the countries contain the word land

console.log(countries.every((el) => {
    return el.includes('land');
}));

// 21. Use find to find the first country containing only six letters in the countries array
console.log(countries.find(item => item.length === 6));

// 22. Use findIndex to find the position of the first country containing only six letters in the countries array
console.log(countries.findIndex(item => item.length === 6));

// 23. Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
console.log(countries.findIndex( item => item === 'Norway'));

// 24. Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
console.log(countries.findIndex(item => item === 'Russia'));

// 25. Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
// 15_countriesFilter.jsW












