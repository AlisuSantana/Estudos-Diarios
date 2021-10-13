<?php

require('../db_config.php');

$method = strtolower($_SERVER['REQUEST_METHOD']);

if($method === 'QUAL O METHOD DA REQUISIÇÂO / GET-POST-PUT-DELETE') {

    //code...
    
} else {
    $response['error'] = "Metodo não aceito";
}

require('../request_config.php');


/*
    $sql = $PDO->query("SELECT * FROM test123");

    if($sql->rowCount() > 0) {
        $data = $sql->fetchAll(PDO::FETCH_ASSOC);

        foreach ($data as $item) {
            $response['result'] = [
                'id' => $item['cd_user'],
                'name' => $item['nm_user'],
                'mae' => $item['nm_mae'],
                'pai' => $item['nm_pai']
            ];
        }
    }
*/

/*
 $id = filter_input(INPUT_GET, 'id');

    if ($id) {

        $sql = $PDO->prepare("SELECT * FROM tb_user WHERE cd_user = :id");
        $sql->bindValue(':id', $id);
        $sql->execute();

        if ($sql->rowCount() > 0) {
            $sql->fetchAll(PDO::FETCH_ASSOC);
            $response['result'] = [
                'id' => $item['cd_user'],
                'name' => $item['nm_user'],
                'mae' => $item['nm_mae'],
                'pai' => $item['nm_pai']
            ];
        } else {
            $response['error'] = "Id inexistente";
        }
    } else {
        $response['error'] = "ID não informado";
    }
*/

/*
    $user = filter_input(INPUT_POST, 'name');
    $mae = filter_input(INPUT_POST, 'mae');
    $pai = filter_input(INPUT_POST, 'pai');

    if ($name && $mae && $pai) {
        
        $sql = $PDO->prepare("INSERT INTO tb_user (nm_user, nm_mae, nm_pai) 
                              VALUES (':user', ':mae', ':pai')");
        $sql->bindValue(':user', $user);
        $sql->bindValue(':mae', $mae);
        $sql->bindValue(':pai', $pai);
        $sql->execute();
        
        $id = $PDO->lastInsertId();

        $response['result'] = [
            'id' => $id,
            'name' => $user,
            'mae' => $mae,
            'pai' => $pai
        ];

    } else {
        $response['error'] = "Falta Informações";
    }
*/

/*
    parse_str(file_get_contents('php://input'), $input);

    $id = filter_var($input['id'] ?? null);
    $user = filter_var($input['user'] ?? null);
    $mae = filter_var($input['mae'] ?? null);
    $pai = filter_var($input['pai'] ?? null);

 if ($id & $user && $mae && $pai) {

      $sql = $PDO->prepare("SELECT * FROM tb_user WHERE cd_user = :id");
      $sql->bindValue(':id', $id);
      $sql->execute();

        if($sql->rowCount() > 0) {

            $sql = $PDO->prepare("UPDATE tb_user set nm_user = :user, nm_mae = :mae, nm_pai = :pai
                                  WHERE cd_user = $id");
            $sql->bindValue(':user', $user);
            $sql->bindValue(':mae', $mae);
            $sql->bindValue(':pai', $pai);
            $sql->execute();
            

                        
            $response['result'] = [
                'id' => $id,
                'name' => $user,
                'mae' => $mae,
                'pai' => $pai
            ];

        } else {
            $response['error'] = "Esse cara é inexistente amigão";
        }     

    } else {
        $response['error'] = "Falta informações guerreiro!!!!";
    }
*/

/*
    parse_str(file_get_contents('php://input'), $input);
    $id = filter_var($input['id'] ?? null);
if($id) {

        $sql = $PDO->prepare("SELECT * FROM tb_user WHERE cd_user = :id");
        $sql->bindValue(':id', $id);
        $sql->execute();
        
        if($sql->rowCount() > 0) {
            $sql = $PDO->prepare("DELETE FROM tb_user WHERE cd_user = :id");
            $sql->bindValue(':id', $id);
            $sql->execute();
        } else {
            $response['error'] = "Usuario não existe";
        }
    } else {
        $response['error'] = "Maluco, não foi informado o ID do CARA";
    }
*/
