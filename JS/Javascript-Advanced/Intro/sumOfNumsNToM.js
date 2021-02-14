function solve(n, m) {
    
    const nParsed = Number(n);
    const mParsed = Number(m);

    let sum = 0;

    for (let i = nParsed; i <= mParsed; i++) {
        sum += i;
    }

    console.log(sum);
}

solve('-8', '20');