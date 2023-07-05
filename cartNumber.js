function onloadCartNum(){
    let cartItems = localStorage.getItem("cartDonkeys");
    if(cartItems){
        document.getElementById("count").value = cartItems
    }
}

onloadCartNum();