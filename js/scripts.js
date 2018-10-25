
function howBig (inputNo) {
  if (inputNo >= 10 && inputNo < 99) {
    var splitInput = inputNo.split('');
    return (arrayNumTens[splitInput[0]-1]).concat(arrayNumerals[splitInput[1]-1]);
  }
  else if (inputNo <10) {
    var onesNo = inputNo % 10;
    return arrayNumerals[(onesNo)-1];
  }
}

var arrayNumerals = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix",];
var arrayNumTens = ["x", "xx", "xxx", "xL", "L", "Lx", "Lxx", "Lxxx", "xC", "C"];


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
