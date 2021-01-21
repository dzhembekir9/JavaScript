function makingProjects(input) {
    let name = input.shift();
    let projects = Number(input.shift());
    let hoursWorking = projects * 3;

    console.log(`The architect ${name} will need ${hoursWorking} hours to complete ${projects} projects`);
}

makingProjects(["Sanya", 9]);