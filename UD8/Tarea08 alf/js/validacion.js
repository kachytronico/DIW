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
const cv = document.getElementById("cv");

let validacion = true;

window.onload = (event) => {

  valor_salarial_rango.innerHTML = "<b>25000 Euros/Brutos Anuales</b>";
  
  }
  
  rango_salarial.addEventListener("change", function(){
  
    valor_salarial_rango.innerHTML = "<b>" + (rango_salarial.value *1000) +" Euros/Brutos Anuales</b>";
  
  });
  
  formulario.addEventListener("submit", function(e){
  
      if(formulario.childNodes[nombre].value==""){
          nombre.placeholder = "Campo Obligatorio";
          nombre.setAttribute("class","obligatorio");
          validacion = false;
      }
  
      if(formulario.childNodes[codigo_pais].value=="Prefijo"){
          codigo_pais.placeholder = "Campo Obligatorio";
          codigo_pais.setAttribute("class","obligatorio");
          validacion = false;
      }
  
      if(formulario.childNodes[telefono].value==""){
          telefono.placeholder = "Campo Obligatorio";
          telefono.setAttribute("class","obligatorio");
          validacion = false;
      }
  
      if(formulario.childNodes[fecha_nacimiento].value==""){
          fecha_nacimiento.placeholder = "Campo Obligatorio";
          fecha_nacimiento.setAttribute("class","obligatorio");
          validacion = false;
      }
  
      if(formulario.childNodes["provincia_residencia"].value=="Provincia"){
          provincia.placeholder = "Campo Obligatorio";
          provincia.setAttribute("class","obligatorio");
          validacion = false;
      }
  
      if(formulario.childNodes["email"].value==""){
          email.placeholder = "Campo Obligatorio";
          email.setAttribute("class","obligatorio");
          validacion = false;
      }
   
      if(validacion==false)
          e.preventDefault();
      
  })
  
  nombre.addEventListener("focus", function(){
    nombre.setAttribute("class","focus");
    nombre.placeholder = "Nombre y Apellidos";
  
  })
  
  
  codigo_pais.addEventListener("focus", function(){
    codigo_pais.setAttribute("class","focus");
  
  })
  
  telefono.addEventListener("focus", function(){
      telefono.setAttribute("class","focus");
      telefono.placeholder = "Telefono";
  
  })
  
  fecha_nacimiento.addEventListener("focus", function(){
    fecha_nacimiento.setAttribute("class","focus");
  
  })
  
  provincia.addEventListener("focus", function(){
    provincia.setAttribute("class","focus");
  
  })
  
  email.addEventListener("focus", function(){
    email.setAttribute("class","focus");
    email.placeholder = "Email";
  
  })
