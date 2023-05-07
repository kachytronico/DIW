<?php

if(isset($_POST['nom'])){

    $nombre = $_POST['nom'];
    $apelli = $_POST['ape'];
    $pais = $_POST['codpais'];
    $tel = $_POST['tel'];
    $fecha = $_POST['fecha'];
    $prov = $_POST['prov'];
    $email = $_POST['email'];
    $rango = $_POST['rang']*1000;
    $archivocv = $_FILES['cv'];

    $mensaje ="<b>".$nombre." ".$apelli."</b> has intrucido tus datos en el formulario<br> 
    <b>Telefono:</b> (".$pais.") ".$tel."<br>
    <b>Fecha de nacimiento:</b> ".$fecha."<br>
    <b>Provincia:</b> ".$prov."<br>
    <b>Rango salarial:</b> ".$rango." Euros/Brutos anuales<br>
    <b>CV:</b> ".$_FILES['cv']["name"]."<br>";

    echo $mensaje;

    echo "<br><b>La pagina te auto redireccionara a la principal en 10 segundos</b><br>";

    try{
        mail($email,'Entrada de datos',$mensaje);
    }catch(Exception $ex){
        echo "Error al mandar por no existir servidor smtp";
    }
    

    header("refresh:10, url=index.html");
}
?>