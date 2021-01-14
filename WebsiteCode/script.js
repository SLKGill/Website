//html document we're accessing, body is the body tag from html, and onkeyup is an event listener for any key that is pressed
document.body.onkeyup = function(e){
  //e is an implicit parameter, it has data about the event that just took place
  //console.log(e); //here every time you press a key a keyboard event will be logged to the console

  if(e.code=="Space"){
    document.body.classList.toggle("dark"); //dark is the name of the class we want to toggle
  }


}