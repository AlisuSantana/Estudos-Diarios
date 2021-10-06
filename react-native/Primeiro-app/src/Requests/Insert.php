<?php
 include 'DBConfig.php';
 
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 
 $json = file_get_contents('php://input');
 
 $obj = json_decode($json,true);
 
 $Nome = $obj['nm_aluno'];
 
 $Fone = $obj['nm_fone'];
 
 $Email = $obj['nm_email'];
 
 $Sql_Query = "insert into aluno (nm_aluno,nm_fone,nm_email) values ('$Nome','$Fone','$Email')";
  
 if(mysqli_query($con,$Sql_Query)){
   $MSG = 'Aluno cadastrado com sucesso!';
   $json = json_encode($MSG);
   echo $json;
 }else{
   $MSG = 'Erro!';
   $json = json_encode($MSG);
   echo $json;
 }
 mysqli_close($con);
?>