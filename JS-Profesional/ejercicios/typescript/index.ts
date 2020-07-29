let muted:boolean = true
let var1 ="s"
let people : string[] = []


interface Rectangulo {
    ancho: number,
    alto: number,
}

let rect:Rectangulo = {
    ancho: 4,
    alto: 7
}

function area(r: Rectangulo) : number {
    return r.alto * r.ancho
}

const areaRect = area(rect)

console.log(areaRect);
