// function concatenate(name, surname, age, town) {
//     console.log(`You are ${name} ${surname}, a ${age}-years old person from ${town}`);
// }

// concatenate("Djem", "Bekir", 19, "Plovdiv");

function concatenate(input) {
   let name = input.shift();
   let surname = input.shift();
   let age = Number(input.shift());
   let town = input.shift();
   console.log(`You are ${name} ${surname}, a ${age}-years old person from ${town}`);
}

concatenate(["Djem", "Bekir", 19, "Plovdiv"]);

