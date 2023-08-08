let time = 18;
let placeOfWork = "Manchester";
let townOfHome = "Macclesfield";

if (time <= 8 || time > 18){
    console.log(`I'm at home in ${townOfHome}.`);
} else if (time >= 9 && time <= 17){
    console.log(`I'm at work in ${placeOfWork}.`);
} else {
    console.log("I'm commuting.");
}