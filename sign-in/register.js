
function register() {
    var name = document.getElementById("name").value;
    if (validation())
    {
    document.getElementById("form2");
    alert( name + ", Congraturation!!!" + "You had registered successfully......");
    }
    }
    
function validation(){
    var name = document.getElementById("name").value;
    if( name ==='')
    {alert("Please fill all fields...!!!!!!");
    return false;}
    else{
    return true;
    }
    }
