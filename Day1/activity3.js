const birthDate = new Date(99, 4, 5);

const dateToday = Date.now()

const daysAlive = (dateToday - birthDate)/(3600000 * 24)

console.log(`I have been alive for ${daysAlive.toFixed(0)} days.`);


