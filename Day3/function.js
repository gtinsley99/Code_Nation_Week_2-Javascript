// const favColour = () => {
//     console.log("My favourite colour is green.");
// }

// favColour();


// let coffeeIsGrinding = true;

// // A simple function with an 'if' statement
// const pressGrindBeans = () => {

//     if (coffeeIsGrinding) {
//         console.log("Stopping the grind");
//         coffeeIsGrinding = false;
//     } else {
//         console.log("Grinding is about to begin");
//         coffeeIsGrinding = true;
//     }

// }

// pressGrindBeans();

// let accnumber = 50449921;
// let amountToWithdraw = 50;

// const cashWithdrawal = (amount, accnum) => {
//     console.log(`Withdrawing £${amount} from account ${accnum}`);
// }

// cashWithdrawal(amountToWithdraw, accnumber);
// cashWithdrawal(40, accnumber);
// cashWithdrawal(200, accnumber);



// let myColour = "green";

// const favColour = (colour) => {
//     console.log(`My favourite colour is ${colour}.`);
// }

// favColour(myColour);


// const addUp = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(addUp(7,3));
// console.log(addUp(3,8));
// console.log(addUp(99,43434));
// console.log(addUp(11111,2222));


const multiplyByNineFifths = (celsius) => {
    return celsius * (9/5);
}

const getFahrenheit = (celsius) => {
    return multiplyByNineFifths(celsius) + 32;
}

console.log(`The temperature is ${getFahrenheit(15)}F`);
