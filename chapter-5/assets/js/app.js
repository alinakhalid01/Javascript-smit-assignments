// Question1

let num1 = 3, num2 = 5, sum;

sum = num1 + num2;

document.write(`Sum of ${num1} and ${num2} is ${sum}<br/><br/>`);



// Question2

let sub, mul, div, mod;

sub = num1 - num2;
mul = num1 * num2;
div = num1 / num2;
mod = num1 % num2;

document.write(`Subtraction of ${num1} and ${num2} is ${sub}<br/>`);
document.write(`Multiple of ${num1} and ${num2} is ${mul}<br/>`);
document.write(`Division of ${num1} and ${num2} is ${div}<br/>`);
document.write(`Modulus of ${num1} and ${num2} is ${mod}<br/><br/><br/>`);




// Question3

let numVariable;

document.write(`Value after variable declaration is ${numVariable}<br/>`);

numVariable = 5;
document.write(`Initial value: ${numVariable}<br/>`);

numVariable++;
document.write(`Value after increment is: ${numVariable}<br/>`);

numVariable += 7;
document.write(`Value after addition is: ${numVariable}<br/>`);

numVariable--;
document.write(`Value after decrement is: ${numVariable}<br/>`);

numVariable %= 3;
document.write(`Ther remainder is: ${numVariable}<br/><br/><br/>`);



// Question4 

let movieTicket = 600, totalTicketCost;

totalTicketCost = movieTicket * 5;

document.write(`Total cost to buy 5 tickets to a movie is: ${totalTicketCost}PKR<br/><br/><br/>`);



// Question5

document.write(`Table of 6 <br/>`);
document.write(`6x1=` + 6 * 1 + `<br/>`);
document.write(`6x1=` + 6 * 2 + `<br/>`);
document.write(`6x1=` + 6 * 3 + `<br/>`);
document.write(`6x1=` + 6 * 4 + `<br/>`);
document.write(`6x1=` + 6 * 5 + `<br/>`);
document.write(`6x1=` + 6 * 6 + `<br/>`);
document.write(`6x1=` + 6 * 7 + `<br/>`);
document.write(`6x1=` + 6 * 8 + `<br/>`);
document.write(`6x1=` + 6 * 9 + `<br/>`);
document.write(`6x1=` + 6 * 10 + `<br/><br/><br/>`);




// Question6

let celsius = 36, fahrenheit;

fahrenheit = (celsius * 9 / 5) + 32;

document.write(`${celsius}\u00B0C is ${fahrenheit}\u00B0F <br>`);

let fahrenheitt = 87, celsiuss;

celsiuss = (fahrenheitt - 32) * 5 / 9;

document.write(`${fahrenheitt}\u00B0C is ${celsiuss}\u00B0F <br><br><br>`);




// Question7

let item1 = 650, item2 = 100, qty1 = 3, qty2 = 7, shipping = 100, totalCost;

totalCost = (item1 * qty1) + (item2 * qty2) + shipping;

document.write(`Price of item 1 is ${item1} <br>`);
document.write(`Quantity of item 1 is ${qty1} <br>`);
document.write(`Price of item 2 is ${item2} <br>`);
document.write(`Quantity of item 2 is ${qty2} <br>`);
document.write(`Shipping Charges ${shipping} <br><br>`);
document.write(`Total cost of your order is ${totalCost} <br><br><br>`);




// Question8

let totalMarks = 980, obtMarks = 804, percentage;

percentage = (obtMarks / totalMarks) * 100;

document.write(`Total marks: ${totalMarks} <br>Marks obtained: ${obtMarks} <br>Percentage: ${percentage}% <br><br><br>`);




// Question9

let dollars = 10, riyals = 25, totalRupees;

totalRupees = (dollars * 104.80) + (riyals * 28);

document.write(`<h1>Currency in PKR</h1><br>Total Currency in PKR: ${totalRupees}<br><br><br>`);




// Question10

const flag = 3;
console.log((((flag + 5) * 10) / 2));



// Question11

let currYear = 2023, birthYear = 1999, age1, age2;

age1 = currYear - birthYear;
age2 = (currYear - birthYear) - 1;

document.write(`<h1>Age Calculator </h1><br>`);
document.write(`Current Year: ${currYear}<br>`);
document.write(`Birth Year: ${birthYear}<br>`);
document.write(`Your age is: ${age1}<br>`);
document.write(`They are either ${age1} or ${age2} years old.<br><br><br>`);





// Question12

let radius = 20, circumference, area;

circumference = 2 * Math.PI * radius;

area = Math.PI * radius ** 2;

document.write(`<h1>The Geometrizer </h1><br>`);
document.write(`Radius of a circle: ${radius}<br>`);
document.write(`The circumference is: ${circumference}<br>`);
document.write(`The area is: ${area}<br><br><br>`);





// Question13

let snack = "Cheetos", currAge = 15, maxAge = 65, snackAmount = 3, totalSnack;

totalSnack = (maxAge - currAge) * snackAmount;

document.write(`<h1>The Lifetime Supply Calculator </h1><br>`);
document.write(`Favorite Snack: ${snack}<br>`);
document.write(`Current age: ${currAge}<br>`);
document.write(`Estimated Maximum Age: ${maxAge}<br>`);
document.write(`Amount of snacks per day: ${snackAmount}<br>`);
document.write(`You will need ${totalSnack} ${snack} to last you until the ripe old age of ${maxAge}`);













