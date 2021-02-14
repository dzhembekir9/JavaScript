function solve(name, typed) {
    
    let nameLetters = {};
    let typedLetters = {};

    let isLongPressed = true;

    for (let i in name) {
        
        if (!nameLetters[name[i]]) {
            nameLetters[name[i]] = 1;
        }
        else {
            nameLetters[name[i]]++;
        }

    }

    for (let i in typed) {
        
        if (!typedLetters[typed[i]]) {
            typedLetters[typed[i]] = 1;
        }
        else {
            typedLetters[typed[i]]++;
        }

    }

    let nameKeys = Object.keys(nameLetters);
    let typedKeys = Object.keys(typedLetters);


    if ((name[name.length - 1] !== typed[typed.length - 1]) || (name[0] !== typed[0])) {
        console.log(false);
    }
    else {
        if (nameKeys.join('') !== typedKeys.join('')) {
            console.log(false);
        }
        else {
            for (let [key, value] of Object.entries(nameLetters)) {
                if (value > typedLetters[key]) {
                    isLongPressed = false;
                    break;
                }
            }
        
            console.log(isLongPressed);
        }
    }


}

// solve('alex', 'aaleex');
// solve('saeed', 'ssaaedd');
// solve('leelee', 'lleeelee');
// solve('laiden', 'laiden');
// solve("xnhtq", "xhhttqq")
//solve('alex', 'aaleex');