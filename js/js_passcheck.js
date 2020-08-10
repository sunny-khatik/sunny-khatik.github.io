function passmatch(form) {
    p1=form.psw.value;
    p2=form.rpsw.value;
    if (pass1 == '') 
        alert ("Please enter a valid Password");  
    else if (pass2 == '') 
        alert ("Please enter a valid  confirm password");      
    else if (pass1 != pass2) { 
        alert ("\nPassword are not matching try again ...!");
        document.getElementById("rpsw").value="";
        return false; 
    }  
    else{ 
        alert("Welcome to book store") ;
        return true; 
    } 
  }