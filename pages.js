var left = document.getElementsByClassName('left')[0];
var about = document.getElementById('about');
var right = document.getElementsByClassName('right')[0];
var nav = document.querySelector("navbar");
var landing = document.getElementById('landing-info');

var imageOverlay = document.querySelectorAll(".gallery .hover");

var links = document.querySelectorAll(".hover a");
var worksGroup = document.querySelectorAll('.group');
var arrowLeft = document.getElementById("left-arrow");
var arrowRight = document.getElementById("right-arrow");



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

var currentIndex = 0;

function reset(){
  for(let i = 0; i<worksGroup.length; i++){
    worksGroup[i].style.display ="none";
  }
}

function startSlide(){
  reset();
  worksGroup[0].style.display = "block";
}

function slideLeft(){
  reset();
  worksGroup[currentIndex-1].style.display = "block";
  currentIndex--;
}

function slideRight(){
  reset();
  worksGroup[currentIndex+1].style.display = "block";
  currentIndex++;
}
arrowLeft.addEventListener("click", function(){
  if(currentIndex === 0){
    currentIndex = worksGroup.length;
  }
  slideLeft();
})
arrowRight.addEventListener("click", function(){
  if(currentIndex === worksGroup.length-1){
    currentIndex = -1;
  }
  slideRight();
})
startSlide();
