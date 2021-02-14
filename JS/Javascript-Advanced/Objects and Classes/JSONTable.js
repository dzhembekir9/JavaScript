function solve(arr) {
    console.log(arr);

    let html = '<table>';
    
    for (let i in arr) {
        html += '<tr>';

        let person = JSON.parse(arr[i]);
        
        html += `<td>${person.name}</td>`;
        html += `<td>${person.position}</td>`;
        html += `<td>${person.salary}</td>`;

        html += '</tr>';
    }

    html += '</table>'

    console.log(html);

    let el = document.querySelector('.body');
    el.innerHTML = html;


}

solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}']
);