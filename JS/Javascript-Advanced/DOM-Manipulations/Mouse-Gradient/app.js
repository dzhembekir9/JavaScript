function attachGradientEvents() {
    
    let result = document.querySelector('#result');
    
    const gradientHandler = (e) => {
        str = `${Math.floor(e.offsetX * 0.337)}%`;        
        result.innerHTML = str;
    }
    
    let gradientElement = document.querySelector('#gradient');
    gradientElement.addEventListener('mousemove', e => {
        gradientHandler(e);
    });
    
    
}