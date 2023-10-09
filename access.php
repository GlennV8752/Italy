<?php
$expected_password = "seujven"; // Replace with your desired password

if ($_POST['password'] == $expected_password) {
    // Correct password, allow access to your protected content
    include("index.html"); // Include your actual protected content
} else {
    // Incorrect password, display an error message
    echo "Incorrect password. Please try again.";
}
?>
