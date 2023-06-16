<?php 
    $to = "knockknockwakeup@gmail.com"; // this is your Email address
    $to2 = "godox.vitebsk@gmail.com"; // this is your Email address

    $from = $_POST['email']; // this is the sender's Email address
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $phone_number = $_POST['phone_number'];

    $subject = "Get in touch";
    // $subject2 = "Copy of your get in touch form";
    $message = '<html><body>';
    $message .= '<b> ' . $first_name . " " . $last_name . "</b> wrote the following:" . "<br>";
    $message .= $_POST['message'] . "<br><br>" . $phone_number . "\n" . $from;
    $message .= '</body></html>';
    // $message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['message'];

    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-Type: text/html;charset=utf-8\r\n";
    // $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "From:" . $from . "\r\n";
    // $headers2 = "From:" . $to;
    mail($to, $subject, $message, $headers);
    mail($to2, $subject, $message, $headers);
    // mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    // echo "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.";

?>