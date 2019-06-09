
var interval_id;
var seconds_count = 10;
var correct_answers = 0;
var incorrect_answers = 0;
var unanswered =  0;
var $start_game_button = $("<button id='start_game'>").text("Start");
var $end_game_button = $("<button id='end_game'>").text("Done");


function display_questions() {
   
}

function display_stats(){
    $("#sub_heading").html("<h3>Done!<br></h3>");
    $("#sub_heading").append("<h3>Correct answers: " + correct_answers + "<br></h3>");
    $("#sub_heading").append("<h3>Incorrect answers: " + incorrect_answers + "<br></h3>");
    $("#sub_heading").append("<h3>Unanswered: " + unanswered + "<br></h3>");
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