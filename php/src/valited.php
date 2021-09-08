<?php
    session_start();
?>
<?php

// declare('strict_type=1');

$arrUser = [];
$name = $_POST['name'];
$email = $_POST['email'];
$age = $_POST['age'];

function name(string $name) : bool
{
    if(!isset($name) && empty($name) && strlen($name) <= 3 && strlen($name) > 30) {
        setMessageError("Verifique se o nome contém entre 3 e 30 caracteres!");
        return false;
    } 
    echo $name;
    return true;
}
function age(string $email) : bool
{   
    if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
        setMessageError("Endereço de E-mail inválido");
        return false;
    } 
    echo $email;
    return true;
}
function email(string $age) : bool
{
    if(!is_numeric($age)) {
        setMessageError("Idade não é valída");
        return false;
    }
    echo $age;
    return true;
}






?>