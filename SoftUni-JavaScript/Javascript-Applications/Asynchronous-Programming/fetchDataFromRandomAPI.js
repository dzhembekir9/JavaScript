fetch('https://randomuser.me/api')
    .then(res => res.json())
    .then(data => console.log(JSON.stringify(data)))