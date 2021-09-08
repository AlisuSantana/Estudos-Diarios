<?php

include('Classes/accountBanck.php');


$account = new AccountBank('NuBank', 'Allyson', '1234', '171627-9', '3500');


echo $account->getBalance();
echo "<br>";

$account->deposit(300);

echo $account->getBalance(); 
echo "<br>";

$account->withdrawal(400);

echo $account->getBalance(); 
echo "<br>";