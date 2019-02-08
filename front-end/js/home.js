var home = document.getElementById("botaoHome");

home.addEventListener("click", function(){
	campoExtrato.classList.add("invisivel");
	atualizaMensagem();
	mostrarCampos.classList.add("invisivel");
	mostrarSaldo.classList.add("invisivel");
})

//comparado//