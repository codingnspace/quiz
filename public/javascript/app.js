var hermioneScore = 0;
var ronScore = 0;
var harryScore = 0;
var nevilleScore = 0;
var winner ="";
var ansArr = $('#myForm').serializeArray();
var dataObj = {};

jQuery(document).ready(function(){

$('#submit').submit( function(event){
  for(var i=0; i< ansArr.length; i +=1){
     dataObj[ansArr[i].name] = ansArr[i].value;

        if (ansArr[i].is(':checked') && ansArr[i].val() === 'hermione') {
          hermioneScore += 1;
        }
        else if (ansArr[i].is(':checked') && ansArr[i].val() === 'ron') {
          ronScore += 1;
        }
      else  if (ansArr[i].is(':checked') && ansArr[i].val() === 'harry') {
          harryScore += 1;
        }
        else  if (ansArr[i].is(':checked') && ansArr[i].val() === 'neville') {
          nevilleScore += 1;
        }
  }

  showWinner();
});

});

function showWinner(){
console.log("Hermione Score " + hermioneScore);
console.log("Ron Score " + ronScore);
console.log("Harry Score " + harryScore);
  console.log("Neville Score " + nevilleScore);
}
