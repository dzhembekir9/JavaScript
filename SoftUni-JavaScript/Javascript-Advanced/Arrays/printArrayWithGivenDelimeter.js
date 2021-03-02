function solve(arr) {
    let delimeter = arr.pop();

    let str = arr.join(delimeter);
    console.log(str);
}

solve(['One', 
'Two', 
'Three', 
'Four', 
'Five', 
'-']
);