$(function() {

	AfficherChat();
	
	$("#envoyer_bouton").click(function(e){
		e.preventDefault();
		var message = $('#message_envoyer').val();
		$.post("htbin/chatsend.py", { msg : message }, "text");
		AfficherChat();
	});

	function AfficherChat(){
		var messages_chat = new String();

		$.get('htbin/chatget.py', function(data){
			data.forEach(function(element){
				messages_chat += ("[" + element.date +"] " + "[" + element.time + "] " + element.user + " > " + element.msg + "<br>");
			});
			$("#chatbox").html(messages_chat);
		}, 'json');	
	}
});