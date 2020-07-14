const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')
const spanLevel = document.getElementById('spanLevel')
const ULTIMO_NIVEL = 5

class Juego {
    constructor() {
        this.inicializar = this.inicializar.bind(this)
        this.inicializar()
        this.generarSecuencia()
        this.modificarSpanLevel(this.nivel)
        setTimeout(() => {
            this.siguienteNivel()
        }, 500)
    }

    inicializar() {
        this.elejirColor = this.elejirColor.bind(this)
        this.siguienteNivel = this.siguienteNivel.bind(this)
        btnEmpezar.classList.add('hide')
        this.nivel = 1
        //Si la variable de un objeto va a llevar el mismo nombre de otra variable a la cual se
        //le quiera asignar el valor, al escribir solamente el nombre de la variable JS va a darle
        //el mismo valor automaticamente
        this.colores = {celeste, violeta, naranja, verde}
    }

    modificarSpanLevel(nivel){
        spanLevel.textContent = `Estas en el nivel ${nivel}`;
    }

    generarSecuencia() {
        //Math.floor: Redondea hacia abajo el número decimal
        this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random() * 4));
    }

    siguienteNivel(){
        this.subnivel = 0
        this.iluminarSecuencia()
        this.agregarEventosClick()
    }

    transformarNumeroAColor(numero){
        switch(numero){
            case 0:
                return 'celeste'
            case 1:
                return 'violeta'
            case 2:
                return 'naranja'
            case 3:
                return 'verde'
        }
    }

    transformarColorANumero(color){
        switch(color){
            case 'celeste':
                return 0
            case 'violeta':
                return 1
            case 'naranja':
                return 2
            case 'verde':
                return 3
        }
    }

    iluminarSecuencia(){
        console.log(`En el Nivel: ${this.nivel}, los colores son:`)
        for (let i = 0; i < this.nivel; i++) {
            const color = this.transformarNumeroAColor(this.secuencia[i]);
            console.log(color);
            setTimeout(() => this.iluminarColor(color), 1000 * i)
        }
    }

    iluminarColor(color){
        this.colores[color].classList.add('light')
        setTimeout(() => this.apagarColor(color), 350)
    }

    apagarColor(color){
        this.colores[color].classList.remove('light')
    }

    agregarEventosClick(){
        this.colores.celeste.addEventListener('click', this.elejirColor)
        this.colores.violeta.addEventListener('click', this.elejirColor)
        this.colores.naranja.addEventListener('click', this.elejirColor)
        this.colores.verde.addEventListener('click', this.elejirColor)
    }

    eliminarEventosClick(){
        this.colores.celeste.removeEventListener('click', this.elejirColor)
        this.colores.violeta.removeEventListener('click', this.elejirColor)
        this.colores.naranja.removeEventListener('click', this.elejirColor)
        this.colores.verde.removeEventListener('click', this.elejirColor)
    }

    elejirColor(ev){
        const nombreColor = ev.target.dataset.color
        const numeroColor = this.transformarColorANumero(nombreColor)
        this.iluminarColor(nombreColor)

        if (numeroColor === this.secuencia[this.subnivel]) {
            this.subnivel++
            if (this.subnivel === this.nivel) {
                this.nivel++
                this.modificarSpanLevel(this.nivel)
                this.eliminarEventosClick()
                if(this.nivel === (ULTIMO_NIVEL + 1)){
                    this.ganoElJuego()
                } else {
                    setTimeout(() => {
                        this.siguienteNivel()
                    }, 1000);
                }
            }
        } else {
            this.perdioElJuego()
        }
    }

    ganoElJuego() {
        swal('Platzi', 'Felicitaciones, ganaste el juego', 'success')
        .then(() => {
            this.inicializar()
            btnEmpezar.classList.remove('hide')
        })
    }

    perdioElJuego() {
        swal('Platzi', 'Felicitaciones, perdiste el juego:(', 'error')
        .then(() => {
            this.eliminarEventosClick()
            this.inicializar()
            btnEmpezar.classList.remove('hide')
        })
    }
}

function empezarJuego() {
    window.juego = new Juego()
}
