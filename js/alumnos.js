function nuevoAlumno(){
    var selecciona = document.getElementById("seleccionaAlumno");
    selecciona.style.display = "none";
    var mostrar = document.getElementById("nuevoAlumno");
    mostrar.style.display = "block";
    var evolucion = document.getElementById("evolucionAlumno");
    evolucion.style.display = "none";
}

function guardarAlumno(){
    // Falta mandar a base de datos el nuevo alumno
    location.reload();
    var evolucion = document.getElementById("evolucionAlumno");
    evolucion.style.display = "none";
}

function cancelarCarga(){
    location.reload();
    var evolucion = document.getElementById("evolucionAlumno");
    evolucion.style.display = "none";
}

function editarAlumno(){
    var selecciona = document.getElementById("seleccionaAlumno");
    selecciona.style.display = "none";
    var editar = document.getElementById("editarAlumno");
    editar.style.display = "block";
    var evolucion = document.getElementById("evolucionAlumno");
    evolucion.style.display = "none";
}

function evolucionAlumno() {
    var evolucion = document.getElementById("evolucionAlumno");
    evolucion.style.display = "block";
}


function planificar(){
    var entrenamientos = document.getElementById("entrenamientos");
    entrenamientos.style.display = "none";
    
    var planificar = document.getElementById("planificar");
    planificar.style.display = "block";
    
}

function entrenar(){
    var entrenamientos = document.getElementById("entrenamientos");
    entrenamientos.style.display = "none";
    
    var entrenar = document.getElementById("entrenar");
    entrenar.style.display = "block";
    
}

function cancelarCargaentr() {
    var entrenamientos = document.getElementById("entrenamientos");
    entrenamientos.style.display = "block";

    var entrenar = document.getElementById("entrenar");
    entrenar.style.display = "none";

}

function guardarEntrenamiento() {
    var entrenamientos = document.getElementById("entrenamientos");
    entrenamientos.style.display = "block";

    var entrenar = document.getElementById("entrenar");
    entrenar.style.display = "none";

}

function cancelarCargaplanif() {
    var entrenamientos = document.getElementById("entrenamientos");
    entrenamientos.style.display = "block";

    var planificar = document.getElementById("planificar");
    planificar.style.display = "none";


}

function guardarPlanificacion() {
    var entrenamientos = document.getElementById("entrenamientos");
    entrenamientos.style.display = "block";

    var planificar = document.getElementById("planificar");
    planificar.style.display = "none";
}