<?php

$userNameControl = $_POST['userNameControl'];
$userPhoneControl = $_POST['userPhoneControl'];



// Load Composer's autoloader
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php'; 
require 'phpmailer/Exception.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    //Server settings
    $mail->SMTPDebug = 2;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'repair.design.rostov@gmail.com';                     // SMTP username
    $mail->Password   = 'ivanrepair000';                               // SMTP password
    $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 465;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('repair.design.rostov@gmail.com');
    $mail->addAddress('mvkovshura@yandex.ru');     // Add a recipient



    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Новая заявка';
    $mail->Body = "Имя пользователя: ${userNameControl}, его телефон: ${userPhoneControl}.";


    if ($mail->send()) {
        echo "ok";
    } else {
        echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
    }


} catch (Exception $e) {
    echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
}