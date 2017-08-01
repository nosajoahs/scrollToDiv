# # scrollToDiv.js

Scrolls to specific div on one mouseWheel or trackpad up / down. 

## Use

- Set jQuery.
```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
```

- Init plugin.
```javascript
let scrollToDiv = function() {
      let scrollDivs = ['#page-top', '.bg-primary', '.bg-secondary', '.bg-contact'];
      //replace divs you want to scroll to in scrollDivs array in order here.
      let currentDivState = 0;
      $(window).bind('mousewheel', function(event) {
      if (event.originalEvent.wheelDelta >= 0) {
        if(currentDivState > 0) {
          currentDivState -= 1;
          $('html, body').animate({
            scrollTop: $(scrollDivs[currentDivState]).offset().top
          }, 1000, 'easeInOutExpo');
          event.preventDefault();
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
```

## License

Released under the MIT license.