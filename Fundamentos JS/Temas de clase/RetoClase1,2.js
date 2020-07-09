//Reto para saber la utima letra de un string

var nombre = prompt('Esciba su nombre');
var ultimaLetra;

var largoNombre = nombre.length;

ultimaLetra = nombre.substr(largoNombre-1, 1);

console.log(`La última letra de su nombre es: ${ultimaLetra}`);