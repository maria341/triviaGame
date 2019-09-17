$(document).ready(function() {

     
      var seconds;
      var time;
      var answered;
      var userSelect;
      var messages ={
          correct: "Well done",
          incorrect: "Better Luck Nextime",
          endTime: "Timer's Up",
     }


 var triviaQuestions = [
    {
        question: "What is the seventh planet from the sun?",
        answerlist: ["Saturn", "Venus", "Uranus", "Jupiter"],
        correct: "Uranus"
    },

    {
        question: "How many valves does a trumpet have?",
        answerList: ["Six", "Four", "Seven", "Three"],
        correct: "Three"
    },

    {
        question: "In the TV series Dad's Army, what was Captain Mainwaring's first name?",
        answerList: ["James", "George", "Jhon", "Kevin"],
        correct: "George"
    },

    {
        question: "What is the diameter of Earth?",
        answerList: ["3,000 miles", "11,000 miles", "8,000 miles", "5,000 miles"],
        correct: "8,000 miles"
    },

    {
        question: "When did Margaret Thatcher become Prime Minister?",
        answerList: ["1979", "1976", "1974", "1970"],
        correct: "1979"
    }];

      var currentQuestion;
      var correctAnswer;
      var incorrectAnswer;
      var unAnswered;
 
 $("#gameCol").hide();
	
	//This captures user click on start button to create a new game
	$("#startBtn").on("click", function(){
		$(this).hide();
		newGame();
    });
    
   //This captures the user's click on the reset button to create a new game
	$("#startOverBtn").on("click", function(){
		$(this).hide();
		newGame();
	});

    function newGame() {
        $("#game").show();
        $("#finalMessage").empty();
        $("#correctAnswer").empty();
        $("#incorrectAnswer").empty();
        $("#unAnswered").empty();
        
        currentQuestion = 0;
        correctAnswer = 0;
        incorrectAnswer = 0;
        unAnswered = 0;
        newQuestion();
    }

    function newQuestion() {
        $("#message").empty();
        $("#correctAnswer").empty();
        answered = true;

        $("#currentQuestion").html("Question " + (currentQuestion+1) + " of " + triviaQuestions.length);
		$(".question").html(triviaQuestions[currentQuestion].question);


        //create foe loop
        for (var i = 0; i < 5; i++) {

            var choices = $("<div>");
            choices.text(triviaQuestions[currentQuestion].answerList[i]););
            choices.attr({"data-index": i });
            choices.addClass("thisChoice");
			$(".answerList").append(choices);
        }

        //========================

         countdown();

		//When user clicks on n answer this will pause the time and display the correct answer to the question 
		$(".thisChoice").on("click",function(){
				userSelect = $(this).data("index");
				clearInterval(time);
				answerPage();
    })






})
