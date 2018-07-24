var left = document.getElementsByClassName('left')[0];
var about = document.getElementById('about');
var right = document.getElementsByClassName('right')[0];
var container = document.getElementsByClassName('container')[0];
var enter = document.getElementById('enter');
var nav = document.querySelector("nav");
var body = document.querySelector('body');
var landing = document.getElementById('landing-info');
$(right).css('display','none');
$(nav).css('display','none');
$(document).ready(function(){
    $(enter).on("click", function(e){
      var about = this.getAttribute('href');
      console.log(about);
      e.preventDefault();
      // left.classList.add('shift');
      // landing.removeChild(enter);
      $(body).fadeOut(function(){
        setTimeout(function(){
            window.location = about;
        },100);
      });
  }
);
});
