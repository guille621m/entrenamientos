function nuevoAlumno(){
    var selecciona = document.getElementById("seleccionaAlumno");
    selecciona.style.display = "none";
    var mostrar = document.getElementById("nuevoAlumno");
    mostrar.style.display = "block";
}

function guardarAlumno(){
    // Falta mandar a base de datos el nuevo alumno
    location.reload();
}

function cancelarCarga(){
    location.reload();
}

function editarAlumno(){
    var selecciona = document.getElementById("seleccionaAlumno");
    selecciona.style.display = "none";
    var editar = document.getElementById("editarAlumno");
    editar.style.display = "block";
}


