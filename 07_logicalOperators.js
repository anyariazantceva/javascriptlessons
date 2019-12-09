// Check which statemens true and which are false?
// true
console.log(4 > 3 && 10 < 12);
// false
console.log(4 > 3 && 10 > 12);
// true
console.log(4 > 3 || 10 < 12);
// true
console.log(4 > 3 || 10 > 12);
// false
console.log(!(4 > 3));
// true
console.log(!(4 < 3));
// true
console.log(!(false));
// false
console.log(!(4 > 3 && 10 < 12));
// true
console.log(!(4 > 3 && 10 > 12));
// true
console.log(!(4 === '4'));