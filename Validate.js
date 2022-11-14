	function testLogin(){
	var username = document.forms["myForm"]["user_email"].value;
	var password = document.forms["myForm"]["user_password"].value;
    console.log(username);
    if(username ==" "){
    	alert("Please enter details!");
    	return false;
    }
    else if(username =="prajwal@gmail.com" && password == "1234"){
    	alert("Login successful");
    	return true;
    }
    else{
    	alert("Check your details!!");
    	return false;
    }
}