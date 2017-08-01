let scrollToDiv = function() {
      let scrollDivs = ['#page-top', '.bg-primary', '.bg-secondary', '.bg-contact'];
      //put divs to scroll to in order here
      let currentDivState = 0;
      $(window).bind('mousewheel', function(event) {
      if (event.originalEvent.wheelDelta >= 0) {
        if(currentDivState > 0) {
          currentDivState -= 1;
          $('html, body').animate({
            scrollTop: $(scrollDivs[currentDivState]).offset().top
          }, 1000, 'easeInOutExpo');
          event.preventDefault();
          //change animation speed here based on height later
        }
      }
      else {
        if(currentDivState < scrollDivs.length - 1) {
          currentDivState += 1;
          $('html, body').animate({
            scrollTop: $(scrollDivs[currentDivState]).offset().top
          }, 1000, 'easeInOutExpo');
          event.preventDefault();
        }
      }
    });
  };
  scrollToDiv();