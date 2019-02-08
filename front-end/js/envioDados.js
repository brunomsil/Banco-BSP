var usuarioEncontrado;
var senhaEncontrada;
var nomeEncontrado;
var contaEcontrada;
var saldoEncontrado;
var saldoFloat;

	function carregarDados(){

		var parametrosEnviados = atob(window.location.href.split("?")[1]);
		var listaParametros = parametrosEnviados.split("&");

		listaParametros.forEach(function(elementoDaVez){

			if(elementoDaVez.split("=")[0] == "usuario"){
				usuarioEncontrado = elementoDaVez.split("=")[1];
			}


			if(elementoDaVez.split("=")[0] == "senha"){
				senhaEncontrada = elementoDaVez.split("=")[1];
			}

			if(elementoDaVez.split("=")[0]=="nome"){
				nomeEncontrado = elementoDaVez.split ("=")[1];
			}

			if(elementoDaVez.split("=")[0]=="saldo"){
				saldoEncontrado = elementoDaVez.split("=")[1];
				saldoFloat = parseFloat(saldoEncontrado);
			}

			if (elementoDaVez.split("=")[0]=="conta") {
				contaEcontrada = elementoDaVez.split("=")[1];
			}
			
		});

	
		atualizaSaldo();
		atualizaMensagem();

	}


	function atualizaSaldo(){
		var campoSaldo = document.getElementById("saldo");
		campoSaldo.textContent = ("Saldo: ")+saldoFloat.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

	}

	function atualizaMensagem(){
		var campoMensagem = document.querySelector(".mensagem");
		campoMensagem.textContent = ("Bem-vindo(a), ")+nomeEncontrado +(".");
	}

//comparado//