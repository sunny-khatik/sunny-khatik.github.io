
// Validating Empty Field
function check_empty() 
{
	if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('psw_1').value == "" ||document.getElementById('psw_2').value == "") 
	{
		alert("Fill All Fields !");
	} 
	else 
	{
		var pass1 = document.getElementById('psw_1').value;
		var pass2 = document.getElementById('psw_2').value
		if (pass1 != pass2) 
		{ 
        	alert ("\nPassword are not matching try again ...!");
			
		}
		else
		{ 
			document.getElementById('form').submit();
			alert("Data added successfuly now you redirected to login page.");
		}
    } 
}
//Function To Display Popup
function div_show()
{
  document.getElementById('abc').style.display = "block";
}
//Function to Hide Popup
function div_hide()
{
	document.getElementById('abc').style.display = "none";
}
function div_pass()
{
	location.replace("forgottpass.html");
}
