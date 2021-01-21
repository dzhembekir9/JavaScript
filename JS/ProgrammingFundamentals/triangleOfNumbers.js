function solve(n) {
    for (let i = 0; i < 10; i++) {
        let str = "";
        for (let j = 0; j < i; j++) {
            str += `${i} `;
        }
        console.log(str);
    }
}

solve(10);