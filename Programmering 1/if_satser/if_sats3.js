let antal = prompt ("Hur ofta åker du spårvagn per månad")


if (antal*30<775) {
    console.log ("Du bör inte köpa månadskort")
    console.log (`Det kostar ${antal*30}kr med engånsbiljetter`)

}
else {
    console.log ("Du sparar pengar på att köpa månadskort")
    console.log (`Det kostar ${antal*30}kr med engångsbiljetter`)
}

