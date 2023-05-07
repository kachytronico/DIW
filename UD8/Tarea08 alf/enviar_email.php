<?php

if(isset($_POST['nom'])){

    // Recoger los datos del formulario
    $nombre = $_POST['nombre'];
    $codigo_pais = $_POST['codigo_pais'];
    $telefono = $_POST['telefono'];
    $email = $_POST['email'];
    $fecha_nacimiento = $_POST['fecha_nacimiento'];
    $provincia = $_POST['provincia_residencia'];
    $rango_salarial = $_POST['rango_salarial']*1000;
    $cv = $_FILES['cv']['name'];
    $cv_tmp = $_FILES['cv']['tmp_name'];

    // Configurar los datos del correo
    $destinatario = $email;
    $asunto = "Solicitud de empleo";

    $mensaje = "<b>".$nombre."</b> gracias por rellenar el formulario. Los datos introducidos son los siguientes:<br>;
    <b>Teléfono:</b> (".$codigo_pais.") ".$telefono."<br>
    <b>Fecha de nacimiento:</b> ".$fecha_nacimiento."<br>
    <b>Provincia:</b> ".$provincia."<br>
    <b>Rango salarial:</b> ".$rango_salarial." Euros/Brutos anuales<br>
    <b>CV:</b> ".$_FILES['cv']["name"]."<br>";

    echo $mensaje;

    echo "<br><b>En usos segundos de redireccionará a la página principal automáticamente</b><br>";

    try{
        mail($email,'Entrada de datos',$mensaje);
    }catch(Exception $ex){
        echo "Error al enviar porque no existe el servidor smtp";
    }
    
    header("refresh:10, url=index.html");
}
?>
