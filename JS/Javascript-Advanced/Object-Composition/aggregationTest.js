let props = [
    {name: 'Pesho'},
    {age: 22},
    {height: 190},
    {eyeColor: 'blue'},
    {name: 'Gosho'}
]


let result = props.reduce((acc, x) => {
    
    for (let [key, value] of Object.entries(x)) {
        acc[key] = value;
    }

    return acc;
}, {});

let result2 = props.reduce((acc, x) => {
    return {...acc, ...x};
}, {});


console.log(result);
console.log(result2);