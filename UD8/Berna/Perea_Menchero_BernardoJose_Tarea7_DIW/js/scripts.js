let provincias = ["Alava","Albacete","Alicante","Almeria","Asturias","Avila","Badajoz","Barcelona","Burgos","Caceres"
,"Cadiz","Cantabria","Castellon","Ciudad Real","Cordoba","A coruña","Cuena","Gerona","Granada",
"Granada","Guadalajara", "Guipuzcoa", "Huelva","Huesca", "Baleares","Jaen","Leon","Lerida",
"Lugo","Madrid","Malaga","Murcia","Navarra","Orense","Palencia","Las Palmas","Pontevedra",
"La Rioja", "Salamanca","Segovia","Sevilla","Soria","Tarragona","Santa Cruz de Tenerife",
"Teruel","Toledo", "Valencia","Valladolid", "Vizcaya","Zamora","Zaragoza"];

let prefijos = ["+34","+376","+33","+353"];
const rango = document.getElementById("customRange1");
const valRango = document.getElementById("valRango");
const formDatos = document.getElementById("formDatos");
const nom = document.getElementById("nom");
const ape = document.getElementById("ape");
const pais = document.getElementById("pais");
const tel = document.getElementById("tel");
const fecha = document.getElementById("fecha");
const prov = document.getElementById("prov");
const email = document.getElementById("email");

let validacion = true;

window.onload = (event) => {

    let selProv = document.getElementById("prov");
    let selPais = document.getElementById("pais");
    
    for(let i=0;i<prefijos.length;i++){
        let option = document.createElement("option");
        option.setAttribute("value",prefijos[i]);
        option.text = prefijos[i];
        selPais.appendChild(option);
    }


    for(let i=0;i<provincias.length;i++){
        let option = document.createElement("option");
        option.setAttribute("value",provincias[i]);
        option.text = provincias[i];
        selProv.appendChild(option);
    }

    valRango.innerHTML = "<b>25000 Euros/Brutos Anuales</b>";

}

rango.addEventListener("change", function(){

    valRango.innerHTML = "<b>" + (rango.value *1000 ) +" Euros/Brutos Anuales</b>";

});

formDatos.addEventListener("submit", function(event){


    if(formDatos.childNodes[4].value==""){
        nom.placeholder = "Obligatorio";
        nom.setAttribute("class","obli");
        validacion = false;
    }

    if(formDatos.childNodes[9].value==""){
        ape.placeholder = "Obligatorio";
        ape.setAttribute("class","obli");
        validacion = false;
    }

    if(formDatos.childNodes[14].value=="Prefijo"){
        pais.placeholder = "Obligatorio";
        pais.setAttribute("class","obli");
        validacion = false;
    }

    if(formDatos.childNodes[16].value==""){
        tel.placeholder = "Obligatorio";
        tel.setAttribute("class","obli");
        validacion = false;
    }

    if(formDatos.childNodes[21].value==""){
        fecha.placeholder = "Obligatorio";
        fecha.setAttribute("class","obli");
        validacion = false;
    }

    if(formDatos.childNodes[26].value=="Provincia"){
        prov.placeholder = "Obligatorio";
        prov.setAttribute("class","obli");
        validacion = false;
    }

    if(formDatos.childNodes[31].value==""){
        email.placeholder = "Obligatorio";
        email.setAttribute("class","obli");
        validacion = false;
    }

    

    
    if(validacion==false)
        event.preventDefault();
    
})

nom.addEventListener("focus", function(){

    nom.setAttribute("class","redBordes");
    nom.placeholder = "Nombre";

})

ape.addEventListener("focus", function(){

    ape.setAttribute("class","redBordes");
    ape.placeholder = "Apellidos";

})

pais.addEventListener("focus", function(){

    pais.setAttribute("class","redBordes");

})

tel.addEventListener("focus", function(){

    tel.setAttribute("class","redBordes");
    tel.placeholder = "Telefono";

})

fecha.addEventListener("focus", function(){

    fecha.setAttribute("class","redBordes");

})

prov.addEventListener("focus", function(){

    prov.setAttribute("class","redBordes");

})

email.addEventListener("focus", function(){

    email.setAttribute("class","redBordes");
    email.placeholder = "Email";

})