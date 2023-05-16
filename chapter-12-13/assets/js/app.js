// Question1

let char = prompt(`Enter a character (number or string):`);

if (char >= 0) {

    console.log(`Given input is a number`);

} else if (char >= `a` && char <= `z`) {

    console.log(`Given input is a lower case letter`);

} else if (char >= "A" && char <= "Z") {

    console.log(`Given input is an upper case letter`);

}




// Question2

let userInputt = +prompt(`Enter first integer value:`);
let userInput2 = +prompt(`Enter second integer value:`);

if (userInputt > userInput2) {

    console.log(userInputt + ` is larger.`);

}
else if (userInputt < userInput2) {

    console.log(userInput2 + ` is larger.`);

} else if (userInputt === userInput2) {

    console.log(`Both the integers are equal`);

}






// Question3

let num = prompt(`Enter a number:`);

if (num > 0) {

    console.log(`Given number is positive`);

} else if (num < 0) {

    console.log(`Given number is negative`);

} else {

    console.log(`Given number is zero`);

}




// Question4

let letter = prompt(`Enter a letter (a to z)`), vowel;

if (letter == `a` || letter == `e` || letter == `i` || letter == `o` || letter == `u`) {

    vowel = true;
    console.log(vowel);

}
else {

    vowel = false;
    console.log(vowel);

}






// Question5

let correctPassword = `ahsan123`, userPassword = prompt(`Please enter your password`);

if (userPassword === correctPassword) {

    alert(`Correct! The password you entered matches the original password`);

} else {

    alert(`Incorrect Password`);

    // let storePass = userPassword;
    // console.log(storePass);

}





// Question6

var greeting;
var hour = 13;

if (hour < 18) {

    greeting = `Good day`;

} else {

    greeting = `Good evening`;

}





// Question7

let userInput = prompt("Enter an hour");

if (userInput === `0000`) {
    alert(`12 AM`);
}
else if (userInput === `0100`) {
    alert(`1 AM`);
}
else if (userInput === `0200`) {
    alert(`2 AM`);
}
else if (userInput === `0300`) {
    alert(`3 AM`);
}
else if (userInput === `0400`) {
    alert(`4 AM`);
}
else if (userInput === `0500`) {
    alert(`5 AM`);
}
else if (userInput === `0600`) {
    alert(`6 AM`);
}
else if (userInput === `0700`) {
    alert(`7 AM`);
}
else if (userInput === `0800`) {
    alert(`8 AM`);
}
else if (userInput === `0900`) {
    alert(`9 AM`);
}
else if (userInput === `1000`) {
    alert(`10 AM`);
}
else if (userInput === `1100`) {
    alert(`11 AM`);
}
else if (userInput === `1200`) {
    alert(`12 PM`);
}
else if (userInput === `1300`) {
    alert(`1 PM`);
}
else if (userInput === `1400`) {
    alert(`2 PM`);
}
else if (userInput === `1500`) {
    alert(`3 PM`);
}
else if (userInput === `1600`) {
    alert(`4 PM`);
}
else if (userInput === `1700`) {
    alert(`5 PM`);
}
else if (userInput === `1800`) {
    alert(`6 PM`);
}
else if (userInput === `1900`) {
    alert(`7 PM`);
}
else if (userInput === `2000`) {
    alert(`8 PM`);
}
else if (userInput === `2100`) {
    alert(`9 PM`);
}
else if (userInput === `2200`) {
    alert(`10 PM`);
}
else if (userInput === `2300`) {
    alert(`11 PM`);
}
else {
    alert(`12 PM`);
}

