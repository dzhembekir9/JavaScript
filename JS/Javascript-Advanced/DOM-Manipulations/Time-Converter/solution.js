function attachEventsListeners() {
    
    let buttons = document.querySelectorAll('input[type="button"]');
    let textElements = document.querySelectorAll('input[type="text"]');
    
    const convertHandler = (e) => {
        let text = Number(e.target.parentElement.childNodes[3].value);
        let type = e.target.parentElement.childNodes[1].innerHTML;

        let days = 0, hours = 0, minutes = 0, seconds = 0;

        if (type.includes('Days')) {
            days = text;
            hours = text * 24;
            minutes = hours * 60;
            seconds = minutes * 60;
        }
        else if (type.includes('Hours')) {
            hours = text;
            days = (text / 24).toFixed(0);
            minutes = text * 60;
            seconds = minutes * 60;
        }
        else if (type.includes('Minutes')) {
            minutes = text;
            hours = text / 60;
            days = (hours / 24).toFixed(0);
            seconds = text * 60;
        }
        else if (type.includes('Seconds')) {
            seconds = text;
            minutes = text / 60;
            hours = minutes / 60;
            days = (hours / 24).toFixed(0);
        }

        let tokens = [days, hours, minutes, seconds];

        textElements.forEach(x => {
            x.value = tokens[0];
            tokens.shift();
        });


    }

    buttons.forEach(x => {
        x.addEventListener('click', e => {
            convertHandler(e);
        });
    });
    
}