$(document).ready(function() {
  
  $( ".c-device__power" ).click(function(){
    $( ".c-device" ).addClass("c-device--teeter");
    $( ".c-device__power" ).addClass("c-device__power--teeter");
    setTimeout(function() {
      $( ".c-device" ).removeClass("c-device--teeter");
      $( ".c-device__power" ).removeClass("c-device__power--teeter");
    }, 1000 );
  });
  
  $( ".js-scrolltocontact" ).click(function(e){
    e.preventDefault();
    $( "html, body" ).animate({
        scrollTop: $( "#js-contact" ).offset().top -135
    }, 500);
  });
  
  $( ".js-scrolltotop" ).click(function(e){
    e.preventDefault();
    $( "html, body" ).animate({
        scrollTop: $( "#js-device" ).offset().top -0
    }, 500);
  });
  
});


// Formspree -------------------------------------------------------------------

window.addEventListener("DOMContentLoaded", function() {

  var form = document.getElementById("js-contactform");
  var status = document.getElementById("js-formstatus");
  var check = document.getElementById("js-faxfield");

  function success() {
    form.reset();
    status.innerHTML = "Thanks!";
    window.scrollTo(0,document.body.scrollHeight);
  }

  function error() {
    status.innerHTML = "Oops! There was a problem.";
    window.scrollTo(0,document.body.scrollHeight);
  }

  form.addEventListener("submit", function(ev) {
    ev.preventDefault();
    var data = new FormData(form);
    if (!check.checked) {
      ajax(form.method, form.action, data, success, error);
    }
  });
});

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
