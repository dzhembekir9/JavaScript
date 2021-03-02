async function getSwName(id) {
    try {
        let response = await fetch(`https://swapi.dev/api/people/${id}/`);
        let data = await response.json();
    
        let name = data.name;
        let homeResponse = await fetch(data.homeworld);
        let home = await homeResponse.json();
    
        return `${name} -> ${home.name}`;
    } catch (error) {
        return 'No character found.';
    }
}

getSwName(4)
    .then(data => console.log(data))
    