solve = (num) => {
    let loading = '';
    const percent = '%';
    const dot = '.';
    loading += `[${percent.repeat(num / 10)}${dot.repeat(10 - (num / 10))}]`

    if (num < 100) {
        console.log(`${num}%  ${loading}`);
        console.log('Still loading...');
    }
    else if (num === 100)   {
        console.log('100% Complete!');
        console.log(loading);
    }
}

solve(30);