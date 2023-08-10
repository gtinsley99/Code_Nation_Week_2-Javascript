const pet = {
    petName: "Max",
    typeOfPet: "Labrador",
    age: 10,
    colour: "brown",
    eat(){
        return `${this.petName} is eating.`
    },
    drink(){
        return `${this.petName} is drinking.`
    }
}

console.log(pet.drink());