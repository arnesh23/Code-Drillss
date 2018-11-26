// Set the interval


// ------------------------------------------------------------------
console.log("==================== Question 01 ====================");
// Create an interval that console logs "Question 01" every 5 seconds
var intervalOne = setInterval(function() { console.log("Question1");}, 5000);


// ------------------------------------------------------------------
console.log("==================== Question 02 ====================");
// Create an interval that creates an alert that says "Question 02" every 10 seconds
var intervalTwo = setInterval(function() { console.log("Question2");}, 10000);


// Clear the interval you made in this question
clearInterval(intervalOne, intervalTwo);


// ------------------------------------------------------------------
console.log("==================== Question 03 ====================");
// Create an interval that appends "3" to the div with an id of "question-03"
// every 2 seconds
setInterval(function() { $("#question-03").append("3");}, 2000);


// ------------------------------------------------------------------
console.log("==================== Question 04 ====================");
// Create an interval that empties the "#question-03" element every 6 seconds
setInterval(function() { $("#question-03").text("");}, 6000);


// ------------------------------------------------------------------
console.log("==================== Question 05 ====================");
// Create an interval that appends "5" to the div with an id of "question-05"
// every second and clear this interval after 5 seconds
var intervalFive = setInterval(function() { $("#question-05").append("5");}, 1000);
clearInterval(intervalFive, 5000);


// ------------------------------------------------------------------
console.log("==================== Question 06 ====================");
// Create an interval that appends "6" to the div with an id of "question-06"
// every second
var intervalSix = setInterval(function() { $("#question-06").append("6");}, 1000);

    setTimeout(function() {
    clearInterval(question06)
  }, 1000 * 6);

// Create a timer to clear the interval after 6 seconds



// ------------------------------------------------------------------
console.log("==================== Question 07 ====================");
// create a timer to clear the interval from question 1 after 10 seconds

setTimeout(function() {
    clearInterval(intervalOne)
  }, 1000 * 10);
  


