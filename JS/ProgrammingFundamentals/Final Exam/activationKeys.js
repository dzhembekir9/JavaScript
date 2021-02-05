function solve(arr) {
    let key = arr[0];
    arr.shift();

    while (arr[0] !== 'Generate') {

        let action = arr[0].substring(0, arr[0].indexOf('>'));
        
        if (action === 'Slice') {
            let from = arr[0].substring(arr[0].indexOf('>') + 3, arr[0].indexOf('>') + 4);
            let to = arr[0].substring(arr[0].lastIndexOf('>') + 1);

            let newKey = key.substring(0, from) + key.substring(to);
            key = newKey;

            console.log(key);

        }
        else if (action === 'Flip') {

            let caseType = arr[0].substring(arr[0].indexOf('>') + 3, arr[0].indexOf('>') + 8);

            let from = arr[0].substring(arr[0].indexOf('>') + 11, arr[0].indexOf('>') + 12);
            let to = arr[0].substring(arr[0].lastIndexOf('>') + 1);

            let lettersToChange = key.substring(key.indexOf(key[from]), key.indexOf(key[to]));
            let newKey = '';

            if (caseType === 'Upper') {
                lettersToChange = lettersToChange.toLocaleUpperCase();
                newKey = key.substring(0, from) + lettersToChange + key.substring(to);
            }
            else if (caseType === 'Lower') {
                lettersToChange = lettersToChange.toLocaleLowerCase();
                newKey = key.substring(0, from) + lettersToChange + key.substring(to);
            }

            key = newKey;

            console.log(key);
            
        }
        else if (action === 'Contains') {

            let wordToCheck = arr[0].substring(arr[0].indexOf('>') + 3);

            if (key.includes(wordToCheck)) {
                console.log(`${key} contains ${wordToCheck}`);
            }
            else {
                console.log('Substring not found!');
            }
        }

        arr.shift();
    }

    console.log(`Your activation key is: ${key}`);

}

solve(['abcdefghijklmnopqrstuvwxyz', 
'Slice>>>2>>>6', 
'Flip>>>Upper>>>3>>>14', 
'Flip>>>Lower>>>5>>>7', 
'Contains>>>def', 
'Contains>>>deF', 
'Generate']
);

solve(['134softsf5ftuni2020rockz42', 
'Slice>>>3>>>7', 
'Contains>>>-rock', 
'Contains>>>-uni-', 
'Contains>>>-rocks', 
'Flip>>>Upper>>>2>>>8', 
'Flip>>>Lower>>>5>>>11', 
'Generate']
);