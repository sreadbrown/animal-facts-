$(document).ready(function() {
  var animal = prompt("Which animal do you want to learn about? Sloths, Elephants, or Kangaroos?");

  if (animal === 'Sloths') {
    $('#slothfacts').show();
  }
  if (animal === 'Elephants') {
    $('#elephantfacts').show();
  }
  if (animal === "Kangaroos") {
    $('#kangaroofacts').show();
  }
});
