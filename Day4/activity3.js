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
        let sum = 0;
        for (i = 0; i < this.yourOrder.length; i++){
            for (j = 0; j < this.drinksWithPrices.length; j++){
                if (this.yourOrder[i] === this.drinksWithPrices[j]){
                    sum += this.drinksWithPrices[j+1];
                    console.log(`Your drinks order is ${this.drinksWithPrices[j]} - £${this.drinksWithPrices[(j+1)].toFixed(2)} for a total of £${sum.toFixed(2)}.`);
                }
            }
        }
    },       
    foodOrdered(){
        let sum = 0;
        for (i = 0; i < this.yourOrder.length; i++){
            for (j = 0; j < this.foodWithPrices.length; j++){
                if (this.yourOrder[i] === this.foodWithPrices[j]){
                    sum += this.foodWithPrices[j+1];
                    console.log(`Your food order is ${this.foodWithPrices[j]} - £${this.foodWithPrices[(j+1)].toFixed(2)} for a total of £${sum.toFixed(2)}.`);
                }
            }
        }
    }
}

coffeeShop.yourOrder = ["coffee", "sandwich", "tea", "croissant"];

// coffeeShop.drinksOrdered();

coffeeShop.foodOrdered();








