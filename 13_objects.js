// 1. Use the new Date() object to get month, date, year, hour and minute.

let date = new Date();
const month = date.getMonth() + 1;
const day = date.getDate();
const year = date.getFullYear();
const hour = date.getHours();
const minutes = date.getMinutes();

// 2. Write a function name displayDateTime which display time in this format: 10/03/2019 04:08

function displayDateTime () {
    return `${day}/${month}/${year} ${hour}:${minutes}`;
}
console.log(displayDateTime());

// Objects Exercises

// 1. Create an empty object called dog
let dog = {};

// 2.Print the the dog object on the console
console.log(dog);

// 3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = 'Bob';
dog.legs = 4;
dog.color = 'black';
dog.age = 5;
dog.bark = function () {
    return 'woof woof';
};

console.log(dog);

// 4. Get name, legs, color, age and bark value from the dog object
dog = {};
console.log(dog);

// 5. Set new properties the dog object: breed, getDogInfo
dog.breed = '';
dog.getDogInfo = '';

// 6. Create an object literal called personAccount.
// It has firstName, lastName, incomes, expenses properties and it has totalIncome,
// totalExpense, accountInfo,addIncome, addExpense and accountBalance methods.
// Incomes is a set of incomes and its description and the same for expenses.

let personAccount = {
    firstName: 'Anna',
    lastName: 'Riazantseva',
    incomes: { salary: 1000, tutor: 200},
    expenses: { food: 300, transport: 100},
    totalIncome: function () {
        return `Your total income is ${this.incomes.salary + this.incomes.tutor}`;
    },
    accountInfo: function () {
        return `The person is ${this.firstName} ${this.lastName}`;
    },
    addIncome: function (income) {
        this.incomes.income = 100;
    },
    addExpense: function (expense) {
        this.expenses.expense = 100;
    },
    accountBalance: function () {
        console.log(this.totalIncome() - (this.expenses.food + this.expenses.transport));
    }

};

console.log(personAccount.totalIncome());

// 7. Count logged in users,count users having greater than equal to 50 points from the following object.
const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
};

let newArr = Object.values(users);

function countLogged () {
    let count = 0;
    newArr.forEach((user) => {
        if(user.isLoggedIn === true) {
            count++;
        }
    });
    return count
}

function countPoints () {
    let countedPoints = 0;
    newArr.forEach((user) => {
        if(user.points === 50) {
            countedPoints++;
        }
    });
    return countedPoints;
}
console.log(countLogged());
console.log(countPoints());

// 8. Set your name in the users object without modifying the original users object
let newUsers = {...users, Anna: {
        email: 'anna@riazantseva.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Chinese'],
        age: 27,
        isLoggedIn: false,
        points: 35
    }};

console.log(newUsers);
console.log(users);

// 9. Get all keys or properties of users object

let usersKeys = Object.keys(users);
console.log(usersKeys);

// 10. Get all the values of users object
let usersValues = Object.values;
console.log(usersValues);
