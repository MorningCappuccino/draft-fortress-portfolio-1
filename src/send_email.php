<?php 
    $to = "knockknockwakeup@gmail.com"; // this is your Email address

    $from = $_POST['email']; // this is the sender's Email address
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $phone_number = $_POST['phone_number'];

    $subject = "Get in touch";
    // $subject2 = "Copy of your get in touch form";
    $message = $first_name . " " . $last_name . " wrote the following:" . "\n\n" . $_POST['message'] . "\n\n" . $_POST['phone_number'];
    // $message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['message'];

    $headers = "From:" . $from;
    // $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    // mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    // echo "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.";

?>