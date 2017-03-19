$(document).ready(function() { 
var slider = $('.bxslider').bxSlider({
  mode: 'horizontal'
});

$('#reload-slider').click(function(e){
  e.preventDefault();
  slider.reloadSlider({
    mode: 'fade',
    auto: true,
    pause: 2000,
    speed: 700
  });
});

  });
