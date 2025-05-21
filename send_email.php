<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name    = htmlspecialchars($_POST["name"]);
    $email   = htmlspecialchars($_POST["email"]);
    $subject = htmlspecialchars($_POST["subject"]);
    $message = htmlspecialchars($_POST["message"]);

    $to      = "www.salmanjutt1122@gmail.com"; // Change to your real email
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "Content-type:text/plain;charset=UTF-8";

    $fullMessage = "Name: $name\nEmail: $email\n\nMessage:\n$message";

    if (mail($to, $subject, $fullMessage, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Error sending message.";
    }
} else {
    http_response_code(405); // Method Not Allowed
    echo "Method not allowed";
}
if (mail($to, $subject, $fullMessage, $headers)) {
    header('Location: thankyou.html');
    exit;
}
?>


