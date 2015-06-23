<?php 
require("php/class.phpmailer.php");
$errmasg = "";

 $name = htmlentities(trim($_POST['name']));
 $email = htmlentities(trim($_POST['email']));
 $subject = htmlentities(trim($_POST['company']));
 $msg = htmlentities(trim(nl2br($_POST['msg'])));
 
$mail = new PHPMailer();

$mail->IsSMTP();                                 		 // send via SMTP
$mail->Host     = "mail.tusintareas.com"; 					 // SMTP server
$mail->SMTPAuth = true;    								 // turn on SMTP authentication
$mail->Username = "gdavid.ptorrez@gmail.com"; 			     // SMTP username
$mail->Password = "formatica";							 // SMTP password


$mail->From     = "gdavid.ptorrez@gmail.com";				 // SMTP username
$mail->AddAddress("gdavid.ptorrez@gmail.com");			  	 // Your Adress
$mail->Subject  =  "Attorney help ".$name. '!' ;

$mail->IsHTML(true);  
$mail->CharSet = 'UTF-8';
$mail->Body     =  "<p>Has recibido la siguiente consulta .</p>
					  <p><strong>Nombre: </strong> {$name} </p>
					  <p><strong>Correo Electronico: </strong> {$email} </p>
					  <p><strong>Telefono: </strong> {$subject} </p>
					  <p><strong>Instruciones: </strong> {$msg} "</p>
					  

if(!$mail->Send())
{
   echo "Correo no Enviado <p>";
   echo "Error: " . $mail->ErrorInfo;
   exit;
}

echo "Successfull Email!";

?>