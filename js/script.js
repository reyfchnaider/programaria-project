document.getElementById("botaoEnviar").addEventListener("click" , validaFormulario)

function validaFormulario(){
  if(document.getElementById("nome").value != '' && document.getElementById("email").value != '' && document.getElementBuId("telefone").value != '' ) {
  alert("Prontinho! Você receberá essa mensagem por e-mail")
} else{
  alert("Por favor, preencha os campos nome, telefone e email!")
 }
}

