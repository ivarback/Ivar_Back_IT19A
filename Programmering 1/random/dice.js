knapp.addEventListener("click", tarningen)

 function tarningen() {
    document.getElementById("result").innerHTML =
    Math.floor(Math.random() * 6) + 1; 

 }

 let p_myntflip = document.getElementById("myntflip") 

 knapp2.addEventListener("click", myntet)

 function myntet(){
    
 let slumptal = Math.random()

 console.log (slumptal)

 let coinflip = Math.round(slumptal)

 console.log(`Coin flip: ${coinflip}`)

 
 if (coinflip == 0) {
   console.log("head")
   p_myntflip.innerHTML = "Head"
} else{
   console.log ("tails")
   p_myntflip.innerHTML = "Tails"
}
 }