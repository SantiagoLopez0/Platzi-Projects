const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/'

fetchData(API)
    .then(data => {
        console.log(`La cantidad de personajes que hay es: ${data.info.count}`);
        return fetchData(`${API}${data.results[0].id}`)
    })
    .then(data => {
        console.log(`EL nombre del primer personaje es: ${data.name}`);
        return fetchData(data.origin.url)
    })
    .then(data => {
        console.log(`Su origen es: ${data.dimension}`);
    })
    .catch(error => console.error(error))