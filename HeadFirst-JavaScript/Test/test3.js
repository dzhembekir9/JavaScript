function init () {
    let red = document.getElementById("red");
    let green = document.getElementById("green");
    let yellow = document.getElementById("yellow");

    red.setAttribute("class", "red");
    green.setAttribute("class", "green");
    yellow.setAttribute("class", "yellow");

    let str = "My name is Dzhem Bekir 19 years old";

    let first = str.substring(11, 16);
    let second = str.substring(17, 22);
    let age = str.substring(23, 25);

    console.log(`Name: ${first} ${second} age: ${age}`);

    let foo = "My,name,is,Djem,Bekir";

    let bar = foo.split(",");

    let name = `${bar[0]} ${bar[1]} ${bar[2]} ${bar[3]} ${bar[4]}`;

    let shout = name.toUpperCase();
    console.log(shout);

    let newName = name.replace("Bekir", "Djemski");
    console.log(newName);

    

}

window.onload = init;