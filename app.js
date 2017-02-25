$(document).ready(function(){

	$("#register").click(function(){

		var name = $("#name").val();
		var email = $("#email").val();
		var password = $("#password").val();

		if( name ==''){
			$("#name-message").text("Field must not be empty!!");
		}

		if( email ==''){
			$("#email-message").text("Field must not be empty!!");
		}

		if( password ==''){
			$("#password-message").text("Field must not be empty!!");
		}




	});


	$("#name").keyup(function(){
		var name = $("#name").val();
		if(name.length>20){
			$("#name-message").text("Maximum limit 20 char");
		}
	});

		$("#password").keyup(function(){
		var password = $("#password").val();
		if(password.length < 6){
			$("#password-message").text("minimum 6 char long");
		}else{
			$("#password-message").css("display", "none");
		}
	});
});
