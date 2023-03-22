
// localStorage

let numero = 10;

/**Cambiamos el color de fondo o bien de body */
function cambiarColorDeFondo(){
    //document.getElementsByTagName("body")[0]

    // Selecciono mi body y lo guardo en nodoBody
    let nodoBody = document.querySelector("body")

    alert(nodoBody.style.backgroundColor)

    //Pregunto:
    // Si el color de fondo de body es blanco
    if(nodoBody.style.backgroundColor == "white"){
        // Entonces cambialo a azul cielo
        nodoBody.style.backgroundColor = "lightskyblue"
    }else{
        // De lo contrario cambialo a blanco
        nodoBody.style.backgroundColor = "white"
    }

    document.querySelector("#botoncito").style.display = "none"
    nodoBody.style.display = "none"
    
    /** Cuando utilizamos CSS y JS podemos modificar la clase
     * de CSS de forma dinamica a todos nuestros componentes
     */
    //document.querySelector("body").classList.add("dark")
}

function agregarAlumno(){
    // Asigna a la variable nombre el valor que 
    // está escrito en el componente con id nombre
    let nombre = document.querySelector("#nombre").value
    let apellidos = document.getElementById("apellidos").value
    let identificador = document.querySelector("#identificador").value

    // Seleccionamos nuestros campos de alumnos y mensaje
    let nodoAlumnos = document.querySelector("#Alumnos")
    let nodoMensaje = document.querySelector("#mensaje")

    // Reemplazamos el mensaje por "Agregando alumnos..."
    nodoMensaje.innerHTML = "Agregando alumnos ..."

    // Agregamos a la división con id Alumnos el componente con los nombres
    nodoAlumnos.innerHTML = 
    `
    <div style="background-color:lightblue;">
        <h3>${nombre}</h3>
        <p>${apellidos}</p>
        <b>${identificador}</b>
    </div>
    `
}

function colocarPantallaInicioSesion(){
    // Seleccionamos el elemento o contenedor
    let nodoMensaje = document.querySelector("#mensaje")

    // Reemplazamos lo que esta dentro de las etiquetas o
    // nodo con id mensaje y colocamos el siguiente código
    // HTML
    nodoMensaje.innerHTML = 
    `
    <input id="" placeholder="Usuario">
    <input id="" placeholder="Contraseña">
    <button onclick="iniciarSesion()">Iniciar Sesión</button>
    `
}

function iniciarSesion(){
    // Seleccionamos nuestra caja o pantalla de mensaje
    let nodoMensaje = document.querySelector("#mensaje")

    // Reemplazamos el contenido de nuestra caja con botones
    nodoMensaje.innerHTML = 
    `
    <button>Consultar Saldo</button>
    <button>Agregar Saldo</button>
    <button>Retirar Saldo</button>
    <button onclick="colocarPantallaInicioSesion()">Salir</button>
    `
}

// Es necesario cuando queremos ejecutar una funcion una vez
// termine de pintar todo nuestro HTML en pantalla
window.onload = colocarPantallaInicioSesion