/* jshint devel:true */
$(document).ready(onReady); 

function onReady() {
	$('#userSubmit').on('click', onSubmitButtonClick);
	// $('#getMessages').on('click', getMessages);


	function onSubmitButtonClick() {
		
		$.post(
		'https://chatscape.herokuapp.com/chats.json', 
		{
			chat: {

				user: $('#userCreate').val(),

				message: $('#message').val(),

				created_at: $('').val(),
			}
		},
			messageDisplay(message),
			getMessages(),
			'json'
			);
	}

	function messageDisplay(messages){
		console.log (messages);
		for (var i=0; i<messages.length; i++){
			$('.messagePost').prepend('<div>User: ' + messages[i].user +'</div><div>Message: '+ messages[i].message + '</div><div>Time: '+ messages[i].created_at + '</div>');
			}
		}
	function getMessages() {
		// $('#getMessages').on('click', ongetMessagesButtonClick);

		// function ongetMessagesButtonClick () {

			$.get(
			'https://chatscape.herokuapp.com/chats.json',

			function(message) {
				console.log(message)
				messageDisplay(message);
			},
			'json'
			);
		// }

	}
	// setInterval(getMessages,1000000);
}


