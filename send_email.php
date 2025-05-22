<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name    = htmlspecialchars(trim($_POST["name"]));
    $email   = htmlspecialchars(trim($_POST["email"]));
    $subject = htmlspecialchars(trim($_POST["subject"]));
    $message = htmlspecialchars(trim($_POST["message"]));

    $to      = "m.salmankhalid123@gmail.com"; // ✅ Your real email
    $headers = "From: $email\r\n" .
               "Reply-To: $email\r\n" .
               "Content-Type: text/plain; charset=UTF-8";

    $fullMessage = "Name: $name\n";
    $fullMessage .= "Email: $email\n\n";
    $fullMessage .= "Message:\n$message";

    // ✅ Send only once
    if (mail($to, $subject, $fullMessage, $headers)) {
        header('Location: thankyou.html');
        exit;
    } else {
        echo "Error sending message.";
    }
} else {
    http_response_code(405); // Method Not Allowed
    echo "Method not allowed";
}
?>
