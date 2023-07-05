
function signin() {
    var name = document.getElementById("name1").value;
    var email = document.getElementById("email1").value;
    if (validation())
    {
    document.getElementById("form1");
    alert(" Name : " + name + " n Email : " + email  + " Sign In Successfully...... ");
    }
    }
    
function validation(){
    var name = document.getElementById("name1").value;
    var email = document.getElementById("email1").value;
    var emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if( name ==='' || email ===''){
    alert("Please fill all fields...!!!!!!");
    return false;
    }else if(!(email).match(emailReg)){
    alert("Invalid Email...!!!!!!");
    return false;
    }else{
    return true;
    }
    }
