function validarFormulario() {
    // Obtener valores de los campos
    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const email = document.getElementById("email").value;
  
    // Validar que los campos no estén vacíos
    if (nombre === "" || telefono === "" || email === "") {
      alert("Por favor, rellena todos los campos obligatorios");
      return false;
    }
  
    // Validar formato de teléfono
    const regexTelefono = /^[1-9]\d{8}$/;
    if (!regexTelefono.test(telefono)) {
      alert("Por favor, introduce un número de teléfono válido (9 dígitos)");
      return false;
    }
  
    return true;
  }
  