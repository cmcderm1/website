// Twitter
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');


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


$("#message-box").css("border", "2px solid blue");
$("#message-box").css("background-color", "yellow");




$("#form-button").on("click", function() {
  var comment = $('#message-box').val();
  console.log ();
  $('#visible-comment').html("Thank you for your message! I will be in touch with you shortly.");
  $('#message-box').hide();
  return false;
});



});
 
