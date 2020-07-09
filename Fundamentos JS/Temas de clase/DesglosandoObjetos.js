var santiago = {
    nombre: 'Santiago',
    apellido: 'López',
    edad: 19
}

function cumpleaños(persona){
    return {
        //Se desglosa los datos del objeto que se pasa por parametro y se crea uno nuevo con
        //los mismos datos
        ...persona,
        //Se modifica el datos de edad del nuevo objeto creado, no del orginal
        edad: edad+=1
    }
}