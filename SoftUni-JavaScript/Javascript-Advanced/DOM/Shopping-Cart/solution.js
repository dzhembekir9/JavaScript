function solve() {
    
    let btn = document.querySelectorAll('.add-product');
    let checkoutBtn = document.querySelector('.checkout');
    let productsBought = [];

    checkoutBtn.addEventListener('click', () => {
        
        for (let [key, value] of products) {
            productsBought.push(key);
        }

        let text = `You bought ${productsBought.join(', ')} for ${totalPrice.toFixed(2)}.`;
        textAreaEl.innerHTML += text;

        btn.forEach(x => {
            x.disabled = true;
        });
    });

    let products = new Map();

    let textAreaEl = document.querySelector('textarea');
    let totalPrice = 0;
    
    const addProduct = (title, price) => {
        let text = `Added ${title} for ${price.toFixed(2)} to the cart. \n`;
        textAreaEl.innerHTML += text;
        totalPrice += price;

        products.set(title, price);
    }

    let btnArr = Array.from(btn);
    btnArr.forEach(x => {
        x.addEventListener('click', () => {
            let productTitle = x.parentElement.parentElement.querySelector('.product-title').innerHTML;
            let price = Number(x.parentElement.parentElement.querySelector('.product-line-price').innerHTML);
            addProduct(productTitle, price);
        })
    });

}
