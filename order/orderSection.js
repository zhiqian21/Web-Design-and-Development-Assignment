let western = document.querySelector(".item-container");
let japanese = document.querySelector(".japanese-container");
let dessert = document.querySelector(".dessert-container");
let drinks = document.querySelector(".drink-container");
let reveal = document.querySelectorAll(".reveal");
let orderButt = document.getElementById("orderButton");

function onload(){
    reveal[0].style.backgroundColor = "white";
}


reveal[0].addEventListener("click", () =>{
    western.style.display = 'flex';
    japanese.style.display = 'none';
    drinks.style.display = 'none';
    dessert.style.display = 'none';
    reveal[0].style.backgroundColor = "white";
    reveal[1].style.backgroundColor = "mediumvioletred";
    reveal[2].style.backgroundColor = "mediumvioletred";
    reveal[3].style.backgroundColor = "mediumvioletred";
})

reveal[1].addEventListener("click", () =>{
    western.style.display = 'none';
    japanese.style.display = 'flex';
    drinks.style.display = 'none';
    dessert.style.display = 'none';
    reveal[0].style.backgroundColor = "mediumvioletred";
    reveal[1].style.backgroundColor = "white";
    reveal[2].style.backgroundColor = "mediumvioletred";
    reveal[3].style.backgroundColor = "mediumvioletred";
})

    reveal[2].addEventListener("click", () =>{
    western.style.display = 'none';
    japanese.style.display = 'none';
    dessert.style.display = 'flex';
    drinks.style.display = 'none';
    reveal[0].style.backgroundColor = "mediumvioletred";
    reveal[1].style.backgroundColor = "mediumvioletred";
    reveal[2].style.backgroundColor = "white";
    reveal[3].style.backgroundColor = "mediumvioletred";
})

    reveal[3].addEventListener("click", () =>{
    western.style.display = 'none';
    japanese.style.display = 'none';
    drinks.style.display = 'flex';
    dessert.style.display = 'none';
    reveal[0].style.backgroundColor = "mediumvioletred";
    reveal[1].style.backgroundColor = "mediumvioletred";
    reveal[2].style.backgroundColor = "mediumvioletred";
    reveal[3].style.backgroundColor = "white";
})




onload();