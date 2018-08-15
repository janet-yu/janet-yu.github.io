var worksGroup = document.querySelectorAll('.page');
var leftArrow = document.querySelector('#left');
var rightArrow = document.querySelector('#right');

var pageIndex = 0;

function reset(){
  for(let i = 0; i < worksGroup.length; i++){
    worksGroup[i].style.display = "none";
  }
}

function start(){
  reset();
  worksGroup[0].style.display = "block";
}

function leftSlide(){
  reset();
  worksGroup[pageIndex - 1].style.display = "block";
  pageIndex--;
}

function rightSlide(){
  reset();
  worksGroup[pageIndex + 1].style.display = "block";
  pageIndex++;
}

leftArrow.addEventListener('click', function(){
  if(pageIndex === 0){
    pageIndex = worksGroup.length;
  }
  leftSlide();
})

rightArrow.addEventListener('click', function(){
  if(pageIndex === worksGroup.length - 1){
    pageIndex = -1;
  }
  rightSlide();
})

start();
