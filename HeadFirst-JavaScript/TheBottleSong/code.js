var word = "bottles";
for (let index = 99; index >= 0; index--) {
    if (index > 0) {
        if (index == 1) {
            console.log(index + " bottle of beer on the wall");
            console.log("Take one down, pass it around,");
        }
        else {
            console.log(index + " " + word + " of beer on the wall");
            console.log("Take one down, pass it around");
        }
    }
    else {
        console.log("No more " + word + " of beer on the wall.");

    }
}