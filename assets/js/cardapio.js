$(document).ready(function(){
	let produtos = 0;
	produto_index();

	$("#back").click(function(){
		voltar();
		window.location = "home.html";
	});

	$("#carrinho").click(function(){
		window.location = "pedido.html";
	});
});

function modal(i){
	$(".modal-content").html("<div class='modal-header text-center'><h5 class='modal-title' id='exampleModalLongTitle'>"+produtos[i].nome+"</h5><button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div><div class='modal-body text-center'><img class='prato-img-modal rounded' src='"+produtos[i].imagem+"'><h5>"+produtos[i].observacao+"</h5><h1 class='prato-valor mb-0'><span class='badge badge-danger w-100'>R$59,00</span></h1></div><div class='modal-footer'><button type='button' class='btn btn-secondary' data-dismiss='modal'>Voltar</button><button type='button' class='btn btn-success'>Adicionar ao carrinho</button></div>");
	$(".modal-content").modal("show");
}
