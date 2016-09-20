function talk() {
  onclick = click
  var click = new SpeechSynthesisUtterance('click');
  window.speechSynthesis.speak(click);
}

var mousespeedX = 0;
var mousespeedY = 0;
window.onmousemove = function(e) {
  var vx = mousespeedX - e.clientX
  var vy = mousespeedY - e.clientY
  var mousespeed = Math.sqrt((vx * vx) + (vy * vy));
  mousespeedX = e.clientX
  mousespeedY = e.clientY

  console.log(mousespeed)
  if (mousespeed > 350) {
    var wee = new SpeechSynthesisUtterance('wee');
    window.speechSynthesis.speak(wee);
  }
};