function NameValidation () {
	var usercell=document.getElementById('user');
	var failuser = document.getElementById('userfail');
	var correctuser=/^[a-zA-ZÀ-ÿ\s]{1,40}$/;
	
	if (usercell.value == 0) {
			failuser.innerHTML="Rellene este campo";
			usercell.classList.add("invalid");
			usercell.classList.add("failicon");	
			return false;
		}	
	else if (correctuser.test(usercell.value)){

			usercell.classList.remove("invalid");
			usercell.classList.remove("failicon");
			failuser.innerHTML ="";
			usercell.classList.add("valid");
			usercell.classList.add("correcticon");
			return true;
		}
		

		else {
			failuser.innerHTML="Nombre inválido";
			usercell.classList.add("invalid");
			usercell.classList.add("failicon");
			return false;
		}

	
}
function EmailValidation (){
	
	var emailcell=document.getElementById('email');
	var failemail=document.getElementById('emailfail');
	var correctemail=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

	
		if (emailcell.value == 0){
			failemail.innerHTML="Rellene este campo";
			emailcell.classList.add("invalid");
			emailcell.classList.abort("failicon");
			return false;
		}
	
		else if (EmailValidation.test(emailcell.value)){
			emailcell.classList.remove("invalid");
			emailcell.classList.remove("failicon");
			failemail.innerHTML="";
			emailcell.classList.add("valid");
			emailcell.classList.add("correcticon");
			return true;
		}		
		else {
			failemail.innerHTML="Email inválido";
			emailcell.classList.add("invalid");
			emailcell.classList.add("failicon");
			return false;
		}
	
}

function PasswordValidation () {
	var passwordcell=document.getElementById('pass');
	var correctpassword=/^.{1,8}$/;
	var failpass=document.getElementById('passwordfail');
	
		if (passwordcell == 0){
			failpass.innerHTML="Rellene este campo";
			passwordcell.classList.add("invalid");
			passwordcell.classList.add("failicon");
			return false;
		}
	
	
		else if (correctpassword.test(passwordcell.value)){
			passwordcell.classList.remove("invalid");
			passwordcell.classList.remove("failicon");
			failpass.innerHTML="";
			passwordcell.classList.add("valid");
			passwordcell.classList.add("correcticon");
			return true;
		}
	
		else {
			failpass.innerHTML="No debe tener más de 8 caracteres.";
			passwordcell.classList.add("invalid");
			return false;
		}
	
	
function ConfirmValidation(){
	
	var passwordcell=document.getElementById('pass');
	var correctconfirm=document.getElementById('confirm');
	var failconfirm=document.getElementById('confirmfail');
		
		if (correctconfirm.value==0){
			failconfirm.innerHTML="Rellene este campo";
			correctconfirm.classList.add("invalid");
			correctconfirm.classList.add("failicon");
			return false;
		}
		
		else if (passwordcell.value==correctconfirm.value){
			correctconfirm.classList.remove("invalid");
			correctconfirm.classList.remove("failicon");
			failconfirm.innerHTML="";
			correctconfirm.classList.add("valid");
			correctconfirm.classList.add("correcticon");
			return true;
		}
	
		else {
			failconfirm.innerHTML="Las contraseñas no coinciden.";
			correctconfirm.classList.add("invalid");
			correctconfirm.classList.add("failicon");
			return false;
		}
}
	
function FormValidation (){
	
	if(NameValidation()&&PasswordValidation()&&EmailValidation()&&ConfirmValidation()){
		alert("La inscripción se ha realizado correctamente");
		return true;
	}
	else return false;
}