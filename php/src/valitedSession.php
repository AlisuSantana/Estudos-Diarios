<?php 

session_start();


function setMessageError(string $error) : void
{
    $_SESSION['error'] = $error;
}

function getMessageError() : ?string 
{
    if(isset($_SESSION['error'])) {
        return $_SESSION['error'];
    }
    return null;
}

