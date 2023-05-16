// Question1

let city = prompt(`Enter your city:`);

if (city === `Karachi` || `karachi`) {
    alert(`Welcome to city of lights`);
}



// Question2

let gender = prompt(`Your gender:`);

if (gender === `male`) {

    alert(`Good Morning Sir`);

} else if (gender === `female`) {

    alert(`Good Morning Ma'am`);
}




// Question3

let color = prompt(`Enter color of traffic signal:`);

if (color == `red`) {

    alert(`Must Stop!`);

} else if (color == `yellow`) {

    alert(`Ready to move`);

} else if (color == `green`) {

    alert(`Move now`);

} else {

    alert(`This color does not exist in traffic signals`);
}



// Question4 

let fuel = +prompt(`Enter remaining fuel in car (in litres):`);

if (fuel < 0.25) {
    alert(`Please refill your car`);
}




// Question5
    
// a) if condition is true and it displays the message
// b) if condition is false and it does not display the message
// c) It displays 2 alerts "Condition 2 is true" and "Condition 4 is true"
// d) if condition is true and it displays the message "the cost equals"
// e) if condition is true and it displays true
// f) if condition is true and it displays the message "car is smaller than cat"






// Question6

let js = +prompt(`Enter marks obatined in JavaScript:`);
let react = +prompt(`Enter marks obatined in ReactJS:`);
let node = +prompt(`Enter marks obatined in NodeJS:`);
let totalMarks = +prompt(`Enter total marks:`);
let obtMarks, percentage, grade, remarks;

obtMarks = js + react + node;
percentage = (obtMarks / totalMarks) * 100;

if (percentage >= 80) {

    grade = `A-one`;
    remarks = `Excellent`;

} else if (percentage >= 70) {

    grade = `A`;
    remarks = `Good`;

} else if (percentage >= 60) {

    grade = `B`;
    remarks = `You need to improve`;

} else if (percentage < 60) {

    grade = `Fail`;
    remarks = `Sorry`;

}

document.write(`<h1>Marks Sheet</h1><br>`);
document.write(`Total marks: ${totalMarks} <br>`);
document.write(`Marks obtained: ${obtMarks} <br>`);
document.write(`Percentage: ${percentage} <br>`);
document.write(`Grade: ${grade} <br>`);
document.write(`Remarks: ${remarks} <br>`);





// Question7

let secret = 5; num = 6, guess = +prompt(`Guess the secret number:`);

if (guess == secret) {

    alert(`Bingo! Correct answer`);

} else if (guess == num) {

    alert(`Close enough to the correct number`);

} else {

    alert(`Wrong answer`);

}




// Question8

let checkNum = +prompt(`Enter a number to check if it is divisible by 3:`);

if (checkNum % 3 === 0) {

    alert(`Given number is divisible by 3`);

} else {

    alert(`Given number is not divisible by 3`);

}




// Question9

let evenOdd = +prompt(`Enter a number to check if it is even or odd:`);

if (evenOdd % 2 === 0) {

    alert(`Given number is even`);

} else {

    alert(`Given number is odd`);

}




// Question10

let t = +prompt(`Enter temperature:`);

if (t > 40) {

    alert(`It is too hot outside.`);

} else if (t > 30) {

    alert(`The Weather today is Normal`);

} else if (t > 20) {

    alert(`Today's Weather is cool`);

} else if (t > 10) {

    alert(`OMG! today's Weather is so cool`);

}




// Question11

let num1 = +prompt(`Enter first number:`), operator = prompt(`Operation (+, -, *, /, %):`), num2 = +prompt(`Enter second number:`), ans;

if (operator === '+') {

    ans = num1 + num2;

} else if (operator === '-') {

    ans = num1 - num2;

} else if (operator === '*') {

    ans = num1 * num2;

} else if (operator === '/') {

    ans = num1 / num2;

} else if (operator === '%') {

    ans = num1 % num2;

} else {

    alert(`Wrong operator entered`);

}

alert(`Answer: ` + ans);
