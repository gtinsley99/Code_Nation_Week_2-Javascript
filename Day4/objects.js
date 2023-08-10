const person = {
    myName: "George",
    age: 24,
    drinks: [
        "Water",
        "Hot chocolate",
        "Tea"
    ],
    songs: [
        "Hysteria - Muse",
        "No one knows - QOTSA"
    ],
    intro(){
        return `Hello, my name is ${this.myName}.`
    }
}



console.log(person.intro());



// let day = "Saturday";
// let alarmMessage = "";

// const myAlarm = {
//     weekendAlarm: "No alarm needed",
//     weekdayAlarm: "get up at 7am"
// }

// if (day === "Saturday" || day === "Sunday"){
//     alarmMessage = myAlarm.weekendAlarm;
// } else {
//     alarmMessage = myAlarm.weekdayAlarm;
// }

// console.log(alarmMessage);