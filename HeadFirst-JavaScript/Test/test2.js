
function init () {
    let getNameElement = document.getElementById("name");
    let getAgeElement = document.getElementById("age");

    if (getAgeElement.innerHTML == "Your age is 19") {
        getNameElement.innerHTML += " Djem";
        console.log(getNameElement.innerHTML);
    }
    else if (getAgeElement.innerHTML == "Your age is 13") {
        getNameElement.innerHTML += " Gyuven";
        console.log(getNameElement.innerHTML);
    }

    let age = document.getElementById("age");
    age.setAttribute("class", "redtext");   
}

window.onload = init;

