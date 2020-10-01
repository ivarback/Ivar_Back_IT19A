let talseriejamna = document.querySelector("#talseriejamn")
let talserieudda = document.querySelector("#talserieudda")
let huy = document.querySelector("#lektioner")


for (let i=0; i < 50; i++){
    talseriejamna.innerHTML += `${2*i}, `
    talserieudda.innerHTML += `${2*i+1}, `
}



//lektioner lista
let lektioner = ["Svenska", "Engelska", "Programmering", "Matematik", "Idrott"]
huy.innerHTML = "Mina lektioner är: <br/>"

for (let k = 0; k < lektioner.length; k++) {
    huy.innerHTML += `${k+1}.${lektioner[k]} <br/>`
}

