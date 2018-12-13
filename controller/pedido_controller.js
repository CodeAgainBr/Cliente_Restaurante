let carrinho = sessionStorage.getItem('carrinho');

function pedido_index(){
	pedido = [];

	for(i in carrinho){
		$.ajax({
			url: "http://api-restaurante.herokuapp.com/api/v1/produtos/"+i.id+".json",
			async: false,
			success: function(xhr){
				pedido.push(xhr.responseJSON);
			}
		});
	}
	
	pedido_success();
}

function pedido_create(){
	$.ajax({
		url: "http://api-restaurante.herokuapp.com/api/v1/pedidos.json",
		method: "post",
		data: {
			pedido:{
				
			}
		},
		success: function(){
			sessionStorage.setItem('mesa', id);
		}
	});
}

function remover_carrinho(id){
	carrinho.push(id);
	sessionStorage.setItem('carrinho', carrinho);
}

function pedido_success(){
	for (var i = 0; i < pedido.length; i++) {
		html = "<div class='item'><img src='"+pedido[i].imagem+"'><h3 id='nome'>"+pedido[i].nome+"</h3><p class='descricao'>"+pedido[i].descricao+"</p><span id='valor'>R$"+pedido[i].valor+"</span><button onclick='add_carrinho("+pedido[i].id+")'>Adicionar ao carrinho</button></div>"
		$(".pedido").append(html);
	}
}
