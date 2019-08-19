$(document).ready(function(){
  getIt();

   frameIt();

   pressIt();

   submitIt();

 });


 function getIt() {
  $("p").on("click", function() {
    alert("Hey!");
  });
}

 function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty');
  });
}

 function pressIt() {
  $("input#typing").on('keydown', function(key) {
    if (key.keyCode == 71) {
      alert('g was pressed');
    }
  });
}