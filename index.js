$(document).ready(function(){
    var words2 = {
"جيه اكرداش" : "شو اتسوي",
"اوتناي" : "ماتبى",
"بر جرا" : "ليش",
"خش اندش" : "حياك الله",
"خاترت مي" : "أحبك",
"خاترت امناي" : "ما أحبك",
"كجو" : "وين",
"كجو اجيداش" : "وين بتروح",
"كجو رفتِش" : "وين رحت",
"أي خدا جنت واسيت" : "الله ياخذ رووحك",
"زشت" : "كريهه",
"اويس" : "اوقف",
"اوني" : "اقعد",
"بورو" : "روح",
"جش بكو" : "شوف",
"كارجخ" : "سكين",
"اجم" : "باروح",
"خستم" : "تعبان",
"مي اختم" : "باروح انام",
"خلاص أمكو" : "كملت",
"ماشين او موتور" : "سياره",
"جوّون" : "حلوه",
"أمخلده" : "شريت",
"زود" : "بسرعه",
"خدافز" : "مع السلامه",
"خاكش شرنقن" : "حبّوب",
"سكوت بكو" : "اسكت",
"بازي بوكو" : "العب",
"نون" : "خبز",
"ت كشيدا اقرم" : "باكفخك",
"قربه كور" : "قطوه عميه",
"سق" : "كلب",
"جتن؟" : "شبلاك",
"خيلي" : "وايد",
"سبا" : "باجر",
"إرز" : "اليوم",
"ماي" : "آو",
"بند بوكو" : "صكه",
"واز بكو" : "بطله",
"قارمن" : "حر",
"ساردن" : "برد",
"جـ زشتي" : "فشيله",
"دكن" : "دكان",
"نزيك" : "جريب",
"داريا" : "بحر",
"مايّ" : "سمج",
"آميم" : "عمي",
"خالو" : "خالي",
"بُس آميم (حرف الباء بو ثلاث نقاط" : "ولد عمي  P)",
"دت آميم" : "بنت عمي",
"بس خاليم" : "ولد خالي",
"دت خاليم" : "بنت خالي",
"كنقل" : "صغير",
"قب" : "كبير",
"لوغر" : "ضعيف",
"جاق" : "متين",
"كاكا" : "اخوي العود",
"براسي" : "اخوي الصغير",
"دادا" : "أختي العودة",
"خنكي" : "اختي الاصغيرة",
"قشنامن" : "يوعان",
"سيرم" : "شبعان",
"تشنمن" : "عطشان",
"اوخت" : "ارقد",
"امناي" : "مابي",
"اس وكت" : "من وقت",
"ورقار" : "متاخر",
"بشيمون ابش" : "بتندم",
"قنا" : "مجنون",
"شير" : "حليب",
"خاكش سور" : "دم ه ثقيل",
"خاكش شرين" : "حليلة",
"لي بونك" : "السطح",
"خدا" : "الله",
"ماه" : "قمر",
"سان" : "صحن",
"زنك" : "ريوق",
"جاش" : "غدا",
"شوم" : "عشا",
"جن بشي" : "اسبح",
"مارد" : "رجل",
"زن" : "مرأة",
"بسه با" : "عقب باجر",
"خنو" : "ضحكة",
"خنو اكرداي" : "قاعد يضحك",
"غاليجة" : "زولية",
"كنجة" : "فانيلة",
"سورت" : "وجه",
"كشيده" : "كف",
"جش" : "عين",
"جشت" : "عينك",
"جشش" : "عينه",
"خدا" : "الله",
"ددون" : "اسنان",
"كلا" : "را",
"خيابان" : "شارع",
"بازر" : "سوق",
"بول" : "مال",
"ذهب" : "تلا",
"قمر" : "ما",
"شمس" : "خورشي",
"مدينة" : "شهر",
"مريض" : "بيما",
"اب" : "ماء",
"كاتخ" : "صالونه",
"برنج" : "عيش",
"قوشت ( قيشت" : "لحم ",
"ساوزي" : "خضره",
"بيا" : "بصل",
"هندونه" : "يح",
"باتيل" : "جدر",
"كسات" : "مله",
"شير" : "حليب",
"بنير" : "جبن",
"نخد" : "نخي",
"نمور" : "ليمون",
"تش" : "ضو / نار",
"زغال" : "فحم",
"بفر" : "ثلج",
"آو" : "ماي",
"ميز" : "طاوله",
"دشّوري" : "مغسله",
"كلاس" : "قلاص",
"تابي / تاوه" : "مقلا",
"سيمين" : "صينيه او غنجه",
"امبُل" : "منقاش الفحم",
"قزرك" : "جزر",
"بت باتيل" : "قاع الجدر",
"بل لي ليت" : "مالت عليك",
"شرم ناكنش" : "ماتستحي ؟؟",
"شرم بكو" : "استح",
"آجي" : "حجي",
"بيبي" : "يدوه",
"بولند" : "طوي",
"سبيلي" : "بوشنب",
"خوبم" : "بخير",
"أكن باووم" : "ابوي وينه",
"كيه ؟" : "من",
"آميت" : "عمك",
"كي وابس اته" : "متى بيرجع",
"دو سأت" : "ساعتين",
"مه اجم خونه" : "انا باروح البيت",
"سلامش برسين" : "سلم عليه",
"طعمه حلو" : "خوش مزة",
"كف" : "جبلاخ",
"قمر" : "ماه",
"شهر" : "ماه",
"بنيه" : "دت",
"ولد" : "بس",
"خال" : "خالو",
"ام" : "ننه",
"ليحين" : "هنوزا",
"صلاه" : "نماز",
"برو" : "روح / ي",
"بدا" : "تعال / ي",
"رومزون" : "رمضان",
"غناه" : "مينون / ه",
"تماشا" : "عرس",
"عكس" : "صورة",
"زوود" : "بسرعة",
"فنجوون" : "فنيال",
"هميشه" : "دايما",
"هرف بزن" : "تكلم",
"بشنوف" : "أسمع",
"جشبكو" : "جوف",
"بخو" : "اكل",
"رنج" : "اللون",
"سفيد" : "الابيض",
"سياه" : "الاسود",
"سورخ" : "الاحم",
"زرد" : "الاصفر",
"ساوز" : "الاخضر",
"نيلن" : "الازرق",
"برن" : "المطر",
"بازال" : "السو",
"جيخه" : "الصراخ",
"كالون" : "القدو",
"جمه" : "الفستان",
"سردن" : "برد",
"قرمن" : "حر",
"مردم" : "الناس",
"واسي" : "اخذ",
"ترسن" : "خايف",
"تريغ" : "عصبي",
"شنجاخ" : "المشباص",
"ميجم كار" : "باروح الشغل",
"مي اوختم" : "ابي انام",
"جند سال اتن" : "جم عمرك",
"زود بدا" : "بسرعه تعال",
"مينش جونن" : "شعرها حلو"
}
    var prevArr = [];
    
    //console.log(Object.keys(words2)[0]);
    
    var numbers = getNumbers();
    var q = Object.keys(words2)[numbers[0]];
    var a = Object.values(words2)[numbers[0]];
    var c1 = a;
    var c2 = Object.values(words2)[numbers[1]];
    var c3 = Object.values(words2)[numbers[2]];
    var c4 = Object.values(words2)[numbers[3]];
    
//    for(var i = 0; i < numbers.length; i++)
//        console.log(numbers[i])
    
    console.log("q: "+q);
    console.log("a: "+a);
    console.log("c1: "+c1);
    console.log("c2: "+c2);
    console.log("c3: "+c3);
    console.log("c4: "+c4);
    
    $(".question").text(q);
    $("#choice1").text(c1);
    $("#choice2").text(c2);
    $("#choice3").text(c3);
    $("#choice4").text(c4);
    
    var currentRound = 0;
    var totalRounds = 3;
    
    var score = 0;
    
    $("#currentRound").text(currentRound);
    $("#totalRounds").text(totalRounds);
    $("#score").text(score);
    
    $(".choice").click(function(){
        
        if($(this).text() == a ) {
            score++;
            $("#score").text(score);
            $(this).animate({backgroundColor:'blue'}, 300);
            console.log("correct");
        } else {
            $(this).animate({backgroundColor:'red'}, 300);
            console.log("Wrong");
        }
        
        setTimeout(
        function() 
        {
            $(".choice").animate({backgroundColor:'#00cdbc'}, 300);
            currentRound++;
            $("#currentRound").text(currentRound);
            if(currentRound >= totalRounds) {
                console.log("Finish!\nScore: " + score);
                $("#restartBtn").fadeIn();
                $(".choice").prop("disabled",true);
            } else {
                nextQuestion();
            }
        }, 1000);
    });
    
    $(".choice").hover(
        function(){
            $(this).animate({backgroundColor:'#00ab9c'}, 300);
        },
        function(){
            $(this).animate({backgroundColor:'#00cdbc'}, 300);
        }
    );
    
    $("#restartBtn").hover(
        function(){
            $(this).animate({backgroundColor:'#c3c3c3'}, 300);
        },
        function(){
            $(this).animate({backgroundColor:'#fff'}, 300);
        }
    );
    
    $("#restartBtn").click(function(){
        $(".choice").prop("disabled",false);
        nextQuestion();
        $("#restartBtn").fadeOut();
        currentRound = 0;
        $("#currentRound").text(currentRound);
        score = 0;
        $("#score").text(score);
    });
   
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
    
    function nextQuestion() {
        numbers = getNumbers();
        q = Object.keys(words2)[numbers[0]];
        a = Object.values(words2)[numbers[0]];
        c1 = a;
        c2 = Object.values(words2)[numbers[1]];
        c3 = Object.values(words2)[numbers[2]];
        c4 = Object.values(words2)[numbers[3]];

//        console.log("q: "+q);
//        console.log("a: "+a);
//        console.log("c1: "+c1);
//        console.log("c2: "+c2);
//        console.log("c3: "+c3);
//        console.log("c4: "+c4);

        $(".question").text(q);
        $("#choice1").text(c1);
        $("#choice2").text(c2);
        $("#choice3").text(c3);
        $("#choice4").text(c4);
    }
    
});