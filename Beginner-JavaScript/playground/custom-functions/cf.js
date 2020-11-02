console.log('It works');

function add(a, b = 3) {
    const total = a + b;
    return total;
}

const sum = (a, b = 3) => a + b;
