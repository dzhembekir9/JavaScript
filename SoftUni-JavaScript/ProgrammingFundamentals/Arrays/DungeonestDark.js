function solve(input) {
    const str = input.shift();
    let health = 100;
    let coins = 0;


    let rooms = str.split('|');
    console.log(rooms);

    let i;

    for (i = 0; i < rooms.length; i++) {
        if (rooms[i].includes('potion')) {
            const addHealth = rooms[i].split(' ');
            if (health > 0) {
                health += parseInt(addHealth[1]);
                console.log(`You healed for ${addHealth[1]} hp.`);
                console.log(`Current health: ${health} hp.`);
            }
        }
        else if (rooms[i].includes('chest')) {
            const addCoins = rooms[i].split(' ');
            coins += parseInt(addCoins[1]);
            console.log(`You found ${addCoins[1]} coins.`);
        }
        else {
            const attack = rooms[i].split(' ');
            health -= attack[1];
            if (health <= 0) {
                console.log(`You died! Killed by ${attack[0]}`);
                console.log(`Best room ${i + 1}`);
                break;
            }
            else {
                console.log(`You slayed ${attack[0]}`);
            }
        }
    }


    if (i == rooms.length) {
        console.log(`You've made it! Coins: ${coins}, Health: ${health}`);   
    }

}


//solve(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000']);
solve(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110']);