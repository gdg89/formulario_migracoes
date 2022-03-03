	
//CAMPOS OBLIGATORIOS
      
function campo_obl(){
	var selec_tratados = document.getElementById('tipodoc_1').value;// Tomando el valor del input
	//  aplicando condicional a la variable
	if(selec_tratados === 'nada'){
		document.getElementById('co_tipodoc').style.display = 'block';// mostrando mesaje
	}else{
		document.getElementById('co_tipodoc').style.display = 'none';// ocultando mensaje
	}
	console.log(selec_tratados)
}

function campo_obl1(){
	var nome = document.getElementById('nome_1').value;
	if(nome === ''){
		document.getElementById('co_nome').style.display = 'block';
	}else{
		document.getElementById('co_nome').style.display = 'none';
	}
	console.log(nome)
}
function campo_obl2(){
	var sobrenome = document.getElementById('sobrenome_1').value;
	if(sobrenome === ''){
		document.getElementById('co_sobnome').style.display = 'block';
	}else{
		document.getElementById('co_sobnome').style.display = 'none';
	}
	console.log(sobrenome)
}
function campo_obl3(){
	var nomeCompleto = document.getElementById('nm_compl_1').value;
	if(nomeCompleto === ''){
		document.getElementById('co_nom_compl').style.display = 'block';
	}else{
		document.getElementById('co_nom_compl').style.display = 'none';
	}
	console.log(nomeCompleto)
}
function campo_obl6(){
	var cidadeNascimento = document.getElementById('cidade_nasc_1').value;
	if(cidadeNascimento === ''){
		document.getElementById('cidNasc').style.display = 'block';
	}else{
		document.getElementById('cidNasc').style.display = 'none';
	}
	console.log(cidadeNascimento)
}
function campo_obl9(){
	var email = document.getElementById('email_1').value;
	if( email === ''){
		document.getElementById('co_email').style.display = 'block';
	}else{
		document.getElementById('co_email').style.display = 'none';
	}
	console.log(email)
}
function campo_obl10(){
	var ocupacao = document.getElementById('ocupacao_1').value;
	if(ocupacao === ''){
		document.getElementById('co_ocupa_1').style.display = 'block';
	}else{
		document.getElementById('co_ocupa_1').style.display = 'none';
	}
	console.log(ocupacao)
}
function campo_obl4(){
	var selec_cond_pessoais = document.getElementById('cond_pessoais_1').value;
	if(selec_cond_pessoais === 'nada'){
		document.getElementById('co_cond_p').style.display = 'block';
	}else{
		document.getElementById('co_cond_p').style.display = 'none';
	}
	console.log(selec_cond_pessoais)
}
function campo_obl5(){
	var selec_est_civil = document.getElementById('estado_civil_1').value;
	if( selec_est_civil === 'nada'){
		document.getElementById('co_estCivil').style.display = 'block';
	}else{
		document.getElementById('co_estCivil').style.display = 'none';
	}
	console.log(selec_est_civil)
}
function campo_obl7(){
	var selec_paisNascimento = document.getElementById('pais_nascimento_1').value;
	if(selec_paisNascimento === 'nada'){
		document.getElementById('co_paisNasc').style.display = 'block';
	}else{
		document.getElementById('co_paisNasc').style.display = 'none';
	}
	console.log(selec_paisNascimento)
}
function campo_obl8(){
	var selec_paisNacionalidade = document.getElementById('pais_nac_1').value;
	if(selec_paisNacionalidade === 'nada'){
		document.getElementById('co_nasc').style.display = 'block';
	}else{
		document.getElementById('co_nasc').style.display = 'none';
	}
	console.log(selec_paisNacionalidade)
}
  
function campo_obl11(){
	var filiacao_1 = document.getElementById('nome_fil_1').value;
	if(filiacao_1 === ''){
		document.getElementById('co_fil1').style.display = 'block';
	}else{
		document.getElementById('co_fil1').style.display = 'none';
	}
	console.log(filiacao_1)
}
function campo_obl12(){
	var filiacao_2 = document.getElementById('nome_fil_2').value;
	if(filiacao_2 === ''){
		document.getElementById('co_fil2').style.display = 'block';
	}else{
		document.getElementById('co_fil2').style.display = 'none';
	}
	console.log(filiacao_2)
}
function campo_dtnac(){
	var dataNac = document.getElementById('dt_nascimento_1').value;
	if(dataNac == ''){
		document.getElementById('codata_1').style.display = 'block';
	}else{
		document.getElementById('codata_1').style.display = 'none';
	}
	console.log(dataNac)
}

// APLICANDO DISABLED PARA CAMPOS NO OBLIGATORIOS.....
 
 // checkbox Sem sobrenome
function desbld(){
	var check = document.getElementById('sem_sbn_1').checked; // tomando el valor del input
	 // aplicando condicional
	if(check == true){//caso valor checkbox sea true 
		document.getElementById('sobrenome_1').disabled = true;// campo de texto desabilitada
		document.getElementById('sobrenome_1').value ='';//contenido campo borrado
		document.getElementById('co_sobnome').style.display = 'none';// mensaje campo obligatorio oculto
	}else{
		document.getElementById('sobrenome_1').disabled = false;//campo de texto habilitado
		document.getElementById('sobrenome_1').focus();

	}

}

