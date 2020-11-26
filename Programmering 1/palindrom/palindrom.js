
//split() och reverse() och join()

let knapp = document.querySelector("#knapp")

let p_rak = document.getElementById("rak")

let p_reverse = document.getElementById("reverse")
knapp.addEventListener("click",Palindrom)

 function Palindrom() {
    let string = ("Banan");
    let res = string.split("");
    res=res.join("")
    console.log (res)
   
    
    p_rak.innerHTML += res
    
    let rev = res.reverse("");
    rev=rev.join("")
    console.log (rev)
    

    p_reverse.innerHTML += rev


    if (res == rev){
        console.log("Palindrom")
    } else {
        console.log("INTE")
    }
    

}
