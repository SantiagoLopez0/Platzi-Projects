class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
        console.log('Me han ejecutado');
    }

    saludar(){
        console.log(`Hola soy ${this.nombre} ${this.apellido}`)
    }

    soyAlto(){
        if(this.altura > 1.80){
            console.log('Soy alto');
        }else{
            console.log('No soy alto');
        }
    }
}

class Desarrollador extends Persona{
    constructor(nombre, apellido, altura){
        super(nombre, apellido, altura);
    }

    saludar(){
        console.log(`Hola soy ${this.nombre} ${this.apellido} y soy desarrollador`)
    }
}


var santiago = new Persona('Santiago', 'López', 1.69);
var pedro = new Persona('Pedro', 'Gomez', 1.89);
var laura = new Persona('Laura', 'Herrera', 1.77);
var dev = new Desarrollador('Raúl', 'Perez', 2.22);