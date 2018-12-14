let carrinho = sessionStorage.getItem('carrinho');
let valor_total = 0;

function pedido_index(){
	pedidos = [];

	for(i in carrinho){
		$.ajax({
			url: "http://api-restaurante.herokuapp.com/api/v1/produtos/"+i.id+".json",
			async: false,
			success: function(xhr){
				pedidos.push(xhr.responseJSON[0]);
				valor_total += xhr.responseJSON[0].valor
			},
			error: function(xhr){
				console.log(xhr.responseJSON);
			}
		});
	}
	
	pedido_success();
}

function pedido_finalizar(){
	pedido_create();
}

function pedido_create(){
	$.ajax({
		url: "http://api-restaurante.herokuapp.com/api/v1/pedidos.json",
		method: "post",
		data: {
			pedido:{
				mesa: sessionStorage.getItem('mesa')
			}
		},
		success: function(xhr){
			sessionStorage.setItem('pedido', xhr.responseJSON[0].id);
			for(i = 0; i < sessionStorage('carrinho').length; i++){
				item_create(sessionStorage('carrinho')[i][0], sessionStorage('carrinho')[i][1], xhr.responseJSON[0].id);
			}
		}
	});
}

function item_create(produto, quantidade, pedido){
	$.ajax({
		url: "http://api-restaurante.herokuapp.com/api/v1/itens.json",
		method: "post",
		data: {
			item: {
				produto: produto,
				quantidade: quantidade,
				pedido: pedido
			}
		}
	});
}

function remover_carrinho(id){
	carrinho.push(id);
	sessionStorage.setItem('carrinho', carrinho);
}

function pedido_success(){
	for (var i = 0; i < pedidos.length; i++) {
		html = "<div id='item-pedido"+i+"' onclick='modal("+i+");' class='item px-1 py-1'><div class='row-item row px-2 py-2'><div class='col-auto px-0'><img class='prato-img rounded' src='"+pedidos[i].image+"'></div><div class='col-8 pl-0'><p class='prato-nome text-white mb-0'>"+pedidos[i].nome+"</p><p class='prato-detalhes text-white'>"+produtos[i].descricao+"</p><div class='options row ml-0'><h5 class='prato-valor mb-0'><span class='badge badge-danger w-100'>R$"+pedidos[i].valor+"</span></h5></div></div></div></div>";
		$("#transparent-card").append(html);
	}
	$("#valor-total").html("R$ "+valor_total);
}
