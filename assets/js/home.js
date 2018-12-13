$(document).ready(function(){
	setTimeout(preencherMesa(), 3000);
	
});

function preencherMesa(){
	index = 0;
	for(mesa in mesas){
		$("#select_mesa").append("<option value='option'"+mesas[index].numero+">"+mesas[index].numero+"</option>");
		index++;
	}
}

function mesa_index(){
	var mesas;
	$.get("https://api-restaurante.herokuapp.com/api/v1/mesas.json", function(resultado){
		mesas = 0;
		alert(mesas);
	});
}