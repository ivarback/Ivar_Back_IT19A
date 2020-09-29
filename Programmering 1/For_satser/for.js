console.log ("hej")
let p_talserie1 = document.querySelector("#talserie1")
let p_talserie2 = document.querySelector("#talserie2")
let p_summa = document.querySelector("#summa")
let p_klass = document.querySelector("#klasslista")
for (let i=1; i<=10; i++){
    p_talserie1.innerHTML += `${i}`
}

for (let j=10; j>=0; j--){
    p_talserie2.innerHTML += `${j}`
}


for (let i = 1; i<=10; i++){
    console.log(`${i}. I WILL NOT WRITE ALL OVER THE WALLS`)
}   

//VILL räkna ut summan 1+2+3+...+8+9+10
for (let i=0; i<=10; i++){
    p_summa.innerHTML += `${i}+`
    summa += i
}
// skapa en lista med elever
let elever = ["Kokchun","Henrik","Thomas","Tatiana","Zsofia","David"]
p_klass.innerHTML = "Klass IT19A innehåller följande elever <br/>"

for (let k = 0; k < elever.length; k++){
p_klass.innerHTML += `${k+1}.${elever[k]} <br/>`
}
