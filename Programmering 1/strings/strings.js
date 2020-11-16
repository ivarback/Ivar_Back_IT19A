console.log ("hej")

// konkatenering

let fornamn = "Ivar"
let efernamn ="Back"
let namn = fornamn + " "+ efernamn
let adress = "Uddevallagatan 31"
let telefon = "0763108836"
let alder = 17

/*
Namn : ivar back
Ålder : 17 år
Adress: Uddevasllasda
Telefon 0763108836
*/


let personuppgifter = ("Namn: "+namn +"\n" +"Adress: " + adress + "\n" + "Telefon: " + telefon + "\n" +"Ålder: " + alder)
console.log (personuppgifter)

// skriv ut motsvarande personuppgifter i webbläsaren

let p_uppgifter = document.querySelector("#personuppgifter")
p_uppgifter.innerHTML = ("Namn: "+namn +"<br>" +"Adress: " + adress + "<br>" + "Telefon: " + telefon + "<br>" +"Ålder: " + alder)

let alfabet = "abcdefghijklmnopqrstuvwxyzåäö"
let bokstav1 = alfabet[0]

console.log (`Bokstav på index 0 är: ${bokstav1}`)

let antal_bokstaver = alfabet.length
console.log (`Antal bokstäver i alfabet är ${antal_bokstaver}`)