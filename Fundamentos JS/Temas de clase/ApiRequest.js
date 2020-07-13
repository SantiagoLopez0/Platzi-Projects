// $(document).ready(function () {
// });
const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';
const opts = {crossDomain: true};

const onPeopleResponse = function (data) {
    console.log(`Hola soy ${data.name}`);
}

function obtenerPersonajeAjax(id){
    const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    $.get(URL, opts, onPeopleResponse);
}

function obtenerPersonajeFetch(id){
    const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    fetch(URL)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            onPeopleResponse(myJson);
        });
}