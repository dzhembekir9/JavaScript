const myArr = [1, 2, 3, 4, 5, 6];

const str = myArr.join(';');
console.log(str);
let newStr = str.split(';');

newStr.forEach(element => {
    console.log(element);
});