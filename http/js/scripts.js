$(document).ready(function(){
	$(".slider").owlCarousel(
	  {
		loop:true,
		nav:false,
		items:1,
		autoplay:true,
		autoplayTimeout:2000,
		autoplayHoverPause:true
	  }
	)
});

$(document).ready(function(){
  $(".carousel__slider--items").owlCarousel(
	  {
		loop:true,
		nav:true,
		margin:20,
		autoplay:true,
		autoplayTimeout:2000,
		autoplayHoverPause:true,
		responsiveClass:true,
		items:5,
		slideBy: 1,
		navText: ['', ''],
		dots: false
	}
  );		  
});	

$(document).ready(function(){
  $(".carousel__slider--reviews").owlCarousel(
	  {
		loop:true,
		nav:true,
		autoplay:true,
		autoplayTimeout:2000,
		autoplayHoverPause:true,
		responsiveClass:true,
		slideBy: 1,
		navText: ['', ''],
		dots: false
	}
  );
});