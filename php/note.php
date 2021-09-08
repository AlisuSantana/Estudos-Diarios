<?php

// redirect to a page
header('location: index.php');

// Makes a stronger typing

// you can use this:
declare(ticks=1) {
    // entire script here
}

// or you can use this:
declare(ticks=1);
// entire script here

// sintaxe mordant function 
function func(string $func) : bool 
{
    // code...
    return true; // or false
}

// sintaxe mordant function | allows you to return type null
function getMessageError() : ?string // this ?
{
    return null;
}
