class AutoPause{
    constructor(){
        this.threshold = 0.25

        this.handleIntersection = this.handleIntersection.bind(this)
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this)
    }

    run(player){
        this.player = player
        //handler: una funcion que va a recibir el anuncio de la posicion del elemento que se esta observando
        //config: un objeto de configuracion del IntersectionObserver
        const observer = new IntersectionObserver(this.handleIntersection, {
            //Define en que porcentaje del objeto observado va a avisar, (si al hacer scroll el objeto se ve menos del 25% va a avisar)
            threshold: this.threshold
        })

        observer.observe(this.player.media)

        //API Visibility Change: Detecta cuando el DOM de la pagina web esta visibe o no. Por ejemplo cuando se cambia de pestaña en el navegador
        document.addEventListener('visibilitychange', this.handleVisibilityChange)
    }

    //entries: lista de todos los objetos que se estan observando
    handleIntersection(entries){
        //El unico objeto que se esta observando (el video)
        const entry = entries[0]

        //Si el radio de interseccion del entry es mayor o igual al threshold el objeto es visible en pantalla, de lo contrario no lo esta
        const isVisible = entry.intersectionRatio >= this.threshold

        if (isVisible) {
            this.player.play()
        } else {
            this.player.pause()
        }


        console.log(entry)

    }

    handleVisibilityChange(){
        const isVisible = document.visibilityState === 'visible'

        if (isVisible) {
            this.player.play()
        } else {
            this.player.pause()
        }

        console.log(isVisible)
    }
}

export default AutoPause;