  $(document).ready(function () {
 //$("#slide1").hide();
  //  $('#slide3').hide();
    //$('#slide4').hide();


  $('#prevButton').html('<button  class="btn btn-info">Prev</button>');
  $('#nextButton').html('<button  onclick="pressNextButton()" class="btn btn-primary">Next</button>');
if($('#slide1').is(":visible")===false){
  $('#prevButton').hide();
}
  });

  function pressNextButton(){
    if( $("div").attr('id') === 'slide1')){
      $('#slide2').show();
      $('#slide1').hide;
    }
  }
