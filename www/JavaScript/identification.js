var formu = document.getElementById('connexion');
var message_form = document.getElementById('Message_formulaire');

formu.addEventListener('submit', function(e) {
	e.preventDefault();
	var username = document.getElementById('user');
	var userpwd = document.getElementById('mdp');
	var xhr = new XMLHttpRequest();

	xhr.open("POST", 'htbin/login.py');
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

	xhr.onreadystatechange = function() {
		if (this.readyState === XMLHttpRequest.DONE && this.status === 200)
		{
			var retour = new String(xhr.response);
			if(retour != "Le nom d'utilisateur et le mot de pass sont invalides.\n"
				&& retour != "Le nom d'utilisateur ne doit pas être vide.\n"
				&& retour != "Le mot de pass ne doit pas être vide.\n"  )
			{
				formu.style.display = "none";	//pour faire disparaître le fomrulaire
			}
			message_form.innerHTML = retour.toString();
		}
	}
	xhr.send('username=' + username.value + '&userpwd=' + userpwd.value);
});