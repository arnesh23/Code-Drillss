// define a function "fun" that console logs "Functions are FUN!"



// before moving on, open index.html and see what console logs have been made.
// why doesn't "Functions are FUN! appear yet?"
/*

Your Answer here

*/

function fun() {
    console.log("Functions are FUN!");
}


// define a function "thirtySeven" that console logs the sum of 18 and 19
function thirtySeven(){
    console.log(18+19);
}


// call two functions you've defined so far
fun();
thirtySeven();


// define a function "log" that takes in an argument and console logs that argument
function log(argument){
    console.log(argument);
}


// define a function "hello" that calls on the "log" function to console log "Hello World"
function hello(){
    log("Hello World");
}


// call your "hello" function
hello();

// define a function "popUp" that creates an alert that says "This is an alert."
function popUp()
{
    alert("This is an alert");
}


// define a function "noPopUp" that creates an alert that says "Okay, you won't get a pop up."
function noPopUp(){
    alert("Okay, you won't get a pop up.");
}

// define a function "goodDay" that creates a confirm dialogue asking the user if they are having a nice day
// and uses your "log" function to display the response
function goodDay() {
    var args = confirm("Are you having a nice day?");
    log(args);
}

// call your "goodDay" function
goodDay();

// define a function "userPopUp" that creates a confirm dialogue asking the user if they would like a popup
// if they answer yes, call upon your "popUp" function; otherwise, call upon your "noPopUp" function
function userPopUp(){
    argument = confirm("Would you like a popup?");
    if(argument){
        popUp();
    }
    else
        noPopUp();
}

// call your "userPopUp" function
    userPopUp();

// define a function "userName" that prompts the user for their name and then 
// uses your "log" function to display the response
    function userName(){
        var name = prompt("Name: ");
        log(name);
    }

// call your "userName" function
userName();

function favoriteFruit(){
    var favfruit = prompt("Enter favorite fruit!");
    alert(favfruit);
}

favoriteFruit();

// define a function "favoriteFruit" that prompts the user for their favorite fruit
// and the creates an alert that displays the response



// call your "favoriteFruit" function



