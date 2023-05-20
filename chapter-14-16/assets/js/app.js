// Question1

let emptyArray = [];




// Question2

let emptyArray2 = [];





// Question3

let stringArray = [`Red`, `Teal`, `Green`, `Yellow`, `Black`, `White`, `Blue`];




// Question4

let numArray = [1, 2, 3, 4, 5, 6, 7];





// Question5

let booleanArray = [true, false, false, false, true, true, false, true];





// Question6

let mixedArray = [1, false, `1711F1`, 99, 24, 30, `Brown`, 21, true];





// Question7

let qualifications = [`SSC`, `HSC`, `BCS`, `BS`, `B.COM`, `MS`, `M.Phill`, `PhD`];

document.write(`<ol><li>${qualifications[0]}</li><li>${qualifications[1]}<li>${qualifications[2]}<li>${qualifications[3]}<li>${qualifications[4]}<li>${qualifications[5]}<li>${qualifications[6]}<li>${qualifications[7]}</li></ol><br/><br/><br/>`);





// Question 8

let std = [`Bushra`, `Zehra`, `Moazzam`];
let stdMarks = [450, 470, 430];
let totalMarks = 500;

let percentage0 = stdMarks[0] / totalMarks * 100;
let percentage1 = stdMarks[1] / totalMarks * 100;
let percentage2 = stdMarks[2] / totalMarks * 100;
//let percentage = [stdMarks[0] / totalMarks * 100, stdMarks[1] / totalMarks * 100, stdMarks / totalMarks * 100];

document.write(`Score of ${std[0]} is ${stdMarks[0]}. Percentage: ${percentage0}%<br/>`);
document.write(`Score of ${std[1]} is ${stdMarks[1]}. Percentage: ${percentage1}%<br/>`);
document.write(`Score of ${std[2]} is ${stdMarks[2]}. Percentage: ${percentage2}%<br/><br/><br/>`);




// Question9

let colorArray = [`Red`, `Teal`, `Green`, `Yellow`, `Black`, `White`, `Blue`];
document.write(`Decalred Array: ${colorArray} <br/><br/>`);

let addColoratStart = prompt(`What color you wish to add to the begining of array?`);
colorArray.unshift(addColoratStart);
document.write(`Color addition at start: ${colorArray} <br/><br/>`);

let addColoratEnd = prompt(`What color you wish to add to the end of array?`);
colorArray.push(addColoratEnd);
document.write(`Color addition at end: ${colorArray} <br/><br/>`);

let addColor1atStart = prompt(`Add first color at start:`);
let add2Color2atStart = prompt(`Add second color at start:`);
colorArray.unshift(addColor1atStart, add2Color2atStart);
document.write(`Color addition at start: ${colorArray} <br/><br/>`);

colorArray.shift();
document.write(`Color deleted at start: ${colorArray} <br/><br/>`);

colorArray.pop();
document.write(`Color deleted at end: ${colorArray} <br/><br/>`);

let arrAddIndex = +prompt(`At which index you wish to add a color?`);
let addIndexedColor = prompt(`Name of color you wish to add at index ${arrAddIndex}`);
colorArray.splice(arrAddIndex, 0, addIndexedColor);
document.write(`Color added at index ${arrAddIndex}: ${colorArray} <br/><br/>`);

let arrDelIndex = +prompt(`At which index you wish to delete a color?`);
let arrDelRangeIndex = +prompt(`How many colors you wish to delete from index ${arrDelIndex}?`);
colorArray.splice(arrDelIndex, arrDelRangeIndex);
document.write(`${arrDelRangeIndex} colors deleted starting from index ${arrDelIndex}: ${colorArray} <br/><br/><br/>`);




// Question10

let stdScore = [320, 230, 480, 120];

document.write(`Scores of Students: ${stdScore}<br/>`);

stdScore.sort();

document.write(`Ordered score of Students: ${stdScore}<br/><br/><br/>`);




// Question11

let cities = [`Karachi`, `Lahore`, `Islamabad`, `Quetta`, `Peshawar`];
document.write(`Cities List: <br>${cities}<br><br>`);

let selectedCities = cities.slice(2, 4);
document.write(`Selected cities list: <br>${selectedCities}<br><br/><br/>`);




// Question12

let arrayJoin=[`This`,`is`,`my`,`cat`];
document.write(`Array: <br>${arrayJoin}<br><br/>`);

let joinedArray=arrayJoin.join(` `);
document.write(`String: <br>${joinedArray}<br><br/><br/>`);





// Question13

let fifo = [`keyboard`,`mouse`,`printer`,`monitor`];
document.write(`Devices: <br>${fifo}<br><br>`);

let shift1=fifo.shift();
document.write(`Out: <br>${shift1}<br>`);

let shift2=fifo.shift();
document.write(`Out: <br>${shift2}<br>`);

let shift3=fifo.shift();
document.write(`Out: <br>${shift3}<br>`);

let shift4=fifo.shift();
document.write(`Out: <br>${shift4}<br>`);




// Question14

let lifo = [`keyboard`,`mouse`,`printer`,`monitor`];
document.write(`Devices: <br>${lifo}<br><br>`);

let pop1=lifo.pop();
document.write(`Out: <br>${pop1}<br>`);

let pop2=lifo.pop();
document.write(`Out: <br>${pop2}<br>`);

let pop3=lifo.pop();
document.write(`Out: <br>${pop3}<br>`);

let pop4=lifo.pop();
document.write(`Out: <br>${pop4}<br><br><br>`);




// Question15

let manufactures=[`Apple`,  `Samsung`,`Motorola`,`Nokia`,`Sony`,`Haier`];

document.write(`<select>
                <option>${manufactures[0]}</option>
                <option>${manufactures[1]}</option>
                <option>${manufactures[2]}</option>
                <option>${manufactures[3]}</option>
                <option>${manufactures[4]}</option>
                <option>${manufactures[5]}</option>
                </select>`);





