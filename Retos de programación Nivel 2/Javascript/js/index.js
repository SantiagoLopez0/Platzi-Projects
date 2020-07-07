window.onload = function () {
    reto1();
    reto2();
    //alert("Empecemos");

    function reto1() {
        document.getElementById("sumbitReto1").addEventListener("click", function () {
            var tagResultado = document.getElementById("result1");
            var numero1 = document.querySelector("#numero11").value;
            var numero2 = document.querySelector("#numero12").value;
            var diferencia = 0;

            if (numero1 == "" || numero2 == "") {
                alert("Faltan campos por llenar")
            } else {
                if (numero1 == numero2) {
                    tagResultado.textContent = "Son iguales";
                } else if (numero1 > numero2) {
                    var resultTemp = numero1 + " es mayor a " + numero2;
                    diferencia = numero1 - numero2;
                    tagResultado.textContent = resultTemp + "\n y la diferencia de los números es " + diferencia;
                } else {
                    var resultTemp = numero2 + " es mayor a " + numero1;
                    diferencia = numero2 - numero1;
                    tagResultado.textContent = resultTemp + "\n y la diferencia de los números es " + diferencia;
                }
            }
        })

    }

    function reto2() {
        document.getElementById("sumbitReto2").addEventListener("click", function () {
            var tagResultado = document.getElementById("result2");
            var limite = document.querySelector("#numero21").value;
            var numComparar = document.querySelector("#numero22").value;

            if(numComparar < limite){
                tagResultado.textContent ="El número "+ numComparar +" se encuentra en el rango, gracias."
            }else{
                tagResultado.textContent = "El número "+ numComparar +" excede el límite permitido"
            }

        })
    }
}
