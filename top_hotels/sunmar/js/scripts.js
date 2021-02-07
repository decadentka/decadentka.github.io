$(document).ready(function(){
  $('.slider').slick({
	infinite: true,
	slidesToShow: 1,
	autoplay: true,
	appendArrows: $('.slider'),
	prevArrow: '<button class="arrow arrow-left"></button>',
	nextArrow: '<button class="arrow arrow-right"></button>',
	responsive: [
	{
	  breakpoint: 1500,
	  settings: {
		  dots: true,
		  arrows: false
	  }
	 }
	 ]
   });
   
   $('.partners-list').slick({
	infinite: true,
	slidesToShow: 6,
	autoplay: true,
	appendArrows: $('.partners-list'),
	prevArrow: '<button class="arrow arrow-left"></button>',
	nextArrow: '<button class="arrow arrow-right"></button>',
	responsive: [
	 {
	  breakpoint: 1400,
	  settings: {
		slidesToShow: 5
	  }
	},
	 {
	  breakpoint: 1000,
	  settings: {
		slidesToShow: 4
	  }
	},
	{
	  breakpoint: 700,
	  settings: {
		slidesToShow: 3
	  }
	},
	{
	  breakpoint: 500,
	  settings: {
		slidesToShow: 2
	  }
	}
	 ]
   });
   
   $('.hot-slider').slick({
	appendArrows: $('.hot-slider-arrows'),
	prevArrow: '<button class="arrow-mini arrow-left"></button>',
	nextArrow: '<button class="arrow-mini arrow-right"></button>',
	dots: true,
	appendDots: $('.hot-slider-arrows')
   });
   
   $('.js-tabs li').on('click', function(event){
	   event.preventDefault();
	   $(this).toggleClass('active').siblings().removeClass('active');
	   $('.tabs-content').children('.tabs-content-block').eq($(this).index()).toggle().siblings('.tabs-content-block').hide();
   });
   
   
});