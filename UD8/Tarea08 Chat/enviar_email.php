<?php
if(isset($_POST['enviar'])) {

    // Recoger los datos del formulario
    $nombre = $_POST['nombre'];
    $telefono = $_POST['telefono'];
    $email = $_POST['email'];
    $fecha_nacimiento = $_POST['fecha_nacimiento'];
    $provincia = $_POST['provincia'];
    $salario_deseado = $_POST['salario_deseado'];
    $cv = $_FILES['cv']['name'];
    $cv_tmp = $_FILES['cv']['tmp_name'];

    // Configurar los datos del correo
    $destinatario = "tu_correo_electronico@tudominio.com";
    $asunto = "Solicitud de empleo";

    $mensaje = "Nombre: $nombre\n\n";
    $mensaje .= "Teléfono: $telefono\n\n";
    $mensaje .= "Email: $email\n\n";
    $mensaje .= "Fecha de nacimiento: $fecha_nacimiento\n\n";
    $mensaje .= "Provincia de residencia: $provincia\n\n";
    $mensaje .= "Salario deseado: $salario_deseado\n\n";

    // Adjuntar el CV al correo
    $archivo = $cv_tmp;
    $contenido = chunk_split(base64_encode(file_get_contents($archivo)));
    $adjunto = "Content-Disposition: attachment; filename=".$cv.";";
    $adjunto .= "Content-Type: application/pdf; name=".$cv.";";
    $adjunto .= "Content-Transfer-Encoding: base64\n\n".$contenido."\n\n";

    // Enviar el correo
    $headers = "From: ".$nombre." <".$email.">".PHP_EOL;
    $headers .= "Reply-To: ".$email.PHP_EOL;
    $headers .= "MIME-Version: 1.0".PHP_EOL;
    $headers .= "Content-Type: multipart/mixed; boundary=\"".md5(time())."\"".PHP_EOL;

    $mensaje = "--".md5(time())."\n";
    $mensaje .= "Content-Type: multipart/alternative; boundary=\"".md5(time())."\"\n\n";

    $mensaje .= "--".md5(time())."\n";
    $mensaje .= "Content-Type: text/plain; charset=\"iso-8859-1\"\n";
    $mensaje .= "Content-Transfer-Encoding: 8bit\n\n";
    $mensaje .= $mensaje_texto."\n\n";

    $mensaje .= "--".md5(time())."\n";
    $mensaje .= $adjunto."\n\n";
    $mensaje .= "--".md5(time())."--";

    mail($destinatario, $asunto, $mensaje, $headers);

    // Redirigir a la página de confirmación
    header("Location: confirmacion.html");
}
?>
