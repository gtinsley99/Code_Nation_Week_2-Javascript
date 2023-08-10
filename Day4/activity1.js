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
    sayHi(){
        return `Hello, my name is ${this.myName}.`
    }
}

console.log(person.sayHi());