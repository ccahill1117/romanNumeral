
function howBig (inputNo) {
  if (inputNo >= 4000) {
    var tooBig = ("that number is too big for Roman Numeral counting");
    return tooBig;
  }
  else if (inputNo <= 3999 && inputNo >= 1000) {
    var inputArray = inputNo.split('');
    var resultArray = [];
    for (var i = 0; i < (arrayNumerals.length+1); i++) {
      if (parseInt(inputArray[3]) === i) {
        var resultArrayPos4 = arrayNumerals[i-1];
      }
    }
    for (var i = 0; i < (arrayNumTens.length+1); i++) {
      if (parseInt(inputArray[2]) === i) {
        var resultArrayPos3 = arrayNumTens[i-1];
      }
    }
    for (var i = 0; i < (arrayHundreds.length+1); i++) {
      if (parseInt(inputArray[1]) === i) {
        var resultArrayPos2 = arrayHundreds[i-1];
      }
    }
    for (var i = 0; i < (arrayThousands.length+1); i++) {
      if (parseInt(inputArray[0]) === i) {
        var resultArrayPos1 = arrayThousands[i-1];
      }
    }
  }
    return resultArrayPos1+resultArrayPos2+resultArrayPos3+resultArrayPos4;
}

var arrayNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
var arrayNumTens = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC", "C"];
var arrayHundreds = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
var arrayThousands = ["M", "MM", "MMM"];

$(document).ready(function(){
  $("#inputRomanNumeral").submit(function(event){
    event.preventDefault();


    var inputNumber = $("#inputNumberField").val();
    var result = howBig(inputNumber);

    $(".resultDiv").empty();
    $(".resultDiv").append(result);

    // console.log(result);

  });
});
