
function howBig (inputNo) {
  if (inputNo > 100) {
    var splitInput3 = inputNo.split('');
    return (arrayHundreds[splitInput3[0]-1]).concat((arrayNumTens[splitInput3[1]-1]).concat(arrayNumerals[splitInput3[2]-1]));
  }
  else if (inputNo >= 10 && inputNo <= 99) {
    var splitInput2 = inputNo.split('');
    return (arrayNumTens[splitInput2[0]-1]).concat(arrayNumerals[splitInput2[1]-1]);
  }
  else if (inputNo <10) {
    var onesNo = inputNo % 10;
    return arrayNumerals[(onesNo)-1];
  }
}

var arrayNumerals = ["I", "I", "I", "IV", "V", "VI", "VI", "VI", "IX",];
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

    console.log(result);

  });
});
