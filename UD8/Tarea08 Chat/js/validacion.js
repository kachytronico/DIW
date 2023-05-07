
function validarFormulario() {
  // Obtener valores de los campos
  var nombre = document.getElementById("nombre").value;
  var telefono = document.getElementById("telefono").value;
  var email = document.getElementById("email").value;
  var fecha_nacimiento = document.getElementById("fecha_nacimiento").value;
  var provincia = document.getElementById("provincia").value;
  var salario = document.getElementById("salario").value;
  var cv = document.getElementById("cv").value;
  
  // Validar que los campos no estén vacíos
  if (nombre == "" || telefono == "" || email == "" || fecha_nacimiento == "" || provincia == "" || salario == "" || cv == "") {
    alert("Por favor, complete todos los campos requeridos");
    return false;
  }
  
    // Validar formato de teléfono
    const regexTelefono = /^[1-9]\d{8}$/;
    if (!regexTelefono.test(telefono)) {
      alert("Por favor, introduce un número de teléfono válido (9 dígitos)");
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
