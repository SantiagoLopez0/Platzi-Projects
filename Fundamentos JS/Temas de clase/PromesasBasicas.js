// $(document).ready(function () {
// });
const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';
const opts = { crossDomain: true };

function onError(id) {
    console.log(`Sucedió un error al obtener el personaje ${id}`)
  }

function obtenerPersonajeAjax(id) {
    return new Promise((resolve, reject) => {
        const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
        $.get(URL, opts, function (data) {
            resolve(data);
        })
            .fail(() => reject(id));
    })
}

function obtenerPersonajeFetch(id) {
    return new Promise((resolve, reject) => {
        const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
        fetch(URL)
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                resolve(myJson);
            })
            .catch((id) => reject(id))
    })
}

//Llamado a las funciones que retornan una Promise
//.then: cuando la promesa se resolvio como se esperaba
//.catch: cuando ocurrio algo al ejecutar la promesa

//Ajax
obtenerPersonajeAjax(1)
.then(personaje => console.log(`Hola soy ${personaje.name}`))
.catch(onError)

//Fetch
obtenerPersonajeFetch(2)
.then(personaje => console.log(`Hola soy ${personaje.name}`))
.catch(onError)