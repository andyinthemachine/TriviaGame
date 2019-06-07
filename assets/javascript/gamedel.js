


//this js not active


var random_number;
var wins = 0;
var losses = 0;
var running_total;
var number_options = [0, 0, 0, 0];
var $images = [];



function update_display() {
  $("#random_number").text(random_number);
  $("#wins").text(wins);
  $("#losses").text(losses);
  $("#running_total").text(running_total);
  $("#random_number").text(random_number);
}

function reset_game() {
  // set new random number 19-120
  random_number = Math.floor(Math.random() * 101) + 19;
  running_total = 0;

  for (var i = 0; i < number_options.length; i++) {
    number_options[i] = Math.floor(Math.random() * 12) + 1;
  }

  reset_crystals();
}

function reset_crystals() {
  $("#crystals").empty();
  for (var i = 0; i < number_options.length; i++) {
    var $image = $("<img>");
    $image.addClass("crystal-image");
    $image.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
    $image.attr("data-crystalvalue", number_options[i]);
    $("#crystals").append($image);
  }
}

reset_game();
update_display();

// on-click event for button clicks of crystal images
$("#crystals").on("click", ".crystal-image", function () {
  var crystal_value = $(this).attr("data-crystalvalue");
  crystal_value = parseInt(crystal_value);
  console.log(crystal_value)
  running_total += crystal_value;

  if (running_total == random_number) {
    wins++;
    reset_game();
  }
  else if (running_total > random_number) {
    losses++;
    reset_game();
  }
  update_display();

});



