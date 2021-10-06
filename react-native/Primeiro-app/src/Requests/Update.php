<?php
    include 'DBConfig.php';

    $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 
    $json = file_get_contents('php://input');
  
    $obj = json_decode($json,true);

    $Rm = $obj['cd_rm_aluno'];

    $Nome = $obj['nm_aluno'];

    $Fone = $obj['nm_fone'];
    
    $Email = $obj['nm_email'];
    
    $Sql_Query = "UPDATE aluno SET nm_aluno = '$Nome', nm_fone = '$Fone', nm_email = '$Email' WHERE cd_rm_aluno = $Rm";
     
    if(mysqli_query($con,$Sql_Query)){
      $MSG = 'Aluno atualizado com sucesso!';
      $json = json_encode($MSG);
      echo $json;
    }else{
      $MSG = 'Erro!';
      $json = json_encode($MSG);
      echo $json;
    }
    mysqli_close($con);
?>