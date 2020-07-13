// $(document).ready(function () {
// });
const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

function onError(id) {
    console.log(`Sucedió un error al obtener el personaje ${id}`)
  }

function obtenerPersonajeAjax(id) {
    return new Promise((resolve, reject) => {
        const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $.get(URL, opts, function (data) {
            resolve(data)
        })
            .fail(() => reject(id))
    })
}

function obtenerPersonajeFetch(id) {
    return new Promise((resolve, reject) => {
        const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        fetch(URL)
            .then(function (response) {
                return response.json()
            })
            .then(function (myJson) {
                resolve(myJson);
            })
            .catch((id) => reject(id))
    })
}

//se creauna funcion asincrona para ejecutar las promesas para tener el control de la ejecución del programa
//asnc: indicar que una funcion va a ejecturar un metodo/funcion asincrona y que se va a incluir el 'await'
//await: para usar esto se debe decralar 'async' en la función
async function obtenerPersonajes(){
    //Ejecución de promesas en paralelo para obtener los datos del request a la API externa de forma ordenada
    var ids = [1,2,3,4,5,6,7];

    //Se mapea el arreglo de ids para llamar al metodo que ejecuta la promesa según cada elemento del arreglo
    var promesas = ids.map(id => obtenerPersonajeFetch(id))

    /*Para poder utilizar 'async-await' se tiene que poner OBLIGATORIAMENTE la parte asincrona en un try-catch*/
    try{
    //Se llama al objeto 'Promise' para que ejecute al mismo tiepo todas las promesas obtenidas en la ejecución anterior
    //cuado todas las promesas se resuelvan se van a guardar en una variable
    //await: se detiene la ejecución hasta que todas las promesas se resuelvan, hasta que se resuelvan todas, el resultado se va a guardar en la variable
    var personajes = await Promise.all(promesas)
        console.table(personajes)
    }
    catch(id){
        onError(id)
    }
}
obtenerPersonajes()