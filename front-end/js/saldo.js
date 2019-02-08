var habilitarSaldo = document.getElementById("botaoSaldo");

var mostrarSaldo = document.getElementById("camposSaldo");

habilitarSaldo.addEventListener("click",function(){
	campoExtrato.classList.add("invisivel");
	atualizaMensagem();
	mostrarCampos.classList.add("invisivel");
	mostrarSaldo.classList.remove("invisivel");
})

//comparado//