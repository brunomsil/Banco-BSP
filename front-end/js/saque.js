
function sacar(valor){
	atualizaMensagem();
	
	var valor = document.getElementById("valor").value;

	if(valor == "" || valor == 0){
		var campoMensagem = document.querySelector(".mensagem");
		campoMensagem.textContent = ("Informe o valor para saque.")
		limparCampo();
	}else 
	if(isNaN(valor)){
		var campoMensagem = document.querySelector(".mensagem");
		campoMensagem.textContent = ("Valor inválido.")
		limparCampo();
	}else
	if (valor >0 && valor <=saldoFloat){
		saldoFloat -= parseFloat(valor);
		var campoSaldo = document.getElementById("saldo");
		campoSaldo.textContent = "Saldo: "+saldoFloat.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
		limparCampo();	
		}else
	if(valor <0){
		var campoMensagem = document.querySelector(".mensagem");
		campoMensagem.textContent = ("Valor negativo. Informe o valor para saque.");
		limparCampo();
		}else{
		var campoMensagem = document.querySelector(".mensagem");
		campoMensagem.textContent = ("Saldo insuficiente.");
		limparCampo();
	}
}



function limparCampo(){
	document.getElementById("valor").value = "";
    document.getElementById("valor").focus();
}



var habilitarSaque = document.getElementById("botaoSaque");
var mostrarCampos = document.getElementById("campos");
var camposSaldo = document.getElementById("camposSaldo");
var informacaoSaque = document.getElementById("informeSaque");
var informacaoDeposito = document.getElementById("informeDeposito")




	habilitarSaque.addEventListener("click", function(){
	informacaoDeposito.classList.add("invisivel");
	informacaoSaque.classList.remove("invisivel");
	campoExtrato.classList.add("invisivel");
	atualizaMensagem()
	camposSaldo.classList.add("invisivel");
	ok2.classList.remove("invisivel");
	ok.classList.add("invisivel");
	habilitaCampo();
})

var ok2 = document.getElementById("efetua2");

ok2.addEventListener("click",sacar);

//comparado.