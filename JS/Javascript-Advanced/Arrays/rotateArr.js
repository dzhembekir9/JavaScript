function solve(arr) {
    let step = Number(arr.pop());


    for (let i = 0; i < step; i++) {
        let last = arr.pop();
        arr.unshift(last);
    }

    console.log(arr);
}

solve(['1', 
'2', 
'3', 
'4', 
'2']
);

solve(['Banana', 
'Orange', 
'Coconut', 
'Apple', 
'15']
);