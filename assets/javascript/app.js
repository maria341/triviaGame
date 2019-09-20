
$("#questions").hide();
$("#end-game").hide();

//Create a function that will start if the player click the button
$("#start").click(function() {
    $("#questions").show();
    $("#start-game").hide();
    $("#end-game").hide();
    startTimer();
});

//create variables called number and assigned 30 seconds on it
var number = 30;

//Declaring the empty variables for intervalId
var intervalId;

//creating function to start the timer
function startTimer() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    number--;
    $("#timer").html("<h3>Time Remaining: " + number + "<h3>");

    if (number === 0) {
    stopTimer();
    alert("Game over!");
    $("#questions").hide();
    $("#end-game").show();
   }
}

function stopTimer() {
    clearInterval(intervalId);
    number = 30;
}

//use ready() to make a function to load the documents inside of it

$(document).ready(function() {
  $("input[type ='radio']").on('change', function() {

       var q0 = $('input[name="question0"]:checked').val();
       var q1 = $('input[name=question1]:checked',"#form").val();
       var q2 = $('input[name=question2]:checked',"#form").val();
       var q3 = $('input[name=question3]:checked',"#form").val();
       var q4 = $('input[name=question4]:checked',"#form").val();

        var countCorrect = 0;
        var countInCorrect = 0;
        var countUnAnswered = 0;

     if (q0 == "Uranus") {
        countCorrect++;
      }
     else if (!q0) {
         countUnAnswered++;
     }
     else {
         countInCorrect++;
     }
    
     if (q1 == "Golf") {
         countCorrect++;
     }
    else if (!q1) {
        countUnAnswered++;
    }
    else {
        countInCorrect++;
    }
    
    if (q2 == "8,000 miles") {
        countCorrect++;
    }
    else if (!q2) {
        countUnAnswered++;
    }
    else {
        countInCorrect++;
    }

    if (q3 == "Three") {
        countCorrect++;
    }
    else if (!q3) {
        countUnAnswered++;
    }
    else {
        countInCorrect++;
    }

    if (q4 == "1979") {
        countCorrect++;
    }
    else if (!q4) {
        countUnAnswered++;
    }
    else {
        countInCorrect++;
    }

    $("#correct").html("<h5>Correct: " + countCorrect + "<h5>");
    $("#inCorrect").html("<h5>Incorrect: " + countInCorrect + "<h5>");
    $("#unAnswered").html("<h5>Skipped Question: " + countUnAnswered + "<h5>");
   


  });


});

//Create the submit function to click the button
$("#submit").click(function() {
    stopTimer();
    $("#questions").hide();
    $("#start-game").hide();
    $("#end-game").show();

});

//create the restart function to click the button
$("#restart").click(function(){
    $("#questions").hide();
    $("#start-game").show();
    $("#end-game").hide();
    stopTimer();
  
    
});
   
  
restart();







     
   


