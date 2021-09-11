<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Tela inicial</title>
</head>
<body>
	<div>
		<form action="{{route('user.store')}}" method="POST">
			<input type="text" name="name" placeholder="Name">
			<input type="email" name="email" placeholder="E-mail">
			<input type="password" name="password" placeholder="Password">
			<input type="submit" value="Enviar">
		</form>
	</div>
</body>
</html>