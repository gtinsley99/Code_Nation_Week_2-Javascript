let password = "12345678";

if (password.length < 8){
    console.log("The password is too short.");
} else {
    console.log(password);
}

let num = 21;

if (num % 5 == 0 || num % 3 == 0){
    console.log(`${num} is divisible by 3 or 5.`);
} else {
    console.log(`${num} isn't divisble by 3 or 5.`);
}