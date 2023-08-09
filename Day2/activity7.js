let string = "aejijdinanpidnifnapdfndjslfasmdlmkgvNWENFdikowmniqknkldfmskm";
let vowels = ["a", "e", "i", "o", "u"];
const stringArray = string.split("");
let revStringArray = stringArray.reverse("");

for (let i = 0; i < string.length; i++){
    for (let j = 0; j < vowels.length; j++){
    if (revStringArray[i] === vowels[j])
        console.log(`The last vowel in the string is at index ${revStringArray.length - i}`);
    }
}



