let num1 = 31; // You can set this to any number
let num2 = 2;  // You can set this to any number

let multiply = num1 * num2; // This will multiply num1 and num2
console.log(multiply); // This will output 62

// Generate a random integer greater than 0
let random = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) + 1;

console.log(random); // This will output a random integer greater than 0

let num3 = 12; // Example value for num3
let num4 = 8;  // Example value for num4

let mod = num3 % num4; // This calculates the remainder of num3 divided by num4
console.log(mod); // This will output the remainder

// To ensure the remainder is 4, you can set num3 and num4 like this:
num3 = 12; // 12 % 8 = 4
num4 = 8; 

// Now you can confirm the value of mod
mod = num3 % num4;
console.log(mod); // This will output 4

let numbers = [1, 5, 10, 20, 15]; // 20 is the highest number in this set
let max = Math.max(...numbers); 
console.log(max); // This will output 20