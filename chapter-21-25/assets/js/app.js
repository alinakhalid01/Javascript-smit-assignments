// Question1

let fname = prompt(`Enter your first name:`);
let lname = prompt(`Enter your last name:`);
let fullName = fname + ` ` + lname;

alert(`Good Evening ${fullName}!`);





// Question2

let model = prompt(`Enter your favorite mobile phone model:`);
let inputLength = model.length;

document.write(`My favorite phone is: ${model}<br>`);
document.write(`Length of string: ${inputLength}<br><br><br>`);





// Question3

let stringg = `Pakistani`;
let indexNum = stringg.indexOf(`n`);

document.write(`String: ${stringg}<br>`);
document.write(`Index of 'n': ${indexNum}<br><br><br>`);





// Question4

let stringgg = `Hello World`;
let lastIndex = stringgg.lastIndexOf(`l`);

document.write(`String: ${stringgg}<br>`);
document.write(`Index of 'l': ${lastIndex}<br><br><br>`);





// Question5

let str = `Pakistani`;
let findChar = str.charAt(3);

document.write(`String: ${str}<br>`);
document.write(`Character at index 3: ${findChar}<br><br><br>`);





// Question6

let f_name = prompt(`Enter your first name:`);
let l_name = prompt(`Enter your last name:`);
let full_Name = f_name.concat(` `, l_name);

alert(`Good Evening ${full_Name}!`);





// Question7

let cityy = `Hyderabad`;
let newCity = cityy.replace(`Hyder`, `Islam`);

document.write(`City: ${cityy}<br>`);
document.write(`After replacement: ${newCity}<br><br><br>`)





// Question 8

let message = `Ali and Sami are best friends. they play cricket and football together.`;
let newMessage = message.replace(/and/g, `&`);

document.write(`${newMessage}<br><br><br>`);





// Question 9

let strr = `472`;

document.write(`Value: ${strr}<br>`);
document.write(`Type: ` + typeof (strr) + `<br>`);

let numm = Number(strr);

document.write(`Value: ${numm}<br>`);
document.write(`Type: ` + typeof (numm) + `<br><br><br>`);





// Question 10

let word = prompt(`Enter a word to change in upper case:`);
let upperCase = word.toUpperCase();

document.write(`User input: ${word}<br>`);
document.write(`Upper case: ${upperCase}<br><br><br>`);




// Question 11

let wordd = prompt(`Enter a word to change in title case:`);
let firstLetter = wordd.slice(0, 1);
firstLetter = firstLetter.toUpperCase();

let restLetters = wordd.slice(1);
restLetters = restLetters.toLowerCase();

let titleCase = firstLetter.concat(restLetters);

document.write(`User input: ${wordd}<br>`);
document.write(`Title case: ${titleCase}<br><br><br>`);




// Question 12

let num = 35.36;
let numToStr = num.toString();

let result = numToStr.replace(`.`, ``);

document.write(`Number: ${num}<br>`);
document.write(`Result: ${result}<br><br><br>`);




// Question 13

let username = prompt(`Enter username:`);
let char;

for (let i = 0; i <= username.length; i++) {

  char = username.charCodeAt(i);

  if (char === 33 || char === 44 || char === 46 || char === 64) {
    confirm(`Please enter a valid username!`);
  }
}




// Question 14

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




// Question 15

let password = prompt("Enter your password: ");
let passwordLength = false;
let passwordChar = false;
let passwordInt = false;
let passwordStart = true;

document.write(`Entered Password: ${password}<br>`)

for (i = 0; i < password.length; i++) {

  let charValue = password[i].charCodeAt(0);

  if (charValue >= 65 && charValue <= 90) {
    passwordChar = true;
  }

  else if (charValue >= 97 && charValue <= 122) {
    passwordChar = true;
  }
}

for (i = 0; i < password.length; i++) {

  let charValue = password[i].charCodeAt(0);

  if (charValue >= 48 && charValue <= 57) {
    passwordInt = true;
  document.write(`Password cannot begin with a number<br>`)

  }
}

let charValue = password.charCodeAt(0);

if (charValue >= 48 && charValue <= 57) {
  passwordStart = false;
}

if (password.length >= 6) {
  passwordLength = true;
}

if (passwordChar === false || passwordInt === false || passwordLength === false || passwordStart === false) {
  alert("Enter valid Password");
}

else {
  alert("Correct password");
}




// Question 16

let university = `University of Karachi`;
let arrUni = university.split(``);

for (let i = 0; i <= arrUni.length - 1; i++) {
  document.write(arrUni[i] + `<br>`);
}

document.write(`<br><br><br>`);




// Question 17

let userInput = prompt(`Enter something to display its last character: `);
let lastChar = userInput.charAt(userInput.length - 1);

document.write(`User input: ${userInput}<br>`);
document.write(`Last character of input: ${lastChar}<br><br><br>`);




// Question 18

let text = `The quick brown fox jumps over the lazy dog`;
let textt = text.toLowerCase();
let matchWord = textt.match(/the/g);
let countWord = matchWord.length;

document.write(`Text: ${text}<br>`);
document.write(`There are ${countWord} occurencce(s) of word '${matchWord[0]}'`);
