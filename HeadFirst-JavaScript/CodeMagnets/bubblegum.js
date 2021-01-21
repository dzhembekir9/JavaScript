var products = ["Choo Choo Chocolate",
"Icy Mint", "Cake Batter",
"Bubblegum"];

var hasBubbleGum = [false,
    false,
    false,
    true];

for (let index = 0; index < products.length; index++) {

    if (hasBubbleGum[index]) {
        console.log(products[index] + " contains bubble gum");
    }
    
}