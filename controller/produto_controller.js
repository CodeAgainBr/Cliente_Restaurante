let carrinho = [];

function produto_index(){
	$.ajax({
		url: "http://api-restaurante.herokuapp.com/api/v1/produtos.json",
		async: false
	});
}

function add_carrinho(id){
	carrinho.push(id);
	sessionStorage.setItem('carrinho', carrinho);
}

$(document).ajaxComplete(function(event, xhr, settings) {
  if (settings.url === "http://api-restaurante.herokuapp.com/api/v1/produtos.json") { //Index
    produtos = xhr.responseJSON;
  	console.log(produtos);

  	for (var i = 0; i < produtos.length; i++) {
  		html = "<div class='produto'><img src='"+produto[i].imagem+"'><h3 id='nome'>"+produto[i].nome+"</h3><p class='descricao'>"+produto[i].descricao+"</p><span id='valor'>R$"+produto[i].valor+"</span><button onclick='add_carrinho("+produto[i].id+")'>Adicionar ao carrinho</button></div>"
			$(".cardapio").append(html);
		}
  }
});
