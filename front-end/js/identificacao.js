function validar() {
    var usuario = document.getElementById("recebeUsuario").value;
    var senha = document.getElementById("recebeSenha").value;
	for(var i = 0; i<clientes.length; i++){
        if(clientes[i].cpf == usuario && clientes[i].senha == senha){

            var nome = clientes[i].nome;
            var saldo = clientes[i].saldo;
            var conta = clientes[i].conta;
            var parametrosASeremCriptografados = "usuario="+usuario+"&senha="+senha+"&saldo="+saldo+"&conta="+conta+"&nome="+nome;
            var parametrosCriptografados = btoa(parametrosASeremCriptografados);

            document.location.href="projeto.html?"+parametrosCriptografados;
         break;
        }
    else{
        mensagemErro.textContent = "Dados incorretos";
    	document.getElementById("recebeUsuario").value = "";
        document.getElementById("recebeSenha").value = "";
    	document.getElementById("recebeUsuario").focus();
    }
  }
}
document.getElementById("recebeUsuario").focus();


var clientes = [{nome:"Bruno", conta:123, cpf:378, saldo:100.00, senha:123},
                {nome: "Paulo", conta: 456, cpf: 182, saldo: 250.00, senha: 123},
                {nome: "Suelen", conta:789, cpf:412, saldo: 400.00, senha: 123},
                ];
//var validacao = document.getElementById("recebeUsuario").value;
var mensagemErro = document.querySelector(".mensagem");
var botaoOk = document.querySelector('.logar');
var mensagemBemVindo =  document.querySelector(".mensagemBoasVindas");




botaoOk.addEventListener('click',validar);



//comparado//