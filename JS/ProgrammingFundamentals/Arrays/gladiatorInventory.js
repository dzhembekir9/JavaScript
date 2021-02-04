function solve(arr) {

    let inventory = ['SWORD', 'Shield', 'Spear'];
    arr.join(',').split(' ');
    arr.shift();

    for (let i = 0; i < arr.length; i++) {

        const action = arr[i].split(' ');
        
        if (action[0] === 'Buy') {
            inventory.push(action[1]);
        }
        if (action[0] === 'Trash') {
            const index = inventory.indexOf(action[1]);
            if (index > -1) {
                inventory.splice(index, 1);
            }
        }
        if (action[0] === 'Repair') {
            const index = inventory.indexOf(action[1]);
            if (index > -1) {
                const item = inventory.splice(index, 1)[0];
                inventory.push(item);
            }
        }
        if (action.includes('Upgrade')) {
            const index = action.indexOf(action[1]);
            if (inventory.includes(action[1])) {    
                inventory.splice(index, 0, action[1]);
            }
        }

    }

    console.log(inventory.join(' '));
}

solve(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel']);

solve(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']);