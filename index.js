"use strict";
//Question no 2:
let person1 = "jiya";
console.log("Hello!" + "   " + person1 + " would you like to learn some typescript?");
//Querstion no 3:
let personName = "Jiyaa";
// Lowercase
console.log("Lowercase:", personName.toLowerCase());
// Uppercase
console.log("Uppercase:", personName.toUpperCase());
// Titlecase (capitalize first letter of each word)
function toTitleCase(string) {
    return string.replace(/\b\w/g, (word) => word.toUpperCase());
}
console.log("Titlecase:", toTitleCase(personName));
//Question no 4:
console.log('Hazrat Muhammad (SAW) ne farmaya, "Kindness is a mark of faith, and whoever is not kind has no faith."');
//Question no 5:
let famous_person = "Quaid-e-Azam Muhammad Ali Jinnah";
let quotemessage = `A quote from ${famous_person}: "The power of women is greater than the sword and the pen."`;
console.log(quotemessage);
//Question no 6:
let nameWithWhitespace = "\tALEEB \n";
console.log("Name with whitespace:", nameWithWhitespace);
let strippedName = nameWithWhitespace.trim();
console.log("Stripped name:", strippedName);
//Question no 7:
console.log(5 + 3); // Addition: 5 + 3 = 8
console.log(15 - 7); // Subtraction: 15 - 7 = 8
console.log(4 * 2); // Multiplication: 4 * 2 = 8
console.log(16 / 2); // Division: 16 / 2 = 8
//Question no 8:
console.log(5 + 3);
console.log(4 + 4);
console.log(7 + 1);
console.log(6 + 2);
//Question no 9:
const myfavoriteNumber = 25; // Your favorite number
const Amessage = `My favorite number is ${myfavoriteNumber}.`;
console.log(Amessage);
//Question no 10:
const favoriteNumber = 42;
const message = `My favorite number is ${favoriteNumber}.`;
console.log(message);
// Add to get 8.
console.log(5 + 3);
// Subtract to get 8.
console.log(15 - 7);
// Multiply to get 8.
console.log(4 * 2);
// Divide to get 8.
console.log(16 / 2);
//Question no 11:
const names = ["sahar", "ayesha", "bisma", "bazlah"];
names.forEach(name => { console.log(name); });
//Question no 12:
const friendsnames = ["sahar", "ayesha", "bisma", "bazlah"];
names.forEach(name => { console.log(`Hello, ${name}! Come and have dinner with us.`); });
//Question no 13:
const transportation = ["motorcycle", "car", "ship", "bus"];
transportation.forEach(item => { console.log(`I would like to own a ${item}.`); });
//Question no 14:
const guestList = ["Zainab", "Rawish", "Arham"];
guestList.forEach(person => { console.log(`Dear ${person},\You are invited to dinner.\Sincerely, [JIYA]`); });
//Question no 15:
let newguestList = ["Zainab", "Rawish", "Arham"];
guestList.forEach(person => { console.log(`Dear ${person},\nYou are invited to dinner.\Sincerely, [Butt house]`); });
// Name of the guest who can't make it
const unableToAttend = guestList.shift();
console.log(`Unfortunately, ${unableToAttend} can't make it to dinner.`);
// Replace the name of the guest who can't make it with the name of the new person you are inviting
const newInvitee = "Aariz";
guestList.push(newInvitee);
// Print a second set of invitation messages
guestList.forEach(person => { console.log(`Dear ${person},\nYou are invited to dinner.\Sincerely, [Butt house]`); });
//Question no 16:
let aguestList = ["Zainab", "Rawish", "Arham"];
// Print the original set of invitation messages
for (const person of guestList) {
    console.log(`Dear ${person}, please come to dinner.`);
}
// Inform about the bigger dinner table
console.log("Good news! We found a bigger dinner table.");
// Add a new guest to the beginning of the array
guestList.unshift("Aariz");
// Calculate the middle index for inserting a new guest
const middleIndex = Math.floor(guestList.length / 2);
// Add a new guest to the middle of the array
guestList.splice(middleIndex, 0, "ahaan");
// Use push() to add one new guest to the end of the list
guestList.push("rohan");
// Print a new set of invitation messages
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, please come to dinner.`);
}
//Question no 17:
let nguestList = ["zaino", "rawish", "arham", "aariz", "ahaan", "rohan"];
// Print the original set of invitation messages
for (const person of guestList) {
    console.log(`Dear ${person}, please come to dinner.`);
}
// Inform that only two people can be invited
console.log("Sorry, we can only invite two people for dinner.");
// Remove guests until only two names remain
while (guestList.length > 2) {
    const removedGuest = guestList.pop();
    console.log(`Sorry ${removedGuest}, you're no longer invited to dinner.`);
}
// Print invitation messages to the remaining two people
for (const person of guestList) {
    console.log(`Dear ${person}, you're still invited to dinner.`);
}
// Remove the last two names from the list
guestList.pop();
guestList.pop();
// Print the final empty list
console.log("Final Guest List:", guestList);
//Question no 18:
// Array of places to visit
let places = ["Paris", "istabul", "london", "Dubai", "Tokyo"];
// Print original order
console.log("Original Order:");
console.log(places);
// Print alphabetical order without modifying the actual list
console.log("\nAlphabetical Order:");
console.log([...places].sort());
// Show original order is preserved
console.log("\nOriginal Order (unchanged):");
console.log(places);
// Print reverse alphabetical order without modifying the actual list
console.log("\nReverse Alphabetical Order:");
console.log([...places].sort().reverse());
// Show original order is preserved
console.log("\nOriginal Order (unchanged):");
console.log(places);
// Reverse the order of the list
places.reverse();
console.log("\nReversed Order:");
console.log(places);
// Reverse the order again to get back to the original order
places.reverse();
console.log("\nBack to Original Order:");
console.log(places);
// Sort the array in alphabetical order
places.sort();
console.log("\nSorted in Alphabetical Order:");
console.log(places);
// Sort the array in reverse alphabetical order
places.sort((a, b) => b.localeCompare(a));
console.log("\nSorted in Reverse Alphabetical Order:");
console.log(places);
//Question no 19:
// Example array of dinner guests
let dinnerGuests = ["Shoaib", "Rawish", "Aleeb", "rohan", "ahaan"];
// Print the number of dinner guests
console.log(`You are inviting ${dinnerGuests.length} people to dinner.`);
//Question no 20:
// Array containing names of differnt languages
let languages = [
    "Korean",
    "Chinese",
    "English",
    "French",
    "turkish"
];
// Print the array
console.log("List of different languages:");
console.log(languages);
//Question no 21:
// Define a TypeScript object representing a car
let car = {
    make: "Mercedes",
    model: "Mercedes-Benz S-Class",
    year: 2024,
    color: "Black"
};
// Print the car object
console.log("Car Information:");
console.log("Make:", car.make);
console.log("Model:", car.model);
console.log("Year:", car.year);
console.log("Color:", car.color);
//Question no 22:
// Array of fruits
let fruits = ["Apple", "Banana", "Orange"];
// create an index error
console.log(fruits[3]); // index error 
// Correcting the error 
console.log(fruits[2]); //third element (index 2) of the array
//Question no 23:
let cars = "subaru";
console.log("is car == 'subaru' && car.length == 6 ? I predict True");
console.log(cars == 'subaru');
//Question no 24:
// Tests for equality and inequality with strings
const string1 = "hello";
const string2 = "world";
console.log(string1 === string2); // False
console.log(string1 !== string2); // True
// Tests using the lower case function
const lowerCaseString = "Hello";
console.log(lowerCaseString.toLowerCase() === "hello"); // True
console.log(lowerCaseString.toLowerCase() !== "hello"); // False
// Numerical tests
const num1 = 5;
const num2 = 10;
console.log(num1 === num2); // False
console.log(num1 !== num2); // True
console.log(num1 > num2); // False
console.log(num1 < num2); // True
console.log(num1 >= num2); // False
console.log(num1 <= num2); // True
// Tests using "and" and "or" operators
const condition1 = true;
const condition2 = false;
console.log(condition1 && condition2); // False
console.log(condition1 || condition2); // True
// Test whether an item is in an array
const array = [1, 2, 3, 4, 5];
console.log(array.includes(3)); // True
console.log(array.includes(6)); // False
// Test whether an item is not in an array
console.log(!array.includes(6)); // True
console.log(!array.includes(3)); // False
//Question no 25:
let thealien_color = 'green';
if (thealien_color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
let alien_color = 'yellow'; // or 'red'
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
//Question no 26:
// if block (green alien)
let alienColor = 'green';
if (alienColor === 'green') {
    console.log("You just earned 5 points for shooting the green alien!");
}
else {
    console.log("You just earned 10 points!");
}
// the else block (non-green alien)
let NalienColor = 'red'; // Change the color to something other than green
if (alienColor === 'green') {
    console.log("You just earned 5 points for shooting the green alien!");
}
else {
    console.log("You just earned 10 points!");
}
//Question no 27:
let nalienColor = 'green';
if (alienColor === 'green') {
    console.log("The player earned 5 points.");
}
else if (alienColor === 'yellow') {
    console.log("The player earned 10 points.");
}
else if (alienColor === 'red') {
    console.log("The player earned 15 points.");
}
let newalienColor = 'yellow';
if (alienColor === 'green') {
    console.log("The player earned 5 points.");
}
else if (alienColor === 'yellow') {
    console.log("The player earned 10 points.");
}
else if (alienColor === 'red') {
    console.log("The player earned 15 points.");
}
let newaalienColor = 'red';
if (alienColor === 'green') {
    console.log("The player earned 5 points.");
}
else if (alienColor === 'yellow') {
    console.log("The player earned 10 points.");
}
else if (alienColor === 'red') {
    console.log("The player earned 15 points.");
}
//Question no 28:
let age = 30;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
//Question no 29:
let favoriteFruits = ['banana', 'apple', 'orange'];
if (favoriteFruits.includes('banana')) {
    console.log("You really like bananas!");
}
if (favoriteFruits.includes('apple')) {
    console.log("You really like apples!");
}
if (favoriteFruits.includes('orange')) {
    console.log("You really like oranges!");
}
if (favoriteFruits.includes('grapes')) {
    console.log("You really like grapes!");
}
else {
    console.log("Grapes are not one of my favorite fruits.");
}
if (favoriteFruits.includes('strawberry')) {
    console.log("You really like strawberries!");
}
else {
    console.log("strawberries are not one of my favorite fruits.");
}
//Question no 30:
let usernames = ['admin', 'atif', 'lalli', 'ali', 'saad'];
for (let username of usernames) {
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
//Question no 31:
let users = ["Jiyu", "Manno", "sami"];
if (users.length === 0) {
    console.log("We need to find some users!");
}
else {
    users = []; // Removing all usernames from the array
    console.log("All usernames have been removed.");
}
//Question no 32:
// current users
const current_users = ["jia", "fatima", "", "Makiya", "hani"];
//  new users
const new_users = ["arif", "aly", "soni", "maary", "jon"];
// Function to check if username is unique
function checkUsernameAvailability(username) {
    // Check if username exists in current_users list
    return !current_users.some(user => user.toLowerCase() === username.toLowerCase());
}
new_users.forEach(username => {
    if (checkUsernameAvailability(username)) {
        console.log(`Username '${username}' is available.`);
    }
    else {
        console.log(`Username '${username}' is already taken. Please choose a different one.`);
    }
});
//Question no 33:
// Store numbers 1 through 9 in an array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Loop through the array
numbers.forEach(number => {
    // Check the number to determine the proper ordinal ending
    let ordinalEnding;
    if (number === 1) {
        ordinalEnding = "st";
    }
    else if (number === 2) {
        ordinalEnding = "nd";
    }
    else if (number === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    // Print the number with  ordinal ending
    console.log(`${number}${ordinalEnding}`);
});
//Question no 34:
// Store favorite pizza names in an array
const favoritePizzas = ["chessy", "saucy", "BBQ Chicken"];
// Print the name of each pizza using a for loop
console.log("My favorite pizzas:");
for (let i = 0; i < favoritePizzas.length; i++) {
    const pizzaName = favoritePizzas[i];
    console.log(`I like ${pizzaName} pizza.`);
}
// Additional sentence about loving pizza
console.log("I really love pizza!");
//Question no 35:
// Store names of animals in a list
const animals = ["parrot", "Cat", "Rabbit"];
// Print the name of each animal using a for loop
console.log("These animals have a common characteristic:");
for (let i = 0; i < animals.length; i++) {
    const animal = animals[i];
    console.log(animal);
}
// Print a statement about each animal
console.log("\Characteristics of these animals:");
for (let i = 0; i < animals.length; i++) {
    const animal = animals[i];
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}
// Print a statement about what these animals have in common
console.log("\Any of these animals would make a great pet!");
//Question no 36:
function make_shirt(size, message) { console.log(`You have ordered a ${size}-sized shirt with the message: "${message}".`); }
// Call the function with size and message arguments
make_shirt("Medium", "Apna time ayega!");
//Question no 37:
function newmake_shirt(size = "large", message = "I love TypeScript") { console.log(`You have ordered a ${size}-sized shirt with the message: "${message}".`); }
// Making large shirt with default message
newmake_shirt();
// Making medium shirt with default message
newmake_shirt("medium");
// Making a small shirt with a custom message
make_shirt("small", "TypeScript is awesome!");
//Question no 38:
function describe_city(city, country = "Unknown") {
    console.log(`${city} is in ${country}.`);
}
// Call the function for different cities
describe_city("Karachi", "Pakistan");
describe_city("New York", "USA");
describe_city("Tokyo"); // This will use the default country value
//Question no 39:
function city_country(city, country) {
    return `${city}, ${country}`;
}
// Call the function with different city-country pairs
const city1 = city_country("Lahore", "Pakistan");
const city2 = city_country("New York", "USA");
const city3 = city_country("Tokyo", "Japan");
// Print the returned values
console.log(city1);
console.log(city2);
console.log(city3);
function make_album(artist, title, tracks) {
    const album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Creating albums
const album1 = make_album("Artist1", "Album Title 1");
const album2 = make_album("Artist2", "Album Title 2", 12);
const album3 = make_album("Artist3", "Album Title 3");
// Printing album information
console.log(album1);
console.log(album2);
console.log(album3);
//Question no 41:
function show_magicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
// Array of magician's names
const magicianNames = ["Jaweria", "Samreen", "Rashid", "Moon"];
// Displaying magician names
show_magicians(magicianNames);
//Question no 42:
function toshow_magicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
    return magicians;
}
// Array of magician's names
let themagicianNames = ["Jaweria", "Samreen", "Rashid", "Moon"];
// Displaying original magician names
console.log("Original Magician Names:");
show_magicians(magicianNames);
// Making the magicians great
themagicianNames = make_great(magicianNames);
// Displaying modified magician names
console.log("\nModified Magician Names:");
show_magicians(magicianNames);
//Question no 43:
function newshow_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
function newmake_great(magicians) {
    const greatMagicians = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push("the Great " + magicians[i]);
    }
    return greatMagicians;
}
// Array of magician's names
const newmagicianNames = ["Jaweria", "Samreen", "Rashid", "Moon"];
// Displaying original magician names
console.log("Original Magician Names:");
show_magicians(magicianNames);
// Making the magicians great without modifying the original array
const greatMagicianNames = make_great(magicianNames.slice());
// Displaying modified magician names
console.log("\nModified Magician Names:");
show_magicians(greatMagicianNames);
//Question no 44:
function makeSandwich(...items) {
    console.log("Making a sandwich with:");
    for (const item of items) {
        console.log("- " + item);
    }
    console.log("Enjoy your sandwich!\n");
}
// Call the function with different number of arguments
makeSandwich("bun", "mustrad sauce", "Tomato", "Mayonnaise");
makeSandwich("salaad", "Cheese");
makeSandwich("Peanut Butter", "chicken");
function createCar(manufacturer, model, ...extras) {
    const car = { manufacturer, model };
    // Loop through additional properties
    for (const [key, value] of extras) {
        car[key] = value;
    }
    return car;
}
// Call the function with required information and additional properties
const myCar = createCar("mercedes", "Benz S-Class", ["color", "jet black"], ["year", "2022"]);
// Print the returned object
console.log(myCar);
