
let scrollToDiv = function () {

  let scrollDivs = ['#id1', '.class1', '.class2', '#id2'];
  //replace elements you want to scroll to in scrollDivs array in order here. 
  let currentDivState = 0;
  let waitState = false;
  let firstScroll = true;

  $(window).bind('mousewheel', function (event) {

    event.preventDefault();

    setTimeout(function () {
      waitState = true;
    }, firstScroll ? 1 : 1000);

    if (firstScroll) {
      setTimeout(function () {
        firstScroll = false;
      }, 10);
    }

    if (waitState) {
      waitState = false;
      if (event.originalEvent.wheelDelta >= 0) {
        if (currentDivState > 0) {
          currentDivState -= 1;
          console.log('up currentDivState: ', currentDivState)
          $('html, body').animate({
            scrollTop: $(scrollDivs[currentDivState]).offset().top
          }, 750, 'easeInOutExpo');
        }
      }
      else {
        if (currentDivState < scrollDivs.length - 1) {
          currentDivState += 1;
          console.log('down currentDivState: ', currentDivState)
          $('html, body').animate({
            scrollTop: $(scrollDivs[currentDivState]).offset().top
          }, 750, 'easeInOutExpo');
        }
      }
    }

  });
};

scrollToDiv();