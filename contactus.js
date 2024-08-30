function validateData(){
    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var emailbody = document.getElementById("emailbody").value;
    var agreement = document.getElementById("agreement");
    var country = document.getElementById("country");
    if(fullname.length < 5){
        alert("Full name must be at least 5 characters");
    }
    else if(!email.endsWith(".com")){
        alert("Email format incorrect");
    }
    else if(country.value == ""){             
        alert("Please select country");
    }
    else if(emailbody.length < 15){
        alert("Message must be at least 15 characters");
    }
    else if(!agreement.checked){
        alert("Agreement must be checked");
    }
    else{
        alert("Message sent successfully.");
    }
}