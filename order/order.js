let prices = [20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,14.8,17.8,15.8,14.8,18.8, 15.8,10,10,10,20,20,20,10,10,10,10.5,10.5,10.5,2.7,2.5,3.5,5.5,5.5,8.5,11.2,13.2,13.5,13.7,15.2,11.2,11.2,13.2,13.5,13.7,15.2,11.2,13.2,13.5,13.7,15.2,11.2,13.2,13.5,13.7,15.2,11.2,20,13.2,13.5,13.7,15.2,11.2,13.2,13.5,13.7,15.2,11.2,13.2,13.5,13.7,15.2,11.2,13.2,13.5,13.7,15.2,11.2,13.2,13.5,13.7,15.2];
let images = ["spaghetti",'spaghetti','spaghetti','burger','burger','burger','pizza','pizza','pizza','chickenchop','chickenchop','chickenchop','fishandchips','fishandchips','fishandchips','porkchop','porkchop','porkchop','Salmon-Nigiri','california roll','tamago(2)','crab stick','cucumber sushi','ebiko','tempura sushi','unagi','inari mentai','salmon salad sushi','chicken karaage salad','yakiniku salad','tori katsu don','prawn katsu curry rice','chicken curry rice','teriyaki-rice','salmon teriyaki rice','unagi don','chocolate ice cream bowl','matchaicecreambowl','lavender-blackberry-swirl-ice-cream','banofee','matcha','mango yogurt','blueberry','strawberry gelatin','mangopannacotta','chocolatecake','matchacake','mangocheesecake','taufufah','onehoneh','kuihlapis','putart','eggtart','fruit tart','americano','latte','mocha','cappucino','caramel','icedamericano','icedlatte','icedmocha','icedcappucino','icedcaramel','coke','sprite','100','fanta','soda','apple','orange','pineapple','watermelon','guava','passion','grape','mango','peach','blueberry','brownsugar','caramelMilk','taro','thai','pearl','jasmine','oolong','lemonGinger','green','black','margarita','martini','negroni','daiquiri','mojito']
let quantity = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let items = ['Spaghetti Carbonara','Shrimp and Garlic Spaghetti','Spaghetti with Red Sauce',"Signature Chicken Burger",'Signature Pork Burger','Signature Fish Burger','Homemade Hawaii Pizza','Crazy Chicken Saurus','Smoky Peperoni Mushroom','Fried Chicken Chop','Black Pepper Chicken Chop','Mushroom Chicken Chop','Fish and Chips','Fish and Chips with Mushroom Sauce','Fish and Chips with Black Pepper Sauce','Fried Pork Chop','Grilled Pork Chop','Black Pepper Pork Chop','Salmon Nigiri','California Roll','Tamago','Crab Stick Sushi','Cucumber Sushi','Ebiko','Tempura Sushi','Unagi Sushi','Inari Mentai','Salmon Salad Sushi','Chicken Karaage Salad','Yakiniku','Tori Katsu Don','Prawn Katsu Don','Chicken Curry Don','Teriyaki Chicken Don','Salmon Teriyaki Don','Unagi Don','Chocolate Ice Cream Bowl','Matcha Ice Cream Bowl','Lavender Blackberry Ice Cream Bowl','Chocolate Banofee','Matcha Latte','Mango Yogurt','BlueBerry Panna Cotta','StrawBerry Panna Cotta','Mango Panna Cotta','Chocolate Cake','Matcha Cake','Mango Cake','Tau Fu Fah','Oneh-Oneh','Kuih Lapis','Portugese Custard Tart','Egg Tart','Fruit Tart','Americano(HOT)','Latte(HOT)','Mocha(HOT)','Cappucino(HOT)','Caramel Macchiato(HOT)','Americano(COLD)','Latte(COLD)','Mocha(COLD)','Cappucino(COLD)','Caramel Macchiato(COLD)','Coke','Sprite','100 Plus','Fanta','Soda Water','Apple Juice','Orange Juice','Pineapple Juice','Watermelon Juice','Guava Juice','Passion Fruit Smoothie','Grape Smoothie','Mango Smoothie','Peach Smoothie','Blueberry Smoothie','Brown Sugar Milk Tea','Caramel Milk Tea','Taro Milk Tea','Thai Milk Tea','Pearl Milk Tea','Jasmine Tea','Oolong Tea','Lemon & Ginger Tea','Green Tea','Black Tea','Margarita','Martini','Negroni','Daiquiri','Mojito']
let orderItems = document.querySelectorAll(".order");
let cartCount = document.getElementById("count");
console.log(orderItems);
console.log(localStorage.getItem("cartQuant"));

for(let i=0; i < orderItems.length; i++){
    orderItems[i].addEventListener("click", function (){
    let cartQuantity = localStorage.getItem("cartQuant");
        cartQuantity = JSON.parse(cartQuantity);
        if(cartQuantity){
        cartQuantity[i] = cartQuantity[i] + 1;
    }
        else{
        cartQuantity = quantity;
        cartQuantity[i] = 1;
    }
        localStorage.setItem("cartQuant",JSON.stringify(cartQuantity));
        console.log(cartQuantity);
        cartItems();
    }); 
}

function addedItem(){
    let x = localStorage.getItem("cartDonkeys");
    if(x){
        document.getElementById("count").value = cartDonkeys;
    }
}

function cartItems(){
    let x = localStorage.getItem("cartDonkeys");
    x = parseInt(x);
    if(x){
        console.log("Runnning");
        localStorage.setItem("cartDonkeys", x + 1);
        document.querySelector("#count").value = x + 1;
    }
    else{
        localStorage.setItem("cartDonkeys", 1);
        document.querySelector("#count").value = 1;
    }
}

function cart(){
    let x = localStorage.getItem("cartDonkeys");
    if(x){
        document.querySelector("#count").value = x;
    }
}

cart();