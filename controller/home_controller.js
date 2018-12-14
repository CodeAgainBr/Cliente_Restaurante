function mesa_index(){
	$.ajax({
		url: "http://api-restaurante.herokuapp.com/api/v1/mesas.json",
		async: false
	});
}

function entrar(){
	escolhida = $("select").val();
	mesa_in(escolhida);
	window.location.href = "cardapio.html";
}

function mesa_in(id){
	$.ajax({
		url: "http://api-restaurante.herokuapp.com/api/v1/mesas/"+id+".json",
		method: "put",
		async: false,
		data: {
			mesa:{
				status: true
			}
		},
		success: function(){
			sessionStorage.setItem('mesa', id);
		}
	});
}

$(document).ajaxComplete(function(event, xhr, settings) {
  if (settings.url === "http://api-restaurante.herokuapp.com/api/v1/mesas.json") { //Index
    mesas = xhr.responseJSON;

  	for (var i = 0; i < mesas.length; i++) {
			$("select").append("<option value="+mesas[i].id+">"+mesas[i].numero+"</option>");
		}
  }
});