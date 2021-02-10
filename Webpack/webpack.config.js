const path = require('path');

module.exports = {
    //El archivo que se va a recibir
    entry: './index.js',
    //Configuraciones del archivo de salida
    output: {
        //path: para resolver en que carpeta va a quedar el archivo de salida. __dirname, resuelve la direccion del proyecto actual
        path: path.resolve(__dirname, 'dist'),
        //nombre del archivo de salida
        filename: 'bundle.js'
    },
    //Modo en el que se va a empacar la solución (development or production) 
    mode: 'development',
}