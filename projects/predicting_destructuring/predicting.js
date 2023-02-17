// ---------- Problem 1 -------------
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars

console.log(randomCar)
// Tesla
console.log(otherRandomCar)
// Mercedes

// ---------- Problem 2 -------------
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;

console.log(name);
// prints nothing
console.log(otherName);
// Elon

// ---------- Problem 3 -------------
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  

console.log(password);
// 12345
console.log(hashedPassword);
// undefined

// ---------- Problem 4 -------------
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; // first = 2
const [,,,second] = numbers; // second = 5
const [,,,,,,,,third] = numbers; // third = 2

console.log(first == second);
// false
console.log(first == third);
// true

// ---------- Problem 5 -------------
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;

console.log(key);
// value
console.log(secondKey);
// [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]);
// 1
console.log(willThisWork);
// 5

