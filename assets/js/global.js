function mesa_out(id){
	$.ajax({
		url: "http://api-restaurante-vinicius.herokuapp.com/api/v1/mesas/"+id+".json",
		method: "put",
		data: {
			mesa:{
				status: false
			}
		},
		success: function(){
			sessionStorage.setItem('mesa', "");
			window.location.href = "home.html";
		},
		error: function(){
			sessionStorage.setItem('mesa', "");
			window.location.href = "home.html";
		}
	});
}
