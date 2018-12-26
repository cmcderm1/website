// Twitter
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.431478, lng: -80.050541},
    zoom: 8
  });
}


$(document).ready(function(){

 
 
  // Smooth scrolling
  
  var $root = $('html, body');
  $('#navbar-example a').click(function() {
    var href = $.attr(this, 'href');
     {
      $root.animate({
        scrollTop: $(href).offset().top
      }, 500, function () {
        window.location.hash = href;
      });
    }
    return false;
  });
  
  
  
  

  // Tooltips
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });



$("#form-button").on("click", function() {
   if ( $('#message-box').val() === "") {
   $("#message-box").css("background-color", "red");
   } else {
  // need it to be black
   var comment = $('#message-box').val();
  console.log ();
  $('#visible-comment').html("Thank you for your message! I will be in touch with you shortly.");
  $('#message-box').hide();
   return false;
}
});


$("#message-box").on("keyup", function() {
  console.log("keyup happened"); //here we make sure we're catching the keyup
  // in here is where the rest of our code for this Exercise will go
  var nameName = 3;
  var name = "string";

  var charCount = $("#message-box").val().length; //here we set the length of the content of the textarea to a variable
  
  console.log(charCount); //here we make sure we set it to the right value

  $("#char-count").html(charCount); //here we show a running character count to the user
 if(charCount > 50) {
  $("#char-count").css("color", "red");
  } else {
  // need it to be black
   $("#char-count").css("color", "black");
}
  
});


  // work section
  for(var i = 0; i < works.length; ++i ) {
  $("#works").append("\
  <div class='col-sm-6 col-md-3'>\
    <a href='" + works[i].url + "' class='work-img'>\
      <img class='img-fluid' src='" + works[i].pic + "'>\
  <span class='info'><p class='proj-title'>Title:</p>'" + works[i].title + "' </span>\
</a>\
  </div>\
");
   var images = $("#work img");
  if(i%2 === 0){
    $(images[i]).css("border", "2px solid DodgerBlue");
  } else {
    $(images[i]).css("border", "2px solid salmon");
  }
}

  $(".work-img").mouseenter(function(){
  $(".info", this).show();
}).mouseleave(function(){
  $(".info", this).hide();
});
});




