let students = [
    { name: 'Ivan', score: 1 },
    { name: 'Dragan', score: 2 },
    { name: 'Pesho', score: 5 },
    { name: 'Dragan', score: 3 },
    { name: 'Pesho', score: 2 },
    { name: 'Ivan', score: 1 },
    { name: 'Dragan', score: 2 }
];


let heroes = ['Batman', 'Superman', 'Wonderwoman', 'Captain America', 'Catwoman', 'Hulk', 'Aquaman'];

let str = heroes.reduce((acc, x) => {
    return acc + x[0];
}, '');

//console.log(str);

let reduced = students.reduce((acc, x) => {

    let student = acc.find(el => el.name === x.name);

    if (!student) {
        acc.push(x);
    }
    else {
        student.score += x.score;
    }

    return acc;
}, []);

console.log(reduced);


/*

let studentsMap = new Map();

for (let student of students) {

    if (!studentsMap.has(student.name)) {
        studentsMap.set(student.name, student.score);
    }
    else {
        let prevScore = studentsMap.get(student.name);
        studentsMap.set(student.name, prevScore + student.score);
    }

}

students.length = 0;

for (let [key, value] of studentsMap) {
    students.push({
        name: key,
        score: value
    });
}

console.log(students); 

*/

