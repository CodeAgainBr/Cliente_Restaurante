<!DOCTYPE html>
<html>
<head>
	<title>home</title>
	<script src="https://code.jquery.com/jquery-3.3.1.min.js"
	integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
	crossorigin="anonymous"></script>
	<script src="../controller/home_controller.js"></script>
</head>
<body>
	<h1>Bem vindo ao restaurante ...</h1>
	<select id="#select_mesa">
		<option>Selecione sua mesa:</option>
	</select>
	<button onclick="mesa_out(sessionStorage.getItem('mesa'))">Confirmar</button>
</body>
</html>

<script>
	$(document).ready(function(){
		let mesas = 0;
		mesa_index();
	});
</script>