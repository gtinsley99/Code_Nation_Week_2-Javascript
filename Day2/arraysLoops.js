// // Arrays begin counting items from 0 - "0 index"

// let coffeeOrder = [
//     "Alex - Cortado",
//     "Brian - Espresso with Milk",
//     "Charlie - Latte"
// ];

// console.log(coffeeOrder);

// // coffeeOrder.push("Darren - Hot Choc")

// coffeeOrder.pop();

// console.log(coffeeOrder);


// let favDrinks = [
//     "Cortado",
//     "Espresso with Milk",
//     "Latte",
//     "Hot chocolate",
//     "Cup of tea",
//     "Juice",
//     "Water"
// ];

// for (let i = 0; i < favDrinks.length; i++){
//     console.log(favDrinks[i]);
// }


// // A simple program to display the even numbers to 100.
// let evenNumbers = [];

// for (let i = 0; i < 100; i++){
//     if (i % 2 === 0){
//         evenNumbers.push(i);
//     }
// }

// console.log(evenNumbers);

// let counter = 0;

// while ( counter < 10){
//     console.log(counter);
//     counter++;
// }

let suits = ["Club", "Diamnond", "Heart", "Spade"];
let currentSuit = "Club";

while (currentSuit != "Spade"){
    console.log(currentSuit);
    currentSuit = suits[ Math.floor(Math.random() * 4) ];
}
console.log(currentSuit);