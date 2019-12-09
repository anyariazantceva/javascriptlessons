// 1. Declare a variable name company and assign it to an initial value 'Coding Academy'.
let company = 'Coding Academy ';

// 2. Print the string on the browser console using console.log()
console.log(company);

// 3. Print the length of the string on the browser console using console.log()
console.log(company.length);

// 4. Change all the string to capital letters using toUpperCase() method
console.log(company.toUpperCase());

// 5. Change all the string to lowercase letters using toLowerCase() method
console.log(company.toLowerCase());

// 6. Cut(slice) out the first word of the string using slice, substr() or substring() method
console.log(company.slice(0, 6));
console.log(company.substring(6, 0));
console.log(company.substr(0, 6));

// 7. Use substr to slice out the phase because because because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let phraseOne = 'You cannot end a sentence with because because because is a conjunction';
console.log(phraseOne.substr(30, 24));

//  8. Check if the string contains a word Academy using includes() method
console.log(company.includes('Academy'));

// 9. Split the string into array using split() method
let newArray = company.split();
console.log(newArray);

// 10. Split the string Coding Academy at the space using split() method
let anotherArray = company.split(" ");
console.log(anotherArray);

// 11 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let secondStr = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
let secondArr = secondStr.split(',');
console.log(secondArr);

// 12. Change Coding Academy to Microsoft Academy using replace() method.
let diffStr = company.replace('Coding', 'Microsoft');
console.log(diffStr);

// 13. What is character at index 10 in 'Coding Academy' string use charAt() method.
console.log(company.charAt(9));

// 14. What is the character code of A in 'Coding Academy' string using charCodeAt()
console.log(company.charCodeAt('A'));

// 15. Use indexOf to determine the position of the first occurrence of c in Coding Academy
console.log(company.indexOf('C'));

// 16. Use lastIndexOf to determine the position of the last occurrence of c in Coding Academy.
console.log(company.lastIndexOf('C'));

// 17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(phraseOne.indexOf('because'));

// 18. Use lastIndexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(phraseOne.lastIndexOf('because'));

// 19. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(phraseOne.search('because'));

// 20. Use trim() to remove if there is trailing whitespace at the beginning and the end of a string.E.g ' Coding Academy '.
let spacedStr = '   Coding Academy    ';
console.log(spacedStr.trim());

// 21. Use startsWith() method with the string Coding Academy make the result true
console.log(company.startsWith('Coding'));

// 22. Use endsWith() method with the string Coding Academy make the result true
console.log(company.endsWith('Coding Academy'));

// 23. Use match() method to find all the c’s in Coding Academy
console.log(company.match(/c/gi));

// 24. Use match() to count the number all because's in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(phraseOne.match(/because/gi));

// 25. Use concat() and merge 'Coding' and 'Academy' to a single string, 'Coding Academy'
let code = 'Coding ';
let ac = 'Academy';

let newPhrase = code.concat(ac);
console.log(newPhrase);

// 26. Use repeat() method to print Coding Academy 5 times
console.log(company.repeat(5));

// 27. Calculate the total annual income of the person by extract the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let phraseThree = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let phraseArr = phraseThree.split(' ');
console.log(phraseArr);

let salarySum = +phraseArr[2] + +phraseArr[8] + +phraseArr[12];
console.log(salarySum);