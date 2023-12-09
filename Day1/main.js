

signinBtn.onclick= function(){
    NameField.style.maxHeight="0";
    title.innerHTML="Sign In";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
    var email = document.getElementById('emails').value;
    var paswrd = document.getElementById('pass').value;
    if((email =="")&&(paswrd == "")){
       alert("WELCOME BACK")
    }
    else if((paswrd == ""))
    {
        alert("Please fill the password.");
    }
   
    else if((email ==""))
    {
        alert("Please fill the email");
    }
    else{
        window.open("1st page.html");
    }
    
    
}
signupBtn.onclick= function(){
    NameField.style.maxHeight="60px";
    title.innerHTML="Sign Up";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
    var name = document.getElementById('names').value;
    var email = document.getElementById('emails').value;
    var paswrd = document.getElementById('pass').value;
    if((name == "")&&(email =="")&&(paswrd == "")){
       alert("Please fill the above details.")
    }
    else if((paswrd == "")&&(email ==""))
    {
        alert("Please fill the email & password.");
    }
    else if((name == ""))
    {
        alert("Name should not be empty");
    }
    else if((email ==""))
    {
        alert("Please fill the email");
    }
    else if((paswrd == ""))
    {
        alert("Please fill the password.");
    }
    else{
        window.open("1st page.html");
    }
} 







     