
function howBig (inputNo) {
  if (inputNo >= 4000) {
    var tooBig = ("that number is too big for Roman Numeral counting");
    return tooBig;
  }
  else if (inputNo >= 1000 && inputNo <=3999) {
    var splitInput4 = inputNo.split('');
    return(arrayThousands[splitInput4[0]].concat((arrayHundreds[splitInput4[1]]).concat((arrayNumTens[splitInput4[2]]).concat(arrayNumerals[splitInput4[3]]))));
  }
  else if (inputNo >= 100 && inputNo <= 999) {
    debugger
    var splitInput3 = inputNo.split('');
    return (arrayHundreds[splitInput3[0]]).concat((arrayNumTens[splitInput3[1]]).concat(arrayNumerals[splitInput3[2]]));
  }
  else if (inputNo >= 10 && inputNo <= 99) {
    var splitInput2 = inputNo.split('');
    return (arrayNumTens[splitInput2[0]]).concat(arrayNumerals[splitInput2[1]]);
  }
  else if (inputNo < 10) {
    // var onesNo = inputNo % 10;
    return arrayNumerals[(inputNo)];
  }
}

var arrayNumerals = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX",];
var arrayNumTens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC", "C"];
var arrayHundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
var arrayThousands = ["", "M", "MM", "MMM"];


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
