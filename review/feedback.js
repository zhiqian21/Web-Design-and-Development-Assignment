function feedback() {
    var review = document.getElementById("review").value;
    if (validation())
    {
    document.getElementById("review");
    alert("Thank you for your response.We wil make our best!");
    }
    }
    
function validation(){
    var review = document.getElementById("review").value;
    if( review ==='')
    {alert("Please fill all fields...!!!!!!");
    return false;}
    else{
    return true;
    }
    }