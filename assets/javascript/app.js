$(document).ready(function(){

    $("#start-button").on("click", gameStart.startTimer);
});

var gameStart = {
    timeRemaining : 60,

    startTimer: function() {
        $("#timer").text("Time remaining: " + gameStart.timeRemaining);
        setinterval(gameStart.countdown,1000);
        $(".startPage").hide();
        trivia.displayQuestions();

    }

    countdown function() {
        gameStart.timeRemaining--;
        $("#timer").text("Time remaining: " + gameStart.timeRemaining);
        if (gameStart.timeRemaining === 0) {
            gameStart.stopTimer();
            $("#timer").empty();
        }
    }


stoptTimer function() {
    clearInterval();
    trivia.checkAnswers();
}



showEndPage: function(countCorrect, countIncorrect, countUnAnswered) {
$("end-page").show()
$("questions").empty();
$("timer").empty();
$("timer").hide();
$("correctAnswers").text("correct answers (Well done): " + countCorrect);
$("inCorrectAnswers").text("incorrect answers (Better Luck Next Time!): " + countInCorrect);
$("unAnswered").text("unAnswered(): " + countUnAnswered);

  }

}