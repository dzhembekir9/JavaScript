function solve() {
    
    let furnitureEl = document.querySelectorAll('textarea')[0];
    let generateBtn = document.querySelectorAll('button')[0];
    let buyBtn = document.querySelectorAll('button')[1];
    let tBodyEl = document.querySelector('tbody');
    let textAreaResult = document.querySelectorAll('textarea')[1];
    
    const generateFurniture = () => {

        let furnitureArr = JSON.parse(furnitureEl.value);

        furnitureArr.forEach(element => {
            
            let trEl = document.createElement('tr');
            
            for (const [key, value] of Object.entries(element)) {
                let row = document.createElement('td');
                let tagName;
                if (key === 'img') {
                    tagName = document.createElement('img');
                    tagName.src = value;
                }
                else {
                    tagName = document.createElement('p');
                    tagName.innerHTML = value;
                }
                row.appendChild(tagName);
                trEl.appendChild(row); 
            }

            let checkboxRow = document.createElement('td'); 

            let checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');

            checkboxRow.appendChild(checkbox)
            trEl.appendChild(checkboxRow)

            tBodyEl.appendChild(trEl)

        });

    }

    const buyFurniture = () => {
        let checkboxArr = document.querySelectorAll('input[type="checkbox"]');
        let totalPrice = 0;
        let bought = [];
        let decoFactor = [];
        let averageDecoFactor = 0;

        checkboxArr.forEach(x => {
            if (x.checked === true) {
                let price = Number(x.parentElement.parentElement.children[2].children[0].innerHTML);
                let name = x.parentElement.parentElement.children[1].children[0].innerHTML;
                let deco = Number(x.parentElement.parentElement.children[3].children[0].innerHTML);
                bought.push(name);
                decoFactor.push(deco);
                totalPrice += price;
            }
        });

        for (let i in decoFactor) {
            averageDecoFactor += decoFactor[i];
        }

        averageDecoFactor /= decoFactor.length;

        const furnitureText = `Bought furniture: ${bought.join(', ')}`;
        const priceText = `Total price: ${totalPrice.toFixed(2)}`;
        const decoText = `Average decoration factor: ${averageDecoFactor.toFixed(1)}`;

        textAreaResult.innerHTML = furnitureText + '\n' + priceText + '\n' + decoText;

    }

    generateBtn.addEventListener('click', generateFurniture);
    buyBtn.addEventListener('click', buyFurniture);
}