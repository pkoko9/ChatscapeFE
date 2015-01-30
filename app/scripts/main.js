/* jshint devel:true */
$(document).ready(onReady); 

function onReady() {
$('#userSubmit').on('click', onSubmitButtonClick);

function onSubmitButtonClick() {

$.post(
'https://chatscape.herokuapp.com/chats', //something is wrong with the server URL it's not allowing
{
chat: {

user: $('#userCreate').val(),

message: $('#message').val(),
}
},
function(message) {
console.log(message)
},
'json'
);
}
}

