function countToTen(inputNo) {
  var tensNo = inputNo % 10;
  return arrayNumerals[(tensNo)-1];
  }

var arrayNumerals = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix",]



$(document).ready(function(){
  $("#inputRomanNumeral").submit(function(event){
    event.preventDefault();


    var inputNumber = $("#inputNumberField").val();
    var result = countToTen(inputNumber);

    $(".resultDiv").empty();
    $(".resultDiv").append(result);

    console.log(result);

  });
});
