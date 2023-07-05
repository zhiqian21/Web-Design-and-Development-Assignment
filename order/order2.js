let prices = [20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,14.8,17.8,15.8,14.8,18.8,15.8,10,10,10,10,20,20,10,10,10,10.5,10.5,10.5,2.7,2.5,3.5,5.5,5.5,8.5,11.2,13.2,13.5,13.7,15.2,11.2,13.2,13.5,13.7,15.2,11.2,13.2,13.5,13.7,15.2,11.2,13.2,13.5,13.7,15.2,11.2,13.2,13.5,13.7,15.2,11.2,13.2,13.5,13.7,15.2,11.2,13.2,13.5,13.7,15.2,11.2,13.2,13.5,13.7,15.2]
let images = ["spaghetti",'spaghetti','spaghetti','burger','burger','burger','pizza','pizza','pizza','chickenchop','chickenchop','chickenchop','fishandchips','fishandchips','fishandchips','porkchop','porkchop','porkchop','Salmon-Nigiri','california roll','tamago(2)','crab stick','cucumber sushi','ebiko','tempura sushi','unagi','inari mentai','salmon salad sushi','chicken karaage salad','yakiniku salad','tori katsu don','prawn katsu curry rice','chicken curry rice','teriyaki-rice','salmon teriyaki rice','unagi don','chocolate ice cream bowl','matchaicecreambowl','lavender-blackberry-swirl-ice-cream','banofee','matcha','mango yogurt','blueberry','strawberry gelatin','mangopannacotta','chocolatecake','matchacake','mangocheesecake','taufufah','onehoneh','kuihlapis','putart','eggtart','fruit tart','americano','latte','mocha','cappucino','caramel','icedamericano','icedlatte','icedmocha','icedcappucino','icedcaramel','coke','sprite','100','fanta','soda','apple','orange','pineapple','watermelon','guava','passion','grape','mango','peach','blueberry','brownsugar','caramelMilk','taro','thai','pearl','jasmine','oolong','lemonGinger','green','black','margarita','martini','negroni','daiquiri','mojito']
let quantity = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let items = ['Spaghetti Carbonara','Shrimp and Garlic Spaghetti','Spaghetti with Red Sauce',"Signature Chicken Burger",'Signature Pork Burger','Signature Fish Burger','Homemade Hawaii Pizza','Crazy Chicken Saurus','Smoky Peperoni Mushroom','Fried Chicken Chop','Black Pepper Chicken Chop','Mushroom Chicken Chop','Fish and Chips','Fish and Chips with Mushroom Sauce','Fish and Chips with Black Pepper Sauce','Fried Pork Chop','Grilled Pork Chop','Black Pepper Pork Chop','Salmon Nigiri','California Roll','Tamago','Crab Stick Sushi','Cucumber Sushi','Ebiko','Tempura Sushi','Unagi Sushi','Inari Mentai','Salmon Salad Sushi','Chicken Karaage Salad','Yakiniku','Tori Katsu Don','Prawn Katsu Don','Chicken Curry Don','Teriyaki Chicken Don','Salmon Teriyaki Don','Unagi Don','Chocolate Ice Cream Bowl','Matcha Ice Cream Bowl','Lavender Blackberry Ice Cream Bowl','Chocolate Banofee','Matcha Latte','Mango Yogurt','BlueBerry Panna Cotta','StrawBerry Panna Cotta','Mango Panna Cotta','Chocolate Cake','Matcha Cake','Mango Cake','Tau Fu Fah','Oneh-Oneh','Kuih Lapis','Portugese Custard Tart','Egg Tart','Fruit Tart','Americano(HOT)','Latte(HOT)','Mocha(HOT)','Cappucino(HOT)','Caramel Macchiato(HOT)','Americano(COLD)','Latte(COLD)','Mocha(COLD)','Cappucino(COLD)','Caramel Macchiato(COLD)','Coke','Sprite','100 Plus','Fanta','Soda Water','Apple Juice','Orange Juice','Pineapple Juice','Watermelon Juice','Guava Juice','Passion Fruit Smoothie','Grape Smoothie','Mango Smoothie','Peach Smoothie','Blueberry Smoothie','Brown Sugar Milk Tea','Caramel Milk Tea','Taro Milk Tea','Thai Milk Tea','Pearl Milk Tea','Jasmine Tea','Oolong Tea','Lemon & Ginger Tea','Green Tea','Black Tea','Margarita','Martini','Negroni','Daiquiri','Mojito']
let clearTheCart = document.getElementById("clearCart");
console.log(clearCart);
console.log(prices);
let cartContainer = document.getElementById("cart-container");
let cartTotal = document.getElementById("cart-total");
let quantityArray = [];
let priceArray = [];
let grandTotal = 0;
let counter = document.getElementById("count");
let displayNone = document.getElementById("cartFinal");
let totalTotal = document.getElementById("total-total");
let line = document.getElementById("line");
let orderButton = document.getElementById("orderButton");
console.log(localStorage.getItem("cartQuant")); 
     
