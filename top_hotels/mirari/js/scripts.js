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
	  breakpoint: 1000,
	  settings: {
		  dots: true
	  }
	 }
	 ]
   });
   
  $('.countries-list').slick({
	infinite: true,
	slidesToShow: 4,
	autoplay: true,
	appendArrows: $('.countries-list'),
	prevArrow: '<button class="arrow arrow-left"></button>',
	nextArrow: '<button class="arrow arrow-right"></button>',
	responsive: [
	{
	  breakpoint: 1350,
	  settings: {
		  slidesToShow: 3,
		  dots: true
	  }
	 },
	{
	  breakpoint: 1150,
	  settings: {
		  slidesToShow: 2,
		  dots: true
	  }
	 },
	{
	  breakpoint: 900,
	  settings: {
		  slidesToShow: 1,
		  dots: true
	  }
	 }
	 ]
   });
   
  $('.reviews-list').slick({
	infinite: true,
	slidesToShow: 3,
	autoplay: true,
	appendArrows: $('.reviews-list'),
	prevArrow: '<button class="arrow arrow-left"></button>',
	nextArrow: '<button class="arrow arrow-right"></button>',
	responsive: [
	{
	  breakpoint: 1150,
	  settings: {
		  slidesToShow: 2,
		  dots: true
	  }
	 },
	 {
	  breakpoint: 900,
	  settings: {
		  slidesToShow: 1,
		  dots: true
	  }
	 }
	 ]
   }); 
   
   if ($(window).width() >= 1000) {
		 $(window).scroll(function(){

				if ($(window).scrollTop() >= 450) {
					$('.top-menu-block').addClass('fixed');
				} else {
					$('.top-menu-block').removeClass('fixed');
				}
			 
			});
	  }
	 else {
		$(window).scroll(function(){

			if ($(window).scrollTop() >= 740) {
				$('.top-menu-block').addClass('fixed');
			} else {
				$('.top-menu-block').removeClass('fixed');
			}
		 
		});
	 }
   
    $(window).resize(function() {
	  if ($(window).width() >= 1000) {
		 $(window).scroll(function(){

				if ($(window).scrollTop() >= 450) {
					$('.top-menu-block').addClass('fixed');
				} else {
					$('.top-menu-block').removeClass('fixed');
				}
			 
			});
	  }
	 else {
		$(window).scroll(function(){

			if ($(window).scrollTop() >= 740) {
				$('.top-menu-block').addClass('fixed');
			} else {
				$('.top-menu-block').removeClass('fixed');
			}
		 
		});
	 }
	});
   
   
});