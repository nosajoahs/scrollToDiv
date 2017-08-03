let scrollToDiv = function () {
  let scrollDivs = ['#page-top', '.bg-primary', '.bg-secondary', '.bg-contact'];
  //replace divs you want to scroll to in scrollDivs array in order here. 
  let currentDivState = 0;
  let waitState = false;
  $(window).bind('mousewheel', function (event) {
    event.preventDefault();
    setTimeout(function () { waitState = true }, 1500);
    if (event.originalEvent.wheelDelta >= 0 && waitState) {
      if (currentDivState > 0) {
        waitState = false;
        currentDivState -= 1;
        $('html, body').animate({
          scrollTop: $(scrollDivs[currentDivState]).offset().top
        }, 750, 'easeInOutExpo');
      }
    }
    else {
      if (event.originalEvent.wheelDelta < 0 && waitState) {
        if (currentDivState < scrollDivs.length - 1) {
          waitState = false;
          currentDivState += 1;
          $('html, body').animate({
            scrollTop: $(scrollDivs[currentDivState]).offset().top
          }, 750, 'easeInOutExpo');
        }
      }
    }
  });

};
scrollToDiv();