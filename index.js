$(document).ready(function(){

    // empty quiz object
    var quiz;
    var question_index = 0
    
    var questionColor = '';
    var choicesColor = '';
    var totalRounds = '';

    initQuiz();

    var prevArr = [];
    
    // ######## CONFIGURATIONS ########### //
    
    var currentRound = 0;
    var score = 0;
    
    var correctColor = "#00cdbc";
    var wrongColor = "#cd0000";
    
    // ######## CONFIGURATIONS END ########### //
    
    $("#currentRound").text(currentRound);
    $("#scoreText").text(score);
        
    $(document).on("click", ".choice", function() {
        console.log("choice clicked");
        if($(this).attr("answer") == "correct" ) {
            score = score + 1;
            $("#scoreText").text(score);
            console.log("score "+score);
            $(this).animate({backgroundColor:correctColor}, 200);
            console.log("correct");
            $("#c"+question_index).attr("src","img/1x/qg.png");
        } else {
            $(this).animate({backgroundColor:wrongColor}, 200);
            $("#choice1").animate({backgroundColor:correctColor}, 200);
            console.log("Wrong");
            $("#c"+question_index).attr("src","img/1x/qr.png");
        }
        
        setTimeout(
        function() 
        {
            $(".choice").animate({backgroundColor:questionColor}, 200);
            currentRound++;
            $("#currentRound").text(currentRound);
            if(currentRound >= totalRounds) {
//                $(".questionBody").fadeOut();
                $("#totalQuestions").text(totalRounds);
                $("#yourScore").text(score);
                $(".choices").fadeOut("300", function () {
                    $("#restartBtn").fadeIn();
                    $(".scoreSection").fadeIn();
                });
                $(".choice").prop("disabled",true);
            } else {
                question_index++;
                setQuestion();
            }
        }, 1500);
    });
    
    $("#restartBtn").hover(
        function(){
            $(this).animate({backgroundColor:'#429CC6'}, 200);
        },
        function(){
            $(this).animate({backgroundColor:'#63b8e0'}, 200);
        }
    );
    
    $("#restartBtn").click(function() {
        $(".circles").empty();
        $(".choice").prop("disabled",false);
        $(".scoreSection").fadeOut();

        $("#restartBtn").fadeOut("300", function () {
            $(".choices").fadeIn();
            $(".questionBody").fadeIn();
        });

        currentRound = 0;
        $("#currentRound").text(currentRound);

        score = 0;
        $("#score").text(score);

        question_index = 0
        setQuestion();
    });

    function initQuiz() {
        var database = firebase.firestore();
        var quizId = "qc1fS6JmysGTfLTw7Ixd";

        var docRef = database.collection("quizzes").doc(quizId);

        docRef.get().then(function(doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data());
                quiz = doc.data();

                questionColor = quiz.question_color;
                choicesColor = quiz.choices_color;
                totalRounds = quiz.questions.length;

                $(".upperSection").addClass(questionColor);

                $("#totalRounds").text(totalRounds);
                
                console.log("quiz loaded");
                setQuestion();
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    }
    
    function setQuestion() {

        // console.log(`quiz: ${JSON.stringify(quiz.questions[question_index])}`);
        console.log("setting up Question " + question_index);

        // Add white question circle at top
        $(".circles").append('<img id="c'+question_index+'" src="img/1x/qw.png" />');

        // Set first index as the chosen question
        var q = quiz.questions[question_index].q;
        var a = quiz.questions[question_index].a;
        console.log("q -> " + q);
        console.log("a -> " + a);

        // Write the question
        $(".question").text(q);

        // Empty the choices
        $('.choices').empty();

        // Write the choices
        for(var i = 0; i <= quiz.questions.length; i++) {
            var choice = quiz.questions[question_index].choices[i];
            $('.choices').append(`\
                <div class="col-12">\
                    <button answer="${i}" class="choice ${choicesColor}" id="choice${i}">${choice}</button>\
                </div>\
            `);
        }
    }
    
});