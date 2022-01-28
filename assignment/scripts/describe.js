// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}



*/

// 1. WRITE YOUR DESCRIPTION HERE
//We make a variable called number and make it equal to 1.
// Then we increment the number variable and the number is 2.
//If the number variable is greater or equal to 2, we console log 'yes'.
//


//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We make a variable called name and equal it to 'Dane'.
// If the name variable is an exact match to Mary, we console log 'Hi, Mary!'.
// If they are not exact match to Mary, we console log 'How do you do?'
//

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We make a variable secret.
// We make a number variable 123.
// If code is exact match or true to 123, make the variable secret equal to super and
// make the variable code equal to code times 2.
// If code is more than 250, make the variable secret equal to duper.
//

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/

//We make a boolean variable isStudent equal to true.
//We make a variable age equal to 34.
//We make a variable zip equal to 55407.
//If the variable isStudent is true and zip is more than 80000,
//we console log 'You're a student on the West Coast!'.
//Or else if the variable isStudent is false or age is less than 30,
// we console.log 'Wat are your hobbies?'
//Or else if the variable isStudent is an exact match to true, we console log
//'Welcome to Prime!'
//If all conditions are false, we console log 'How about the weather?'


// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*

//ColorOne should be set to 'blue'
let colorOne = 'red';

//ColorTwo should be set to 'red'
let colorTwo = 'blue';
let mix = true;

//Add colorTwo = 'purple' on the third line
if (mix === true) {
  colorOne = 'purple';
}
*/



//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*

//let time = 4
let temp = 40;
const time = 4;

// Change || to &&
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*

let age = 21;
const minAge = 21;

// Replace <= to >=
if(minAge <= age) {
//change console.log('no entry') to console.log('enter')
  console.log('no entry');
} else {
//change console.log('enter') to console.log('no entry')
  console.log('enter');
}
*/