// checkbox Sem Filiaçao1
function desbldSem1(){
	var checkSem1 = document.getElementById('sem_fil_1').checked;
	
	if(checkSem1 == true){
		document.getElementById('nome_fil_1').disabled = true;
		document.getElementById('nome_fil_1').value ='';
		document.getElementById('co_fil1').style.display = 'none';
	}else{
		document.getElementById('nome_fil_1').disabled = false;
		document.getElementById('nome_fil_1').focus();

	}

}
// checkbox Sem Filiaçao2
function desbldSem2(){
	var checkSem2 = document.getElementById('sem_fil_2').checked;
	
	if(checkSem2 == true){
		document.getElementById('nome_fil_2').disabled = true;
		document.getElementById('nome_fil_2').value ='';
		document.getElementById('co_fil2').style.display = 'none';
	}else{
		document.getElementById('nome_fil_2').disabled = false;
		document.getElementById('nome_fil_2').focus();

	}

}
  
 // POP UP NOME SOCIAL

 	// checkbox Nome Social
 function popUpnm(){
 	var checkPop = document.getElementById('nm_social_1').checked;// tomando valor del checkbox
 	//aplicando condicional
	if (checkPop == true){ // caso valor sea true
 		document.getElementById('wrapper_popup').style.display = 'flex';//exiviendo popup
 	}else if(checkPop == false){// caso valor sea false, o sea checkbox desmarcado
 		document.getElementById('wrapper_popup').style.display = 'none';//popup oculto
 		document.getElementById('nome_scl_1').style.display = 'none';// campo nombre social oculto
 		document.getElementById('nm_sc_1').value = '';// limpiando campo
 	}
 	
 }
  // button sim 
  function btnSim(){
  	document.getElementById('wrapper_popup').style.display = 'none';// ocultando popup
  	document.getElementById('nome_scl_1').style.display = 'block';// exibiendo campo nombre social
  	document.getElementById('nm_sc_1').focus();// aplicando foco
  	document.getElementById('nm_sc_1').value = '';// limpiando campo

  }
  // button nao
  function btnNao(){
  	document.getElementById('wrapper_popup').style.display = 'none';// ocultando popup
  	document.getElementById('nm_social_1').checked = false;//checkbox desmarcado
  }
// Validando campo CPF 
		function check_numb(){
			var num_cpf = document.getElementById('num_cpf').value; // atribuindo a una variable el valor recuperado del campo CPF
			var validation = document.getElementById('validation');// atribuindo a una variable el elemento label

			//Condicional que valida CPF
			 if(parseInt(num_cpf)> 0 && num_cpf.length >= 11){ //Está aceptando numero mayor de cero y 11 caracteres o mas, si coloco un numero mayor que 0 y el resto letras va a dar como correcto, lo cual es un ERROR!!!
			 	document.getElementById('validation').className = 'cpf_val2';// aplicando classe al elemento label id = "validation"
			 	document.getElementById('validation').style.display = 'block';
			 	validation.innerHTML = 'CPF Correcto';//Sobreescribiendo elemento label,caso datos ingresado coincidan con formato requerido(en este caso 11 numeros)
			 	console.log(num_cpf)
			 }else if(num_cpf == ''){
			 	document.getElementById('validation').className = 'cpf_val';// aplicando classe al elemento label id = "validation"
			 	document.getElementById('validation').style.display = 'block';//mostrando elemento label
			 	validation.innerHTML = 'Campo obligatorio';//Sobreescribiendo elemento label,caso campo este vacio


			 }else{
			 	document.getElementById('validation').className = 'cpf_val';// aplicando classe al elemento label id = "validation"
			 	document.getElementById('validation').style.display = 'block';//mostrando elemento label
			 	validation.innerHTML = 'CPF Incorrecto';//Sobreescribiendo elemento label,caso datos ingresado no coincidan con formato requerido(en este caso 11 digitos numericos)
			 }
			 
		}
	

		 //limpiar el campos de datos de CPF en el evento dblclick
 		
			function clear_camp(){// ERROR -- Despues que lo aplico la funcion check_numb ya no funciona, unicamente recargando la pagina} {SOLIUCIONADO: aplique display: block en el elemento validacion, para quedar nuevamente visible}
				document.getElementById('validation').style.display = 'none';
				document.getElementById('num_cpf').value = '';
				 console.log(check_numb)

			}




// ENVIO DE FORMULARIO
 /*despues de verificar los campos completados correctamente enviar formulario y limpiar los campos... formulario enviado*/
		function envio(){

			var cpf_doc = document.getElementById('num_cpf').value;
			var validation = document.getElementById('validation');
			document.getElementById('num_cpf').value ='';
			document.getElementById('validation').style.display = 'none';
			
			
		    

			
			

			console.log(cpf_doc)
			
			
		}