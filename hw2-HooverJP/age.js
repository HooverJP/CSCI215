// Name: Joshua Hoover //
//  <age> // // Purpose: This program is supposed to take the age from a user and calculate what it will be in five years and what it was five years ago
// // Certification of Authenticity: I certify that this program is entirely my own work.
// // Input: The input of this program will be the users name and their age // Output: The output will be three messages, one saying hello to your name, and then your age in five years and the age five years ago

let userName = prompt("What is your name?");

let resultDiv = document.getElementById("result");
resultDiv.innerHTML = `<p>Hello, ${userName}!</p>`;

let userAge = prompt("What is your age?");
userAge = parseInt(userAge);

let futureAge = userAge + 5;
let pastAge = userAge - 5;

resultDiv.innerHTML += `In five years, you will be ${futureAge} years old.` 
resultDiv.innerHTML += `Five years ago, you were ${pastAge} years old.`