const coffeeShop = {
    branch: "Manchester",
    yourOrder:"",
    drinksWithPrices: [
        "coffee", 2.50,
        "tea", 2.00,
        "water", 1.00
    ],
    foodWithPrices: [
        "cookie", 0.60,
        "sandwich",3.00,
        "croissant", 0.70
    ],
    drinksOrdered(){
        for (i = 0; i < this.yourOrder.length; i++){
            for (j = 0; j < this.drinksWithPrices.length; j++){
                if (this.yourOrder[i] === this.drinksWithPrices[j]){
                    let sum = 0;
                    sum += this.drinksWithPrices[j+1];
                    return `Your drinks order is ${this.drinksWithPrices[j]} - £${this.drinksWithPrices[(j+1)].toFixed(2)} for a total of £${sum.toFixed(2)}.`;
                }
            }
        }
    },       
    foodOrdered(){
        return `Your food order is`
    }
}

coffeeShop.yourOrder = ["coffee", "sandwich", "tea"];

console.log(coffeeShop.drinksOrdered())



// NOT DONE YET





