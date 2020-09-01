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

let text = document.querySelector("text")
text.html = `${name} är ${age} år gammal`
