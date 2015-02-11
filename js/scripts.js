var coinCombinator = function(amount) {
  var sacajaweaDollar = Math.floor(amount / 100)
  var change = amount % 100
  var  halfDollar = Math.floor(change / 50);
  var change = amount % 100 % 50;
  var quarters = Math.floor(change / 25);
  change = amount % 100 % 50 % 25;
  var dimes = Math.floor(change / 10);
  change = amount % 100 % 50 % 25 % 10;
  var nickels = Math.floor(change / 5);
  change = amount % 100 % 50 % 25 % 10 % 5;
  var pennies = Math.floor(change / 1);

  

  return [sacajaweaDollar, halfDollar, quarters, dimes, nickels, pennies];
};

$(document).ready(function() {
  $("form#change-combinator").submit(function(event) {
    var amount = parseInt($("input#amount").val());
    var result = coinCombinator(amount);

    $(".sacajaweaDollar").text(result[0]);
    $(".halfDollar").text(result[1]);
    $(".quarters").text(result[2]);
    $(".dimes").text(result[3]);
    $(".nickels").text(result[4]);
    $(".pennies").text(result[5]);

    $("#result").show();
    event.preventDefault();
  });
});
