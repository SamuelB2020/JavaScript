$(document).ready(function () {
  var display = $('#outputP');
  var fiveMinutes = 390;
  startTimer(fiveMinutes, display);
});




// from http://stackoverflow.com/a/20618517/1109316
function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    display.text(minutes + ':' + seconds);
    console.log(timer);
    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}
