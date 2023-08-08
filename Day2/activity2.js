let topping = "pepperoni";

switch(topping){
    case "pepperoni":
    case "extra cheese":
        console.log(`${topping} is an important ingredient for my pizza.`);
        break;
    case "chicken":
    case "peppers":
        console.log(`I don't mind ${topping} on my pizza.`);
        break;
    default:
        console.log(`${topping} should not be on a pizza.`);
}

