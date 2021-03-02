function init() {

    const title = document.querySelector('#createTitle');
    const content = document.querySelector('#createContent');
    const articleElement = document.querySelector('#articles');
    
    createArticle = () => {
        
        let divEl = document.createElement('div');
        let h2El = document.createElement('h2');
        let pEl = document.createElement('p');

        h2El.innerHTML = title.value;
        pEl.innerHTML = content.value;        

        divEl.style.border = '1px solid black';
        divEl.style.margin = '20px';
        divEl.style.padding = '10px';
        divEl.style.borderRadius = '20px';

        divEl.appendChild(h2El);
        divEl.appendChild(pEl);

        const sectionElement = document.querySelector('#articles');
        sectionElement.appendChild(divEl);

    }
}

window.onload = init;