function displayCart(){
        console.log("Running");
        cart = localStorage.getItem("cartQuant");
        cart = JSON.parse(cart);

        for(let a = 0; a < quantity.length; a++){
            if(cart[a] > 0){
                quantityArray.push(a);
                priceArray.push(prices[a]);
                itemTotal = cart[a]*prices[a];
                grandTotal += itemTotal;
                itemTotal = itemTotal.toFixed(2);
                console.log(grandTotal);
                cartContainer.innerHTML += "<div class='foodCart'>" +"<div class = 'food-picture'>" + "<img src = 'JavaArray/"+ images[a] + ".png'>" + "</div>" + "<div class = 'descrip'>" + items[a] + "</div>"+ "<div class='food-price'>" + "RM" + prices[a] + "</div>"+ "<div class='quantity'><i id='incre' class= 'bi bi-plus-square-fill fa-lg'></i>"+ "<span class='number'>" + cart[a] + "</span>" + "<i id='decre' class='bi bi-dash-square-fill fa-lg'></i></div>" + "<div class='foodTotal'>" + "RM" + itemTotal + "</div>" + "<div class='removeItem'><i id='removeButton' class='bi bi-x-circle-fill fa-2X'></i></div></div>";
                let incre = document.querySelectorAll("#incre");
                let decre = document.querySelectorAll("#decre");
                let quant = document.querySelectorAll(".number");
                let itemRemove = document.querySelectorAll(".foodCart");
                let foodTotal = document.querySelectorAll(".foodTotal");
                let removeButton = document.querySelectorAll("#removeButton");
                console.log(incre);
                
                //Increase Quantity Button
                for(let i = 0;i < incre.length;i++){
                incre[i].addEventListener("click",function () {
                let z = localStorage.getItem("cartQuant");
                z = JSON.parse(z);
                z[quantityArray[i]] =  z[quantityArray[i]] + 1;
                localStorage.setItem("cartQuant",JSON.stringify(z));
                console.log(z);
                let x = localStorage.getItem("cartDonkeys");
                x = parseInt(x);
                localStorage.setItem("cartDonkeys", x + 1);
                counter.value = x + 1;
                console.log(cart.textContent);
                grandTotal += priceArray[i];
                cartTotal.textContent = "RM" + grandTotal.toFixed(2);//basket total
                console.log(typeof grandTotal);
                localStorage.setItem("everyTotal",grandTotal);
                console.log(localStorage.getItem("everyTotal"));
                console.log(grandTotal);
                quant[i].textContent = parseInt(quant[i].textContent) + 1;
                foodTotal[i].textContent = "RM" + (parseFloat(quant[i].textContent)*priceArray[i]).toFixed(2);
                })}

                //Decrease Quantity Button
                for(let i=0;i<decre.length;i++){
                    decre[i].addEventListener("click",function (){
                        
                        if(parseFloat(quant[i].textContent) != 1){
                             let z = localStorage.getItem("cartQuant");
                             z = JSON.parse(z);
                             z[quantityArray[i]] =  z[quantityArray[i]] - 1;
                             localStorage.setItem("cartQuant",JSON.stringify(z));
                             console.log(z);
                        let x = localStorage.getItem("cartDonkeys");
                        x = parseInt(x);
                        localStorage.setItem("cartDonkeys", x - 1);
                        counter.value = x - 1;
                        console.log(x);
                        grandTotal -= priceArray[i];
                        cartTotal.textContent = "RM" + grandTotal.toFixed(2);
                        localStorage.setItem("everyTotal",grandTotal);
                        console.log(grandTotal);
                        quant[i].textContent = parseInt(quant[i].textContent) - 1;
                        foodTotal[i].textContent = "RM" + (parseFloat(quant[i].textContent)*priceArray[i]).toFixed(2);
                        }
                        //If the quantity is equal to one
                        else{
                             let z = localStorage.getItem("cartQuant");
                             z = JSON.parse(z);
                             z[quantityArray[i]] =  z[quantityArray[i]] - 1;
                             localStorage.setItem("cartQuant",JSON.stringify(z));
                             console.log(z);
                            grandTotal = grandTotal - priceArray[i];
                            if(grandTotal <= 0){
                                grandTotal = 0;
                                cartTotal.textContent = '';
                            }
                            else{
                                cartTotal.textContent = "RM" + grandTotal.toFixed(2);
                            }
                            if(grandTotal == 0){
                                clearTheCart.style.display = "none";
                                totalTotal.style.display = 'none';
                                line.textContent = '';
                                orderButton.style.display = 'none';
                            }
                            let x = localStorage.getItem("cartDonkeys");
                            x = parseInt(x);
                            localStorage.setItem("cartDonkeys", x - 1);
                            counter.value = x - 1;
                            localStorage.setItem("everyTotal",grandTotal);
                            itemRemove[i] = itemRemove[i].remove();
                            console.log(grandTotal);
                        }  
                    })}

                    //Remove Div Button
                    for(let i=0;i < removeButton.length;i++){
                        removeButton[i].addEventListener("click",function (){
                            let z = localStorage.getItem("cartQuant");
                            z = JSON.parse(z);
                            z[quantityArray[i]] =  z[quantityArray[i]] - parseInt(quant[i].textContent); 
                            localStorage.setItem("cartQuant",JSON.stringify(z));
                            grandTotal -= priceArray[i]*parseFloat(quant[i].textContent);
                            if(grandTotal <= 0){
                                grandTotal = 0;
                                cartTotal.textContent = '';
                            }else{
                                cartTotal.textContent = "RM" + grandTotal.toFixed(2);
                            }
                            if(grandTotal == 0){
                                clearTheCart.style.display = "none";
                                totalTotal.style.display = 'none';
                                line.textContent = '';
                                orderButton.style.display = 'none';
                            }
                            let x = localStorage.getItem("cartDonkeys");
                            x = parseInt(x);
                            localStorage.setItem("cartDonkeys", x - parseInt(quant[i].textContent));
                            counter.value  = x - parseInt(quant[i].textContent);
                            localStorage.setItem("everyTotal",grandTotal);
                            console.log(grandTotal);
                            itemRemove[i] = itemRemove[i].remove();
                        })
                    }

                    clearTheCart.addEventListener("click",() => {
                        for(let i=0;i<itemRemove.length;i++){
                            itemRemove[i] = itemRemove[i].remove();
                            grandTotal = 0;
                            localStorage.setItem("everyTotal",0);
                            localStorage.setItem("cartDonkeys",0);
                            counter.value  = 0;
                            window.localStorage.clear();
                            cartTotal.textContent = '';
                            clearTheCart.style.display = "none";
                            totalTotal.style.display = 'none';
                            orderButton.style.display = 'none';
                            line.textContent = '';
                            //Afterwards add the window.localStorage.clear() function
                        }
    
                })
                    localStorage.setItem("everyTotal",grandTotal.toFixed(2));
            }
        }
        
    }

function total(){
    let x = localStorage.getItem("everyTotal");
    if(x){
    cartTotal.textContent = "RM" + localStorage.getItem("everyTotal");
    }
    else if(isNaN(x)){
        cartTotal.textContent = '';
    }
    else if(x.length > 4){
        cartTotal.textContent ='';
    }
}


function cartMonkey(){
    let x = localStorage.getItem("cartDonkeys");
    if(x){
        document.querySelector("#count").value = x;
    }
}

function displayNoneCart(){
        displayNone.style.display = 'none';
        line.style.display = 'none';
        orderButton.style.display = 'none';
}

orderButton.addEventListener("click", () =>{
    let option = confirm("Confirm your order?");
     
    if(option == true){
        alert("                        Thanks for choosing The Spaceship!\n                          Your order will be arriving shortly!");
        window.location.href = "../home-page/home.html";
        window.localStorage.clear();
    }
    
})

if(localStorage.getItem('cartDonkeys') == 0 || localStorage.getItem('cartDonkeys') == null){
displayNoneCart();}
cartMonkey();
displayCart();
if(localStorage.getItem('cartDonkeys') > 0 ){
    total();
}
