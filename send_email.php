<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name    = htmlspecialchars($_POST["name"]);
    $email   = str_replace(array("\r", "\n"), '', htmlspecialchars($_POST["email"]));
    $subject = str_replace(array("\r", "\n"), '', htmlspecialchars($_POST["subject"]));
    $message = htmlspecialchars($_POST["message"]);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format.";
        exit;
    }

    if (empty($subject)) {
        $subject = "New Contact Form Submission";
    }

    $to = "m.salmankhalid123@gmail.com";

    $headers = "From: $email\r\n" .
               "Reply-To: $email\r\n" .
               "Content-Type: text/plain; charset=UTF-8";

    $fullMessage = "Name: $name\nEmail: $email\n\nMessage:\n$message";

    if (mail($to, $subject, $fullMessage, $headers)) {
        header('Location: thankyou.html');
        exit;
    } else {
        error_log("Mail failed for: $email - Subject: $subject");
        echo "Error sending message. Please try again later.";
    }
} else {
    http_response_code(405);
    echo "Method not allowed.";
}
?>
