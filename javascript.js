function myFunction() {
    var x = document.getElementById("nav");
    if (x.className === "NavigationBar") {
      x.className += " responsive";
    } else {
      x.className = "NavigationBar";
    }
  }

var x = 0;
function buttonClick() {
    x++;
    document.getElementById('count').value = x;
}
