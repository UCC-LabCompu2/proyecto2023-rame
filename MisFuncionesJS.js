



var imagenes = [
    {nombre: "Mistol", ruta: "Imagenes/mistol.png"},
    {nombre: "Chañar", ruta: "Imagenes/chañar.png"},
    {nombre: "Pino", ruta: "Imagenes/pino1.png"},
];

/**
 * Funcion que elige una foto de manera aleatoria y permite seleccionar el nombre correspondiente a la imagen
 * @method mostrarFotoAleatoria
 */
function mostrarFotoAleatoria() {
    var imagenSeleccionada = document.getElementById("imagen-seleccionada");
    var opciones = document.getElementsByClassName("opciones")[0].getElementsByTagName("button");
    var resultado = document.getElementById("resultado");

    var imagenAleatoria = imagenes[Math.floor(Math.random() * imagenes.length)];
    imagenSeleccionada.src = imagenAleatoria.ruta;
    imagenSeleccionada.alt = imagenAleatoria.nombre;

    for (var i = 0; i < opciones.length; i++) {
        opciones[i].addEventListener("click", function () {
            var opcionSeleccionada = this.textContent;

            console.log("Opcion seleccionada: "+opcionSeleccionada)
            console.log("Nombre imagen: "+imagenAleatoria.nombre)
            if (opcionSeleccionada === imagenAleatoria.nombre) {
                resultado.textContent = "¡Correcto!";

            } else {
                resultado.textContent = "Incorrecto. Intenta nuevamente.";
            }

            mostrarFotoAleatoria();
        });
    }

}

mostrarFotoAleatoria();


/**
 * Funcion que permite ingresar 2 numeros y calcular la divicion entre ellos, si se ingresa mal un numero aparece una ventrna de error
 * @method calcularDivision
 */

function calcularDivision() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultado = document.getElementById("total").value;

    if(num1>70000){
        alert("No se puede realizar el grafico");
        document.getElementById("num1").value = "";
    }
    if(num2==0){
        alert("Error: No se puede dividir por cero");
        document.getElementById("total").value = "";
    }
    if (num1 && num2) {
        const division = Math.floor(num1 / num2);
        document.getElementById("total").value = division;
        dibujarArboles(num1, division);
    }
}

/**
 * Funcion que elige una foto de manera aleatoria y permite seleccionar el nombre correspondiente a la imagen
 * @method dibujarArboles
 * @param {number} hect - contiene el tamaño del terreno
 * @param {number} cantArb - Contiene la cantidad de arboles
 */
function dibujarArboles(hect, cantArb){
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = canvas.width;

    console.log("Hectareas totales: "+hect)
    console.log("Cantidad de Arboles: "+cantArb)
    const cantCampos = hect/10000;
    console.log("Hectareas calculadas: "+ cantCampos);

    let margen=0
    let cantArbxHec = parseInt(cantArb/cantCampos);

    ctx.font="10pt Verdana";

    for(let i=0;i<cantCampos;i++){
        ctx.beginPath();
        ctx.fillStyle = "#5bcc25";
        ctx.fillRect(margen, 0, 100, 100);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle = "#333";
        ctx.fillText( cantArbxHec+" Arboles", margen+10, 50);
        ctx.fill();
        ctx.closePath();

        margen = margen +110;
    }


}
