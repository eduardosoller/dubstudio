<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
    header("Content-type:application/json");

    require 'PHPMailer/src/PHPMailer.php';
    require 'PHPMailer/src/SMTP.php';

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;

    date_default_timezone_set('Etc/UTC');

    $post_data = json_decode(file_get_contents("php://input"), true);
    $horario = "";
    foreach($post_data['horario'] as $item){
        $horario.= $item.', ';
    }
    $horarios = rtrim($horario, ', ');
    $message = 'Nome: '.$post_data['name']
    .'<br>Banda: '.$post_data['banda']
    .'<br>E-mail: '.$post_data['email']
    .'<br>Telefone: '.$post_data['phone']
    .'<br>'.$post_data['tipo']
    .'<br>Dia: '.$post_data['dia']
    .'<br>Horário: '.$horarios
    .'<br>Observações: '.$post_data['observacoes'];

$mail = new PHPMailer(true);
$mail->CharSet = "UTF-8";
$mail->isSMTP();
//Enable SMTP debugging
// SMTP::DEBUG_OFF = off (for production use)
// SMTP::DEBUG_CLIENT = client messages
// SMTP::DEBUG_SERVER = client and server messages
$mail->SMTPDebug = SMTP::DEBUG_SERVER;
$mail->Host = 'smtp.kinghost.net';
$mail->Port = 587;
$mail->SMTPAuth = true;
$mail->Username = 'smtp@dubstudio.com.br';
$mail->Password = 'soller4578';
$mail->setFrom('site@dubstudio.com.br', '[SITE DUBSTUDIO]');
$mail->addReplyTo($post_data['email'], $post_data['name']);

$mail->addAddress('studiodub@gmail.com');
$mail->Subject = $post_data['subject'];
//convert HTML into a basic plain-text alternative body
//$mail->msgHTML(file_get_contents('contents.html'), __DIR__);
$mail->Body = $message;
$mail->IsHTML(true);
//send the message, check for errors
if ($mail->send()) {
        echo 'Sua mensagem foi enviada!'.
        $post_data
        ;
} else {
    echo 'Mailer Error: ' . $mail->ErrorInfo;
}
?>