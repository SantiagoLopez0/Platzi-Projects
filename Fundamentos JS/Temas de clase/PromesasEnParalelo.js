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

//Ejecución de promesas en paralelo para obtener los datos del request a la API externa de forma ordenada
var ids = [1,2,3,4,5,6,7];

//Se mapea el arreglo de ids para llamar al metodo que ejecuta la promesa según cada elemento del arreglo
var promesas = ids.map(id => obtenerPersonajeFetch(id));

//Se llama al objeto 'Promise' para que ejecute al mismo tiepo todas las promesas obtenidas en la ejecución anterior
Promise
    .all(promesas)
    .then(personajes => console.log(personajes))
    .catch(onError)
