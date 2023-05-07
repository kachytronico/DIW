// Obtener valores de los campos
const rango_salarial = document.getElementById("rango_salarial");
const valor_salarial_rango = document.getElementById("valor_salarial_rango");
const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const telefono = document.getElementById("telefono");
const codigo_pais = document.getElementById("codigo_pais");
const email = document.getElementById("email");
const fecha_nacimiento = document.getElementById("fecha_nacimiento");
const provincia = document.getElementById("provincia_residencia");
const salario = document.getElementById("salario");
const cv = document.getElementById("cv");

let validacion = true;

window.onload = (event) => {

  valor_salarial_rango.innerHTML = "<b>25000 Euros/Brutos Anuales</b>";
  
  }
  
  rango_salarial.addEventListener("change", function(){
  
    valor_salarial_rango.innerHTML = "<b>" + (rango_salarial.value *1000) +" Euros/Brutos Anuales</b>";
  
  });
  
  formulario.addEventListener("antes_de_validar", function(e){
  
      if(formulario.childNodes["nombre"].value==""){
          nombre.placeholder = "Campo Obligatorio";
          nombre.setAttribute("class","obligatorio");
          validacion = false;
      }
  
      if(formulario.childNodes["codigo_pais"].value=="Prefijo"){
          codigo_pais.placeholder = "Campo Obligatorio";
          codigo_pais.setAttribute("class","obligatorio");
          validacion = false;
      }
  
      if(formulario.childNodes["telefono"].value==""){
          telefono.placeholder = "Campo Obligatorio";
          telefono.setAttribute("class","obligatorio");
          validacion = false;
      }
  
      if(formulario.childNodes["fecha_nacimiento"].value==""){
          fecha_nacimiento.placeholder = "Campo Obligatorio";
          fecha_nacimiento.setAttribute("class","obligatorio");
          validacion = false;
      }
  
      if(formulario.childNodes["provincia_residencia"].value=="Provincia"){
          provincia.placeholder = "Campo Obligatorio";
          provincia.setAttribute("class","obligatorio");
          validacion = false;
      }
  
      if(formulario.childNodes["enmail"].value==""){
          email.placeholder = "Campo Obligatorio";
          email.setAttribute("class","obligatorio");
          validacion = false;
      }
   
      if(validacion==false)
          e.preventDefault();
      
  })
  
  nombre.addEventListener("focus", function(){
    nombre.setAttribute("class","redBordes");
    nombre.placeholder = "Nombre y Apellidos";
  
  })
  
  
  codigo_pais.addEventListener("focus", function(){
    codigo_pais.setAttribute("class","redBordes");
  
  })
  
  telefono.addEventListener("focus", function(){
      telefono.setAttribute("class","redBordes");
      telefono.placeholder = "Telefono";
  
  })
  
  fecha_nacimiento.addEventListener("focus", function(){
    fecha_nacimiento.setAttribute("class","redBordes");
  
  })
  
  provincia.addEventListener("focus", function(){
    provincia.setAttribute("class","redBordes");
  
  })
  
  email.addEventListener("focus", function(){
    email.setAttribute("class","redBordes");
    email.placeholder = "Email";
  
  })
