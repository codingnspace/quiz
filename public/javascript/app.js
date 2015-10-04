var hermioneScore = 0;
var ronScore = 0;
var harryScore = 0;
var nevilleScore = 0;
var winner ="";
jQuery(document).ready(function(){

  $('input:radio[name="answer"]').change(
    function(){
        if ($(this).is(':checked') && $(this).val() == 'hermione') {
          hermioneScore += 1;
        }
        else if ($(this).is(':checked') && $(this).val() == 'ron') {
          ronScore += 1;
        }
      else  if ($(this).is(':checked') && $(this).val() == 'harry') {
          harryScore += 1;
        }
        else  if ($(this).is(':checked') && $(this).val() == 'neville') {
          nevilleScore += 1;
        }
});

});

function showWinner(){
console.log("Hermione Score " + hermioneScore);
console.log("Ron Score " + ronScore);
console.log("Harry Score " + harryScore);
  console.log("Neville Score " + nevilleScore);
}
