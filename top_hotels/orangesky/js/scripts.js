$(document).ready(function(){
  $('.slider').slick({
	infinite: true,
	slidesToShow: 1,
	autoplay: true,
	appendArrows: $('.slider-block'),
	prevArrow: '<button class="arrow arrow-left"><img class="arrow-img" src="img/slider-arrow.png"></button>',
	nextArrow: '<button class="arrow arrow-right"><img class="arrow-img" src="img/slider-arrow.png"></button>'
  });
  
  $('.countries-list').slick ({
	infinite: true,
	slidesToShow: 4,
	autoplay: true,
	appendArrows: $('.countries'),
	prevArrow: '<button class="arrow arrow-left"><img class="arrow-img" src="img/slider-arrow.png"></button>',
	nextArrow: '<button class="arrow arrow-right"><img class="arrow-img" src="img/slider-arrow.png"></button>',
	responsive: [
	{
	  breakpoint: 999999,
	  settings: 'unslick'
	},
	{
	  breakpoint: 1150,
	  settings: {
		slidesToShow: 4
	  }
	},
	{
	  breakpoint: 1000,
	  settings: {
		slidesToShow: 3
	  }
	},
	{
	  breakpoint: 800,
	  settings: {
		slidesToShow: 2
	  }
	},
	{
	  breakpoint: 550,
	  settings: {
		slidesToShow: 1
	  }
	}
	]
  });
});

$(window).on('resize', function() {
   if( $(window).width() < 1200 &&  !$('.countries-list').hasClass('slick-initialized')) {
         $('.countries-list').slick('reinit');
    }
});