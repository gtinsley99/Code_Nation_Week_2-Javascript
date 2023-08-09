let orderCount = 0;

const takeOrder = (topping, size) => {
    console.log(`A ${size} pizza with ${topping}.`);
    orderCount++;
}

takeOrder("pineapple", "large");
takeOrder("ham", "small");

console.log(`There are ${orderCount} ongoing orders.`);