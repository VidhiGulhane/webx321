<?php
// Database connection variables
$servername = "localhost";  // Since you are running locally, it's 'localhost'
$username = "root";         // Default username for XAMPP MySQL
$password = "";             // Leave this blank unless you set a password for MySQL
$dbname = "userlogin";      // The name of the database you created in phpMyAdmin

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>