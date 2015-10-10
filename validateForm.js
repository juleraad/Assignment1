


function validateForm(){
    var age =  document.forms["personalInformationForm"]["age"].value;

    var firstname = document.forms["personalInformationForm"]["firstname"].value;
    
    var lastname = document.forms["personalInformationForm"]["lastname"].value;
    
    var password = document.forms["personalInformationForm"]["password"].value;
    
    var username = document.forms["personalInformationForm"]["username"].value;
    
    var text= "";
    
    
    
    if (age == null || age == "" || age < 18) {
        document.getElementById("age").style.borderColor = "red";
        if (age == null || age == "")
        text += "Age, ";
        
        else if (age < 18){
            text+= "Age has to be 18 and above.<br><br>"
        document.getElementById("age").value = "";
        
        }
        
    }

    else
        
        document.getElementById("age").style.borderColor = "";
    
    
    if (firstname == null || firstname == "") {
        text += "First name, ";
        document.getElementById("firstname").style.borderColor = "red";
        

    }
    
    else
        
         document.getElementById("firstname").style.borderColor = "";
    
    
    
    if ( lastname == null || lastname == "" )
    {
        
        text += "Last name, ";
        document.getElementById("lastname").style.borderColor = "red";
       
        
    }
    
    else
        
        document.getElementById("lastname").style.borderColor = "";
    
    
    
    if ( username == null || username == "" )
    {
        
        text += "Username, ";
        document.getElementById("username").style.borderColor = "red";
        
        
    }
    
    else    document.getElementById("username").style.borderColor = "";
    
    if ( password == null || password == "" )
    {
        
        text += "Password ";
        document.getElementById("password").style.borderColor = "red";
       
        
    }
    
     else  document.getElementById("password").style.borderColor = "";
    
   
    
    if (text.toString()!="" && text.toString()=="Age has to be greater than 18.<br><br>")
       
    {
        
        document.getElementById("required-fields").innerHTML = text;
        
        
    }
    
    else if (text.toString()!=""){
        text+= "can not be empty."
    
     document.getElementById("required-fields").innerHTML = text;
    }
    
    else {
        
        text="Everything is ok!<br>Form submitted successfully.";
         document.getElementById("required-fields").innerHTML = text;

        
        document.getElementById("age").value = "";

        
        document.getElementById("firstname").value = "";

        
        
        document.getElementById("lastname").value = "";

        
        document.getElementById("username").value = "";

        
        document.getElementById("password").value = "";

        
    }
    
}







