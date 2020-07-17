let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const API = 'https://rickandmortyapi.com/api/character/'

function fetchData(url_api, callback){
    let xhttp = new XMLHttpRequest()

    xhttp.open('GET', url_api, true)
    xhttp.onreadystatechange = (event) => {
        if(xhttp.readyState === 4){
            if(xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText))
            } else {
                let error = new Error('Error' + url_api)
                return callback(error, null)
            }
        }
    }
    xhttp.send();
}

fetchData(API, function(error1, data1){
    if (error1) return console.error(error1)
    fetchData(API + data1.results[0].id, function(error2, data2){
        if (error2) return console.error(error2)
        fetchData(data2.origin.url, function(error3, data3){
            if (error3) return console.error(error3)
            console.log(`La cantidad de personajes es: ${data1.info.count}`)
            console.log(`El primer personaje es: ${data2.name}`)
            console.log(`La dimensión del primer personaje es: ${data3.dimension}`);
        })
    })
})