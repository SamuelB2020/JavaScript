$(document).ready(function () {
  setAllImagesBlank();
  $('img').click(onImgClick);
});
var imageIsVisible = false;

var setAllImagesBlank = function () {
  $('#diceImg1').attr('src', 'images/blank.jpg');
  $('#diceImg2').attr('src', 'images/blank.jpg');
  $('#diceImg3').attr('src', 'images/blank.jpg');
};


var onImgClick = function (e) {
  $target = $(e.currentTarget);
  var id = $target.attr('id');

  var imageIdNumber = id.substring(id.length - 1);

  console.log('imageIdNumber = ', imageIdNumber);
if(!imageIsVisible){
  $target.attr('src', 'images/' + imageIdNumber + '.jpg');
  startTimer();
  imageIsVisible = true
  }
};

var timer;

function startTimer() {
  clearInterval(timer);

  timer = setInterval(function () {
    setAllImagesBlank();
    imageIsVisible = !imageIsVisible
  }, 5000);
}
