function init() {

    let number = "123-4567";

    function checkNum(number) {

        let result = "";

        if ((number.length === 8 && number.indexOf("-") == 3) || number.length === 7) {
            result = "Accepted";
        }
        else {
            result = "Not accepted";
        }    

        return result
    }

    let result = checkNum(number);
    console.log(result);
    
}

window.onload = init;