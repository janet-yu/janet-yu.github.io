var left = document.getElementsByClassName('left')[0];
var about = document.getElementById('about');
var right = document.getElementsByClassName('right')[0];
var nav = document.querySelector("navbar");
var landing = document.getElementById('landing-info');

var imageOverlay = document.querySelectorAll(".gallery .hover");

var links = document.querySelectorAll(".hover a");

console.log(imageOverlay[0]);
$(right).css('display','none');
$(nav).css('display','none');
$(document).ready(function(){
  $(right).fadeIn();
  $(nav).fadeIn();
  $('a').on("click", function(e){
    var page = this.getAttribute('href');
    console.log(page);
    e.preventDefault();
    $(right).fadeOut(function(){
      setTimeout(function(){
          window.location = page;
      },100);
    });
});
});

for(var i = 0; i < imageOverlay.length; i++){
  $(imageOverlay[i]).hover(function(){
    this.classList.toggle("overlay");
  });
}
