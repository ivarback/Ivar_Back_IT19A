knapp.addEventListener("click", tarningen)

 function tarningen() {
    document.getElementById("result").innerHTML =
    Math.floor(Math.random() * 6) + 1; 

 }