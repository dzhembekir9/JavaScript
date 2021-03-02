function solve() {
    let btn = document.querySelector('button');
    let counter = 97;
        
    const parentEl = document.querySelector('ol').children;
    let arr = Array.from(parentEl);
    
    arr.forEach(x => {
        x.setAttribute('id', String.fromCharCode(counter));
        counter++;
    });

    const addName = () => {
        let nameEl = document.querySelector('input');
        
        let name = nameEl.value;
        let nameArr = name.split(', ');
        console.log(nameArr);
        
        arr.forEach(x => {
            nameArr.forEach(name => {
                if (x.id === name.split('')[0].toLowerCase()) {
                    if (x.innerHTML.length === 0) {
                        x.innerHTML = name;
                    }
                    else {
                        x.innerHTML += ', ' + name;
                    }
                }
            });
        });
    }

    btn.addEventListener('click', addName);
}