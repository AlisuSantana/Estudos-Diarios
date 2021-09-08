<?php
    session_start();
?>
<?php

$arrUser = [];
$name = $_POST['name'];
$email = $_POST['email'];
$age = $_POST['age'];

if(isset($name) && !empty($name) && strlen($name) >= 3 && strlen($name) < 30) {
    echo $name;
} else {
    $_SESSION['error'] = "Verifique se o nome contém entre 3 e 30 caracteres!";
    header('location: index.php');
    return;
}
echo "<br>";
if(filter_var($email, FILTER_VALIDATE_EMAIL)){
    echo $email;
} else {
    $_SESSION['error'] = "Endereço de E-mail inválido";
    header('location: index.php');
    return;
}

if(is_numeric($age)) {
    echo $age;
} else {
    $_SESSION['error'] = "Idade não é valída";
    header('location: index.php');
    return;
}



?>