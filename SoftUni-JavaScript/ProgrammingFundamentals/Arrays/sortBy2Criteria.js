function solve(arr) {
    arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(arr.join(' '));
}

solve(["alpha", "beta", "gamma"]);
solve(["Isacc", "Theodor", "Jack", "Harrison", "George"]);