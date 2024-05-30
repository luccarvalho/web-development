let buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];

let userClickedPattern = [];

let started = false;

let level = 0;

$("body").keypress(function (event) {
  if (event.key == "a" && !started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});
