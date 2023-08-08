let num = "25152";
let splitNum = num.split("");
let revNum = splitNum.reverse("");
revNum = revNum.join("");


if (revNum == num){
    console.log(`${num} is a palindrome.`);
} else {
    console.log(`${num} is not a palindrome.`);
}



