<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name    = htmlspecialchars($_POST["name"]);
    $email   = htmlspecialchars($_POST["email"]);
    $subject = htmlspecialchars($_POST["subject"]);
    $message = htmlspecialchars($_POST["message"]);

    $to      = "m.salmankhalid123@gmail.com"; // REMOVE www. - this is not valid!
    $headers = "From: $email\r\n" .
               "Reply-To: $email\r\n" .
               "Content-Type: text/plain; charset=UTF-8";

    $fullMessage = "Name: $name\nEmail: $email\n\nMessage:\n$message";

    if (mail($to, $subject, $fullMessage, $headers)) {
        // Redirect to thank you page
        header("Location: thankyou.html");
        exit;
    } else {
        echo "Error sending message.";
    }
} else {
    http_response_code(405);
    echo "Method not allowed";
}
?>
