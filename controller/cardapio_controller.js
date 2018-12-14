let carrinho = [];

function produto_index(){
	$.ajax({
		url: "http://api-restaurante.herokuapp.com/api/v1/produtos.json",
		async: false
	});
}

function carrinho_show(){
	window.location.href = "pedido.html";
}

function add_carrinho(id){
	carrinho.push(id);
	sessionStorage.setItem('carrinho', carrinho);
}

$(document).ajaxComplete(function(event, xhr, settings) {
  if (settings.url === "http://api-restaurante.herokuapp.com/api/v1/produtos.json") { //Index
    produtos = xhr.responseJSON;

  	for (var i = 0; i < produtos.length; i++) {
  		html = "<div id='item-pedido"+i+"' onclick='modal("+i+");' class='item px-1 py-1'><div class='row-item row px-2 py-2'><div class='col-auto px-0'><img class='prato-img rounded' src='"+produtos[i].image+"'></div><div class='col-8 pl-0'><p class='prato-nome text-white mb-0'>"+produtos[i].nome+"</p><p class='prato-detalhes text-white'>"+produtos[i].descricao+"</p><div class='options row ml-0'><h5 class='prato-valor mb-0'><span class='badge badge-danger w-100'>R$"+produtos[i].valor+"</span></h5></div></div></div></div>";
			$("#transparent-card").append(html);
		}
  }
});

function voltar(){
	mesa_out(sessionStorage.getItem('mesa'));
}