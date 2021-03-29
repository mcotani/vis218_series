var i = 0;
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  var txt = document.getElementById("demo1").textContent;
  var length = txt.length;
  if (i < length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

var scroll = window.requestAnimationFrame ||
            function(callback){ window.setTimeout(callback, 1000/60)};

var elementsToShow = document.getElementsByClassName('show-on-scroll');
var elementsToShowTo = document.getElementsByClassName('show-on-scroll-go');

function tW(txt, etst) {
  var j;
  for ( j = 0; j < txt.length; j++) {
    etst.innerHTML += txt.charAt(j);
    console.log("added: "+txt.charAt(j));
    setTimeout(tW, speed);
  }
}

function loop() {
  var k;
    for (k = 0; k<elementsToShow.length;k++){

      if (isElementInViewport(elementsToShow.item(k))) {
        if (elementsToShowTo.item(k).textContent == ""){
          console.log("lets do it");
          tW(elementsToShow.item(k).textContent, elementsToShowTo.item(k));
        }
      } 
    }
  
    scroll(loop);
  }

  // Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0
        && rect.bottom >= 0)
      ||
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
  }
