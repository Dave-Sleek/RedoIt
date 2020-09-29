function validateForm() {
  var uname = document.forms["RegisterForm"]["uname"].value;
  if (uname == "") {
    alert("username must be filled out");
    document.RegisterForm.uname.focus();
    return false;
  }else{
  var email = document.RegisterForm.email.value;
  atpos = email.indexOf("@");
  dotpos = email.lastIndexOf(".");
 if (atpos < 1 || ( dotpos - atpos < 2 )) {
  alert("Please enter correct email ID") 
  document.RegisterForm.email.focus() ;
            return false;
     }
 }
   if (document.RegisterForm.password.value == "") {
  alert("Please enter your password");
  document.RegisterForm.password.focus() ;
    return false;
      }
      
     if (document.RegisterForm.password.value != document.RegisterForm.cpwd.value) {
  alert("Password does not match!");
  document.RegisterForm.cpwd.focus() ;
    return false;
      }else{
        if(document.RegisterForm.password.value == document.RegisterForm.cpwd.value) {
          alert("Password is correct 😊");
          document.RegisterForm.cpwd.focus();
          return false;
        }
      }
    }

function signinForm() {
  var email = document.LoginForm.email.value;
  atpos = email.indexOf("@");
  dotpos = email.lastIndexOf(".");
 if (atpos < 1 || ( dotpos - atpos < 2 )) {
  alert("Please enter correct email address") 
  document.LoginForm.email.focus() ;
            return false;
     }
      if (document.LoginForm.password.value == "") {
  alert("Please enter your password");
  document.LoginForm.password.focus() ;
    return false;
      }
}