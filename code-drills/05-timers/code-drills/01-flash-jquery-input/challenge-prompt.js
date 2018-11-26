$(function () {
// Day 01
// Activity 01


// wait for the DOM to finish loading (document.ready)


  // Create a click listener for the submit button


    // stop the default behavior of the submit button



    // pull the values off the user input form and store them in seperate variables



    // clear the form after we're done storing the values



    // generate the divs needed to display the user data and put the values 
    // we stored from the form inside the divs



    // empty the display area and display the divs we just created in the display area

    $(document).on("click", "button", function (event) {
      // stop the default behavior of the submit button
      event.preventDefault();
      var firstName = $("#FirstName").val();
      var lastName = $("#LastName").val();
      var occupation = $("#Occupation").val();
      var city = $("#City").val();
      var state = $("#State").val();


       $("#FirstName").val("");
       $("#LastName").val("");
       $("#Occupation").val("");
       $("#City").val("");
       $("#State").val("");

      var nameDiv = $("<h1>").text("First Name:"+firstName+"   "+"Last Name:"+lastName);
      var occupationDiv = $("<h2>").text("is a "+ occupation);
      var locationDiv = $("<h3>").text("who lives in" + city +","+state);
      

      $("#display-area").empty();
      $("#display-area").append(nameDiv, occupationDiv, locationDiv);

    });











});