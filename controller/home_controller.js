function mesas_index(){
	$.ajax({
		url: "http://api-restaurante.herokuapp.com/api/v1/mesas.json",
		success: function(resposta){
			mesas = resposta;
		}
	});
}

function mesa_show(id){
	$.ajax({
		url: "http://api-restaurante.herokuapp.com/api/v1/mesas/"+id+".json",
		success: function(resposta){
			mesas = resposta;
		}
	});
}

function mesa_set(id){
	$.ajax({
		url: "http://api-restaurante.herokuapp.com/api/v1/mesas/"+id+".json",
		method: "put",
		data: {
			mesa:{
				status: true
			}
		},
		success: function(resposta){
			mesas = resposta;
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
		success: function(resposta){
			mesas = resposta;
		}
	});
}
