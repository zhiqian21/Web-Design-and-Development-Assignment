function testing(){
    if(confirm("Do you want to submit your reservation?") == 0){
        alert("Please try again");
        return false;
    }
}

function resetform(){
    if(confirm("Do you want to reset the form?") == 1){
        window.location.reload();
    }
}