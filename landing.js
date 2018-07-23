var left = document.getElementsByClassName('left')[0];
var about = document.getElementById('about');
var gallery = document.getElementById('gallery');
var github = document.getElementById('github');
var right = document.getElementsByClassName('right')[0];
var container = document.getElementsByClassName('container')[0];
var enter = document.getElementById('enter');
var nav = document.querySelector("navbar");
var landing = document.getElementById('landing-info');
$(right).css('display','none');
$(document).ready(function(){
  $(enter).on("click", function(e){
    var about = this.getAttribute('href');
    console.log(about);
    e.preventDefault();
    left.classList.add('shift');
    landing.removeChild(enter);
    setTimeout(function(){
        window.location = about;
    },1000);
});
});
