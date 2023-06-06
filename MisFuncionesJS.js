/**
 * Funcion que elige una foto de manera aleatoria y permite seleccionar el nombre correspondiente a la imagen
 * @method mostrarFotoAleatoria
 */



var imagenes = [
    {nombre: "Mistol", ruta: "Imagenes/mistol.png"},
    {nombre: "Chañar", ruta: "Imagenes/chañar.png"},
    {nombre: "Pino", ruta: "Imagenes/pino1.png"},
];

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
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultado = document.getElementById("total");

    if (num2 !== 0) {
        var division = Math.floor(num1 / num2);
        resultado.value = division;
    } else {
        alert("Error: No se puede dividir por cero");
        resultado.value = "";
    }
}
