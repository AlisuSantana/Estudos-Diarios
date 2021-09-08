<?php
    session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Form</title>
</head>
<body>
    
    <form action="script.php" method="POST">

        <?php
            $error = isset($_SESSION['error']) ? $_SESSION['error'] : '';
            if(!empty($error)) {            
                echo $error;                
            }
        ?>

        <div>
            <Label for="name">Seu Nome</Label><br>
            <input type="text" id="name" name="name" placeholder="nome">
        </div>
        <div>
            <label for="email">Seu E-mail</label><br>
            <input type="email" id="email" name="email" placeholder="E-mail">
        </div>
        <div>
            <label for="age">Sua idade</label><br>
            <input type="text" id="age" name="age" placeholder="Idade">
        </div>
       <div>
        <input type="submit"  value="Enviar">
       </div>
    </form>

</body>
</html>