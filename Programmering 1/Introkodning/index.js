console.log("hej")

// skapar en variabel som heter name och tilldelar det värdet "Ivar"
let name = "Ivar"
let age = 17 // heltal, int


//if-sats - att göra val
if (age >=18){
    console.log("Du är vuxen")
}else {
    console.log("Du är barn")
}



console.log(`Hej ${name} du är ${age} år gammal`)

//DOM - document objekt model

let text = document.querySelector("#text")
text.innerHTML = `${name} är ${age} år gammal`

//skapar variabler för p-taggarna
let mult = document.querySelector("#multiplikation")
let div = document.querySelector("#division")
let sub = document.querySelector("#subtraktion")
let add = document.querySelector("#addition")

mult.innerHTML = `multiplikation`
div.innerHTML = `division`
add.innerHTML = `addition`
sub.innerHTML = `subtraktion`

let button = document.querySelector("#knapp")
// lägger till en eventlyssnare

button.addEventListener("click", math)

function math(event){
console.log("math-funktionen körs")
let num1 = parseFloat(document.querySelector("#number1").value)
let num2 = parseFloat(document.querySelector("#number2").value)
add.innerHTML = `${num1}+${num2}=${num1+num2}`
div.innerHTML = `${num1}/${num2}=${num1/num2}`
sub.innerHTML = `${num1}-${num2}=${num1-num2}`
mult.innerHTML = `${num1}*${num2}=${num1*num2}`
}
