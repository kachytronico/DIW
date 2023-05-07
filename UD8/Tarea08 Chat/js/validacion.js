

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
  
  formulario.addEventListener("submit", function(event){
  
  
      if(formulario.childNodes[5].value==""){
          nombre.placeholder = "Campo Obligatorio";
          nombre.setAttribute("class","obli");
          validacion = false;
      }
  
  
      if(formulario.childNodes[14].value=="Prefijo"){
          pais.placeholder = "Campo Obligatorio";
          pais.setAttribute("class","obli");
          validacion = false;
      }
  
      if(formulario.childNodes[16].value==""){
          tel.placeholder = "Campo Obligatorio";
          tel.setAttribute("class","obli");
          validacion = false;
      }
  
      if(formulario.childNodes[21].value==""){
          fecha.placeholder = "Campo Obligatorio";
          fecha.setAttribute("class","obli");
          validacion = false;
      }
  
      if(formulario.childNodes[26].value=="Provincia"){
          provincia.placeholder = "Campo Obligatorio";
          provincia.setAttribute("class","obli");
          validacion = false;
      }
  
      if(formulario.childNodes[31].value==""){
          email.placeholder = "Campo Obligatorio";
          email.setAttribute("class","obli");
          validacion = false;
      }
   
      if(validacion==false)
          event.preventDefault();
      
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
