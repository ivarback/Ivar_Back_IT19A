 knapp.addEventListener("click", tarningen)

function tarningen() {
   document.getElementById("result").innerHTML =
   Math.floor(Math.random() * 6) + 1; 
   
let sexor = 0

    for (let i = 0; i < 100; i++){
       let tärning = Math.floor(Math.random() * 6) + 1;
       
       if (tärning == 6){
          sexor++;
       }
    }


console.log(`Antalet sexor är: ${sexor}`)
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




let p1result = 0
let p2result = 0

 dice_p1.addEventListener("click", diceGameP1)

 function diceGameP1() {
    p1result = Math.floor(Math.random() * 6) + 1; 
    document.getElementById("p1result").innerHTML = p1result
   }
   dice_p2.addEventListener("click", diceGameP2)

   function diceGameP2() {
      p2result = Math.floor(Math.random() * 6) + 1; 
      document.getElementById("p2result").innerHTML = p2result
     }


 let p_winner = document.getElementById("winner") 

 dice_win.addEventListener("click", winnerResult)

 function winnerResult(){
    if(p1result > p2result){
       console.log("p1 wins")
       p_winner.innerHTML = "P1 wins"
    } else if (p1result < p2result){
       console.log("p2 wins")
       p_winner.innerHTML = "P2 wins"
    } else {
       console.log("draw")
       p_winner.innerHTML = "Draw"
    }
 }


