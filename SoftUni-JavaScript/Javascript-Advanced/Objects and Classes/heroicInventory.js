function solve(arr) {

    let heroes = [];

    for (let i in arr) {
        let token = arr[i].split(' / ');
        let name = token[0];
        let level = token[1];
        let items = token[2].split(', ');


        let hero = {
            name,
            level: Number(level),
            items
        }

        heroes.push(hero);

    }


    let str = JSON.stringify(heroes);
    console.log(str);
}

solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
);