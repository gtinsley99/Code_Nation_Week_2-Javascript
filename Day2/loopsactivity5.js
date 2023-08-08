let randNum = [];

for (let i = 0; i < 6; i++){
    randNum.push(Math.ceil(Math.random() * 30));
    if (randNum[i] % 7 == 0){
        console.log(`${randNum[i]} is divisible by 7.`)
    } else{
        console.log(`${randNum[i]} is not divisble by 7.`)
    }
}