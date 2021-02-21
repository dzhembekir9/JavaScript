function filtered(nums) {
    let filtered = [];
    for (let num of nums) {
        if (num % 2 === 0) {
            filtered.push(num);
        }
    }
    return filtered;
}

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let filteredNums = filtered(nums);
console.log(filteredNums);

console.log(filtered([1, 245, 124, 253, 1243254, 457, 3456]));

let numsFiltered = nums.filter(x => x % 2 === 0);
console.log(`nums filtered ` + numsFiltered.join(' --- '));

const validateName = (name) => {
    return name.split(' ').length == 2;
}

console.log(validateName('Ivan Petrov'));
console.log(validateName('Ivan Peshev'));
console.log(validateName('Ivan'));


