<?php
    include 'DBConfig.php';

    $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 
    $json = file_get_contents('php://input');
  
    $obj = json_decode($json,true);

    $Rm = $obj['cd_rm_aluno'];
    
    $Sql_Query = "DELETE FROM aluno WHERE cd_rm_aluno = $Rm";
     
    if(mysqli_query($con,$Sql_Query)){
      $MSG = 'Aluno deletado com sucesso!';
      $json = json_encode($MSG);
      echo $json;
    }else{
      $MSG = 'Erro!';
      $json = json_encode($MSG);
      echo $json;
    }
    mysqli_close($con);
?>