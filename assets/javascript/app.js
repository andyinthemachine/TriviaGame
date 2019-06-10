
var interval_id;
var seconds_count = 30;
var correct_answers = 0;
var incorrect_answers = 0;
var unanswered = 0;
var $start_game_button = $("<button id='start_game'>").text("Start");
var $end_game_button = $("<button id='end_game'>").text("Done");

var questions = [
    {
        question: "What is the fastest event?",
        correct: "downhill",
        answers: ["downhill", "super-g", "giant slalom", "slalom"]
    },
    {
        question: "Where is the Hannenkam?",
        correct: "Austria",
        answers: ["France", "Italy", "Austria", "Croatia"]
    },
    {
        question: "What is the name of the championship trophy?",
        correct: "Crystal Globe",
        answers: ["Peaks Honor", "Snow Cup", "Stenmark Prize", "Crystal Globe"]
    }
];


function display_questions() {

    for (i = 0; i < questions.length; i++) {
        $("#main_content").append("<p>" + questions[i].question + "<br></p>");
        for (j = 0; j < questions[i].answers.length; j++) {
            var $radio_button = $("<input type = 'radio' />");
            // add object here
            $radio_button.attr("name", "question_" + i);
            $radio_button.attr("id", "ans_" + j);
            $radio_button.attr("value", questions[i].answers[j]);

            // $("'#ans_' + j label").text('default');

            // var input = $(‘<input class=“form-check-input” type=“ radio” name=“triviaRadios” id=“radiobutton” value=“’ + [j] + ‘>‘);
            // var input = $(‘<input class=“form-check-input” type=“ radio” name=“triviaRadios” id=“radiobutton” value=“’ ‘>‘);

            // var label = $(‘<label class=“form-check-label” for=“exampleRadios2"></label>’);
            // var label = $(‘<label class=“form-check-label” for=“exampleRadios2"></label>’);
            // label.text(Answers[j]);
            // input.html(label);

            $("#main_content").append($radio_button);
            $("#main_content").append(questions[i].answers[j]);

            // $('#'+ countrySelected ).attr('checked', true);

            // $("#main_content").append("<label for = 'ans_0'>test</label>")

        }
    }
}


// $("input[type='radio'][name='rate']:checked").val();


function display_stats() {
    $("#sub_heading").html("<h3>Done!</h3>");

    for (i = 0; i < questions.length; i++){
        var result = $("input[name='question_" + i + "']:checked").val();
        if (result === questions[i].correct)
            correct_answers++;
        else if (result === undefined)
            unanswered++;
        else
            incorrect_answers++;
    }
    
    $("#main_content").html("<h3>Correct answers: " + correct_answers + "<br></h3>");
    $("#main_content").append("<h3>Incorrect answers: " + incorrect_answers + "<br></h3>");
    $("#main_content").append("<h3>Unanswered: " + unanswered + "</h3>");
    $("#done_button").empty();
}

function run_timer() {
    $("#sub_heading").html("<h2> Time Remaining: " + seconds_count + " seconds</h2>");
    clearInterval(interval_id);
    interval_id = setInterval(decrement, 1000);
}

function decrement() {
    $("#sub_heading").html("<h2> Time Remaining: " + --seconds_count + " seconds</h2>");

    if (seconds_count <= 0) {
        clearInterval(interval_id);
        display_stats();
    }
}

$("#sub_heading").append($start_game_button);

$("#start_game").on("click", function () {
    run_timer();
    display_questions();
    $("#done_button").append($end_game_button);
});

$("#done_button").on("click", "#end_game", function () {
    clearInterval(interval_id);
    display_stats();
});



// $("#sub_heading").empty();

// var letterBtn = $("<button>");

//         // 3. Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".
//         letterBtn.addClass("letter-button letter letter-button-color");

//         // 4. Then give each "letterBtn" a data-attribute called "data-letter".
//         letterBtn.attr("data-letter", letters[i]);

//         // 5. Then give each "letterBtns" a text equal to "letters[i]".
//         letterBtn.text(letters[i]);

//         // 6. Finally, append each "letterBtn" to the "#buttons" div (provided).
//         $("#buttons").append(letterBtn);


// function reset_crystals() {
//     $("#crystals").empty();
//     for (var i = 0; i < number_options.length; i++) {
//       var $image = $("<img>");
//       $image.addClass("crystal-image");
//       $image.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
//       $image.attr("data-crystalvalue", number_options[i]);
//       $("#crystals").append($image);
//     }
//   }



  // on-click event for button clicks of crystal images
//   $("button").on("click", function () {
//       alert("start pressed");
//   });

    // var crystal_value = $(this).attr("data-crystalvalue");
    // crystal_value = parseInt(crystal_value)