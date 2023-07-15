// Question1

let emptyArray = [];

// Question2

let multiDimArray = [[22,33,44],[55,66,77],[88,99]];

// Question3

for (let i = 1; i <= 10; i++) {
  document.write(i + `<br>`);
}

document.write(`<br><br><br>`);

// Question4

const tblNum = +prompt(`Enter a number to show its multiplication table`);
const tblLength = +prompt(`Enter length for multiplication table`);

document.write(`Multiplication table of ${tblNum}<br>`);
document.write(`Length ${tblLength}<br><br>`);

for (let i = 1; i <= tblLength; i++) {
  document.write(`${tblNum} x ${i} = ` + tblNum * i + `<br>`);
}

document.write(`<br><br><br>`);

// Question5

let fruits = [`apple`, `banana`, `mango`, `orange`, `strawberry`];

for (let i = 0; i < fruits.length; i++) {
  document.write(fruits[i] + `<br>`);
}

document.write(`<br>`);

for (let i = 0; i < fruits.length; i++) {
  document.write(`Element at index ${i} is ${fruits[i]}<br>`);
}

document.write(`<br><br><br>`);

// Question6

document.write(`<h2>Counting:</h2>`);

for (let i = 1; i <= 15; i++) {
  document.write(i + `, `);
}

document.write(`<br>`);
document.write(`<h2>Reverse counting:</h2>`);

for (let i = 10; i >= 1; i--) {
  document.write(i + `, `);
}

document.write(`<br>`);
document.write(`<h2>Even:</h2>`);

for (let i = 0; i <= 20; i += 2) {
  document.write(i + `, `);
}

document.write(`<br>`);
document.write(`<h2>Odd:</h2>`);

for (let i = 1; i <= 19; i += 2) {
  document.write(i + `, `);
}

document.write(`<br>`);
document.write(`<h2>Series:</h2>`);

for (let i = 2; i <= 20; i += 2) {
  document.write(i + `k, `);
}

document.write(`<br><br><br>`);

// Question7

let stock = [`cake`, `apple pie`, `cookie`, `chips`, `patties`];

let input = prompt(
  `Welcome to ABC bakery. What do you want to order Sir/Ma'am?`
);
input = input.toLowerCase();

let search = false;

for (let i = 0; i <= stock.length; i++) {
  if (input === stock[i]) {
    alert(`${input} is available at index ${i} in our bakery`);
    search = true;
  }
}

if (search === false) {
  alert(`We are sorry. ${input} is not available in our bakery.`);
}

// Question 8

let array = [24, 53, 78, 91, 12];
let largest = array[0];

for (let i = 0; i <= array.length; i++) {
  if (array[i] > largest) {
    largest = array[i];
  }
}

document.write(`Array items: ${array}<br>`);
document.write(`The largest number is ${largest}<br><br><br>`);

// Question 9

let arrayy = [24, 53, 78, 91, 12];
let smallest = arrayy[0];

for (let i = 0; i <= arrayy.length; i++) {
  if (arrayy[i] < smallest) {
    smallest = arrayy[i];
  }
}
document.write(`Array items: ${arrayy} <br>`);
document.write(`The smallest number is ${smallest}<br><br><br>`);

// Question10

for (let i = 5; i <= 100; i += 5) {
  document.write(i + `, `);
}
