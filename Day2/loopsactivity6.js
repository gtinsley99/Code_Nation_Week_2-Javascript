let bobsFollowers = ["George", "John", "Lucy", "Michelle"];
let hannahsFollowers = ["George", "Anne", "Rebecca", "Lucy"]

for (let i = 0; i < bobsFollowers.length; i++){
    for (let j = 0; j < hannahsFollowers.length; j++){
    if (bobsFollowers[i] === hannahsFollowers[j])
        console.log(bobsFollowers[i]);
    }
}