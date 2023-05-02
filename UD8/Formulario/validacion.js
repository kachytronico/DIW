function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var telefono = document.getElementById("telefono").value;
    var correo = document.getElementById("correo").value;
    var fecha_nacimiento = document.getElementById("fecha_nacimiento").value;
    var provincia = document.getElementById("provincia").value;
    var salario = document.getElementById("salario").value;
    var cv = document.getElementById("cv").value;

    if (nombre == "" || telefono == "" || correo == "" || fecha_nacimiento == "" || provincia == "" || salario == "" || cv == "") {
        alert("Por favor, complete todos los campos requeridos");
        return false;
    }
    // Validar que el teléfono tenga el formato correcto
    var patronTelefono = /^\+34\d{9}$/;
    if (!patronTelefono.test(telefono)) {
        alert("El número de teléfono no tiene el formato correcto. Por favor, asegúrese de incluir el código de país +34 y un total de 9 dígitos.");
        return false;
    }

    // Validar que se haya seleccionado una provincia
    if (provincia == "") {
        alert("Por favor, seleccione su provincia de residencia.");
        return false;
    }

    // Validar que se haya subido un archivo PDF
    if (cv.split(".").pop() != "pdf") {
        alert("Por favor, suba un archivo PDF.");
        return false;
    }

    return true;
}
