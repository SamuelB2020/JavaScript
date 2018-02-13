$(document).ready(function () {
  setAllImagesBlank();
  $('img').click(onImgClick);
  $("#clearButton").click(setAllImagesBlank)
});


var setAllImagesBlank = function () {
  $('#diceImg1').attr('src', 'images/blank.jpg');
  $('#diceImg2').attr('src', 'images/blank.jpg');
  $('#diceImg3').attr('src', 'images/blank.jpg');
  $('#diceImg4').attr('src', 'images/blank.jpg');
  $('#diceImg5').attr('src', 'images/blank.jpg');
  $('#diceImg6').attr('src', 'images/blank.jpg');
};


var onImgClick = function (e) {
  $target = $(e.currentTarget);
  var id = $target.attr('id');

  var imageIdNumber = id.substring(id.length - 1);

  console.log('imageIdNumber = ', imageIdNumber);

  $target.attr('src', 'images/' + imageIdNumber + '.jpg');
};

