<?php
    include 'DBConfig.php';
    $conn = new mysqli($HostName, $HostUser, $HostPass, $DatabaseName);
    if ($conn->connect_error)
    {
        die("Falha de conexão: " . $conn->connect_error);
    }
    $sql = "SELECT * FROM aluno";
    $result = $conn->query($sql);
    if ($result->num_rows > 0)
    {
        while($row[] = $result->fetch_assoc())
        {
            $item = $row;
            $json = json_encode($item);
        }
    }
    else
    {
        echo "Nenhum registro encontrado.";
    }
    echo $json;
    $conn->close();
?>