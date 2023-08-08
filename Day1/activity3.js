const birthDate = new Date(99, 4, 5);

const dateToday = Date.now()

const daysAlive = (dateToday - birthDate)/(1000 * 60 * 60 * 24)

console.log(`I have been alive for ${daysAlive.toFixed(0)} days.`);


