var santiago = {
    nombre: 'Santiago',
    apellido: 'López',
    edad: 19,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: true
}

const MAYORIA_DE_EDAD = 18;
const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD;
const esMenorDeEdad = ({ edad }) => !esMayorDeEdad({ edad });

function imprimirMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`);
    } else {
        console.log(`${persona.nombre} es menor de edad`);
    }
}

const permitirAcceso = ({ edad }) => !esMayorDeEdad({ edad }) ? console.log('Acceso Denegado') : console.log("Pase:)");



function cumpleaños(persona) {
    return {
        //Se desglosa los datos del objeto que se pasa por parametro y se crea uno nuevo con
        //los mismos datos
        ...persona,
        //Se modifica el datos de edad del nuevo objeto creado, no del orginal
        edad: persona.edad += 1
    }
}