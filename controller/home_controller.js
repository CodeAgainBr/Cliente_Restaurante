function mesa_index(){
	$.ajax({
		url: "http://api-restaurante.herokuapp.com/api/v1/mesas.json",
		async: false
	});
}

function mesa_in(id){
	$.ajax({
		url: "http://api-restaurante.herokuapp.com/api/v1/mesas/"+id+".json",
		method: "put",
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

function mesa_out(id){
	$.ajax({
		url: "http://api-restaurante.herokuapp.com/api/v1/mesas/"+id+".json",
		method: "put",
		data: {
			mesa:{
				status: false
			}
		},
		success: function(){
			sessionStorage.setItem('mesa', "");
		}
	});
}

$(document).ajaxComplete(function(event, xhr, settings) {
  if (settings.url === "http://api-restaurante.herokuapp.com/api/v1/mesas.json") { //Index
    mesas = xhr.responseJSON;

  	for (var i = 0; i < mesas.length; i++) {
			$("select").append("<option>"+mesas[i].numero+"</option>");
		}
  }
});