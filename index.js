$(document).ready(function(){

    var prevArr = [];
    
    //console.log(Object.keys(words2)[0]);
    
    // ######## CONFIGURATIONS ########### //
    
    var currentRound = 0;
    var totalRounds = 3;
    var score = 0;
    
    var questionColor = "#429CC6";
    var correctColor = "#00cdbc";
    var wrongColor = "#cd0000";
    
    var currentQuestion = 1
    
    // ######## CONFIGURATIONS END ########### //
    
    setQuestion();
    
    $("#currentRound").text(currentRound);
    $("#totalRounds").text(totalRounds);
    $("#scoreText").text(score);
        
    $(".choice").click(function() {
        if($(this).attr("answer") == "correct" ) {
            score = score + 1;
            $("#scoreText").text(score);
            console.log("score "+score);
            $(this).animate({backgroundColor:correctColor}, 200);
            console.log("correct");
            $("#c"+currentQuestion++).attr("src","img/1x/qg.png");
        } else {
            $(this).animate({backgroundColor:wrongColor}, 200);
            $("#choice1").animate({backgroundColor:correctColor}, 200);
            console.log("Wrong");
            $("#c"+currentQuestion++).attr("src","img/1x/qr.png");
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
        currentQuestion = 1
        $(".circles").empty()
        $(".choice").prop("disabled",false);
        setQuestion();
        $(".scoreSection").fadeOut();
        $("#restartBtn").fadeOut("300", function () {
            $(".choices").fadeIn();
            $(".questionBody").fadeIn();
        });
        currentRound = 0;
        $("#currentRound").text(currentRound);
        score = 0;
        $("#score").text(score);
    });
    
    function setQuestion() {
        // Add white question circle at top
        $(".circles").append('<img id="c'+currentQuestion+'" src="img/1x/qw.png" />');
        
        // Get random question indexes
        var numbers = getNumbers();

        // Set first index as the chosen question
        var q = Object.keys(words2)[numbers[0]];
        var a = Object.values(words2)[numbers[0]];
        console.log("q -> " + q);
        console.log("a -> " + a);
        $(".question").text(q);
        
        var arr = [0,1,2,3]
        var firstTime = true
        $(".choice").removeAttr("answer");

        for(var i = arr.length-1;i>=0;i--) {
          // Extract one number from 0 to 3
          elem = arr.splice(Math.floor(Math.random()*arr.length), 1);

          if(firstTime) {
              // Set it as the question and answer
              $("#choice"+elem[0]).text(a);
              $("#choice"+elem[0]).attr("answer", "correct");
              firstTime = false;
          } else {
              // Just set another choice for the other choices
              c = Object.values(words2)[numbers[i+1]]
              $("#choice"+elem[0]).text(c);
          }
        }
    }
   
    function getNumbers() {
        var arr = []
        while(arr.length < 4){
            var r = Math.floor(Math.random()*190) + 1;
            if(arr.length == 0 && prevArr.indexOf(r) != -1){
                continue;
            }
            if(arr.indexOf(r) === -1) {
                arr.push(r);
            }
        }
        return arr;
    };
    
//    function nextQuestion() {
//        numbers = getNumbers();
//        q = Object.keys(words2)[numbers[0]];
//        a = Object.values(words2)[numbers[0]];
//        c1 = a;
//        c2 = Object.values(words2)[numbers[1]];
//        c3 = Object.values(words2)[numbers[2]];
//        c4 = Object.values(words2)[numbers[3]];
//
////        console.log("q: "+q);
////        console.log("a: "+a);
////        console.log("c1: "+c1);
////        console.log("c2: "+c2);
////        console.log("c3: "+c3);
////        console.log("c4: "+c4);
//
//        $(".question").text(q);
//        $("#choice1").text(c1);
//        $("#choice2").text(c2);
//        $("#choice3").text(c3);
//        $("#choice4").text(c4);
//        
//        $(".circles").append('<img id="c'+currentQuestion+'" src="img/1x/qw.png" />')
//    }
    
});