let balance = 50;
let pin = 1234;

const withdraw = (cash, pinNumber) => {
    if (balance >= cash && pin === pinNumber) {
        console.log(`Withdrawing £${cash}.`);
    } else if (balance < cash && pin === pinNumber){
        console.log("Insufficient funds");
    } else{
        console.log("Incorrect pin- please try again");
    }
}

withdraw(50, 1234);
withdraw(30, 1234);
withdraw(60, 1234);
withdraw(500, 2234);