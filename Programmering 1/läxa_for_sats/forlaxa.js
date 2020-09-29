let talseriejamna = document.querySelector("#talseriejamna")
let talserieudda = document.querySelector ("#talserieudda")
let lektioner = document.querySelector ("lektioner")




//lektioner lista
let lektioner = ["Svenska","Engelska","Programmering","Matematik","Idrott"]
p_lektioner.innerHTML = "Mina lektioner är: <br/>"

for (let k = 0; k < lektioner.length; k++){
    p_lektioner.innerHTML += `${k+1}.${lektioner[k]} <br/>`
    }
    