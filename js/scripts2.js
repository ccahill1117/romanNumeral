
function howBig (inputNo) {
  if (inputNo >= 4000) {
    var tooBig = ("that number is too big for Roman Numeral counting");
    return tooBig;
  }
  else if (inputNo <= 3999 && inputNo >= 1000) {
    var inputArray = inputNo.split('');
    for (var i = 0; i < arrayNumerals.length; i++) {
      if (parseInt(inputArray[3]) === i ) {
        var resultArrayPos4 = arrayNumerals[i];
        }
    }
    for (var i = 0; i < arrayNumTens.length; i++) {
      if (parseInt(inputArray[2]) === i) {
        var resultArrayPos3 = arrayNumTens[i];
      }
    }
    for (var i = 0; i < arrayHundreds.length; i++) {
      if (parseInt(inputArray[1]) === i) {
        var resultArrayPos2 = arrayHundreds[i];
      }
    }
    for (var i = 0; i < arrayThousands.length; i++) {
      if (parseInt(inputArray[0]) === i) {
        var resultArrayPos1 = arrayThousands[i];
      }
    }
  }
  else if (inputNo <= 999 && inputNo >= 100) {
    var inputArray = inputNo.split('');
    for (var i = 0; i < (arrayNumerals.length+1); i++) {
      if (parseInt(inputArray[2]) === i ) {
        var resultArrayPos4 = arrayNumerals[i];
        }
    }
    for (var i = 0; i < (arrayNumTens.length+1); i++) {
      if (parseInt(inputArray[1]) === i) {
        var resultArrayPos3 = arrayNumTens[i];
      }
    }
    for (var i = 0; i < (arrayHundreds.length+1); i++) {
      if (parseInt(inputArray[0]) === i) {
        var resultArrayPos2 = arrayHundreds[i];
        var resultArrayPos1 = arrayThousands[0];
      }
    }
  }
  else if (inputNo <= 99 && inputNo >= 10) {
    var inputArray = inputNo.split('');
    for (var i = 0; i < (arrayNumerals.length+1); i++) {
      if (parseInt(inputArray[1]) === i ) {
        var resultArrayPos4 = arrayNumerals[i];
        }
    }
    for (var i = 0; i < (arrayNumTens.length+1); i++) {
      if (parseInt(inputArray[0]) === i) {
        var resultArrayPos3 = arrayNumTens[i];
        var resultArrayPos1 = arrayThousands[0];
        var resultArrayPos2 = arrayHundreds[0];
      }
    }
  }
  else if (inputNo <= 9 && inputNo >= 0) {
    var inputArray = inputNo.split('');
    var resultArrayPos1 = arrayThousands[0];
    var resultArrayPos2 = arrayHundreds[0];
    var resultArrayPos3 = arrayNumTens[0];
    for (var i = 0; i < (arrayNumerals.length+1); i++) {
      if (parseInt(inputArray[0]) === i ) {
        var resultArrayPos4 = arrayNumerals[i];
          }
      else if (inputArray[0] === "0") {
        var resultArrayPos4 = "you entered zero!";
      }
    }
  }
    return resultArrayPos1+resultArrayPos2+resultArrayPos3+resultArrayPos4;
}

var arrayNumerals = ["","I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
var arrayNumTens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC", "C"];
var arrayHundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
var arrayThousands = ["", "M", "MM", "MMM"];

$(document).ready(function(){
  $("#inputRomanNumeral").submit(function(event){
    event.preventDefault();


//     var minutesLabel = document.getElementById("minutes");
//     var secondsLabel = document.getElementById("seconds");
//     var totalSeconds = 0;
//     setInterval(setTime, 1000);
//
//   function setTime() {
//     ++totalSeconds;
//     secondsLabel.innerHTML = pad(totalSeconds % 60);
//     minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
// }
//
//   function pad(val) {
//     var valString = val + "";
//     if (valString.length < 2) {
//       return "0" + valString;
//     } else {
//       return howBig(valString);
//   }
// }

    var inputNumber = $("#inputNumberField").val();
    var result = howBig(inputNumber);

    $(".resultDiv").empty();
    $(".resultDiv").append(result);

    console.log(result);
    console.log(arrayNumerals.length);

  });
});
