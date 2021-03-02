fetch('https://swapi.dev/api/people/4')
    .then(res => res.json())
    .then(data => {
        let starships = data.starships;
        
        return fetch(starships);
    })
    .then(res => res.json())
    .then(starship => {
        console.log(starship.name);
    })
    .catch(err => {
        console.log('In catch');
        console.log(err);
    })