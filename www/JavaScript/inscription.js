//la fonction ajax pour afficher les messages d'erreur
function AfficherErreur(message, id){
	var xhr = new XMLHttpRequest();

	xhr.open("GET", "Inscription.html");
	

	xhr.addEventListener('readystatechange', function() {
		if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200)
		{
			document.getElementById(id).innerHTML = '<span>' + message + '</span>';
			console.log("Ajaj");
		}
	});
	xhr.send(null);
}



function verifNom(nom){
	if(nom.value.length <= 2){
		nom.className = 'incorrect';
		AfficherErreur("Nom incorrect", "erreur-nom");
		return false;
	}
	nom.className = 'correct';
	AfficherErreur("", "erreur-nom");
	return true;
}

function verifPrenom(prenom){
	if(prenom.value.length <= 2){
		prenom.className = 'incorrect';
		AfficherErreur("Prenom incorrect", "erreur-prenom");
		return false;
	}
	prenom.className = 'correct';
	AfficherErreur("", "erreur-prenom");
	//console.log("Hello World !");
	return true;
}


function verifUser(user){
	var regex = /.{6,}/;
	if(regex.test(user.value)){
		user.className = 'correct'
		AfficherErreur("", "erreur-user");
		return true;
	}
	user.className = 'incorrect';
	AfficherErreur("Nom d'utilisateur incorrect", "erreur-user");
	return false;
}


function verifDate(date){
	if(date.value === ""){
		return true;
	}
	var tab_date = date.value.split('/');
	D = new Date(tab_date[2], tab_date[1], tab_date[0]);
	if(isNaN(D.getTime())){
		AfficherErreur("Format incorrect", "erreur-date");
		date.className = 'incorrect';
		return false;
	}

	
	if(D.getFullYear() != tab_date[2]){
		date.className = 'incorrect';
		console.log("Année incorrecte");
		AfficherErreur("Année incorrecte", "erreur-date");
		return false;
	}
	if((D.getMonth() ) != tab_date[1]){
		date.className = 'incorrect';
		console.log("Mois incorrect");
		AfficherErreur("Mois incorrect", "erreur-date");
		return false;
	}

	if(D.getDate() != tab_date[0]){
		date.className = 'incorrect';
		console.log("Jour incorrect");
		AfficherErreur("Jour incorrect", "erreur-date");
		return false;
	}

	date.className = 'correct';
	AfficherErreur("", "erreur-date");
	return true;
		
}

function verifMdp(mot_de_passe){
	var Regex = /^(?=.*[A-Za-z])(?=.*\d)(.|[A-Za-z\d]){8,}$/;
	if (Regex.test(mot_de_passe.value)) {
    	mot_de_passe.className = 'correct';
		AfficherErreur("", "erreur-mdp");
		return true;
	}
	mot_de_passe.className = 'incorrect';
	AfficherErreur("Mot de passe incorrect", "erreur-mdp");
	return false;
}

function verifMail(e_mail){
	var Regex = /^[a-zA-Z-]+@[a-zA-Z-]+\.[a-zA-Z]{2,6}$/;
	if (Regex.test(e_mail.value)) {
    	e_mail.className = 'correct';
		AfficherErreur("", "erreur-mail");
		return true;
	}
	e_mail.className = 'incorrect';
	AfficherErreur("Adreese e-mail incorrecte", "erreur-mail");
	return false;
}


var formu = document.getElementById('inscrir');
formu.addEventListener('submit', function(e){
	e.preventDefault();

	var nom = document.getElementById('nom');
	var prenom = document.getElementById('prenom');
	var user = document.getElementById('user');
	var date = document.getElementById('date');
	var mot_de_passe = document.getElementById('mdp');
	var e_mail = document.getElementById('useremail');

	
	if(verifNom(nom) & verifPrenom(prenom) & verifUser(user) & verifDate(date) & verifMdp(mot_de_passe)
		& verifMail(e_mail)){
		formu.submit();

	}
});


