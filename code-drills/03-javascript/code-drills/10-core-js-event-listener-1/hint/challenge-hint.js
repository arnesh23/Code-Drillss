// declare the variable we're storing the confirm dialogue in
var diagVar;

// create a key press listener
document.onkeyup = function(event) {
    
  diagVar = event.key;
  
  diagVar = diagVar.toLowerCase;
}


  // store the key the user pressed into a variable so we can 
  // refer to it easier in this function and
  // change it to lower case to make our logic not case sensitive


  // console log the key that the user pressed
  console.log(diagVar);


  // check whether the user pressed the "h" key
  if(diagVar == "h")
    confirm("h was pressed");

    // create a confirm dialogue when they do and store the response from that
    // dialogue into the variable we declared outside the event listener
  
  if(diagVar == "k")
     



  // check whether the user pressed the "k" key
    // check whether the user had answered true to the previous confirm dialogue
    // display the corresponding alert dialogue
