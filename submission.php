<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "realnomanwardak@gmail.com";
    $subject = "New Form Submission";
    
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $category = htmlspecialchars($_POST["category"]);
    $otherInput = htmlspecialchars($_POST["otherInput"]);
    $message = htmlspecialchars($_POST["message"]);

    $fullMessage = "Name: $name\nEmail: $email\nCategory: $category\nOther Input: $otherInput\nMessage:\n$message";
    
    $headers = "From: $email";
    
    if (mail($to, $subject, $fullMessage, $headers)) {
        header("Location: thank-you.html");
        exit();
    } else {
        echo "Error sending email.";
    }
}
?>
