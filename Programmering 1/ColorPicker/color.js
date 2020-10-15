let colorPicker = document.querySelector("#colorPicker")
let rektangel = document.querySelector("#rektangel")


colorPicker.addEventListener("change", colorChanger)

function colorChanger(event){
    let color = event.target.value;
    rektangel.style.backgroundColor = color

  
    console.log(color)
}