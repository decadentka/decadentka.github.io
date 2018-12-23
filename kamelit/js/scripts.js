$(function(){
	$('.menu__list__element--submenu').on('click', function(){
		if($('.submenu__block').hasClass('hidden')){
			$('.submenu__block').slideDown(300);
			$('.submenu__block').removeClass('hidden');
		} else{
			$('.submenu__block').slideUp(300);
			$('.submenu__block').addClass('hidden');
		};				
		$('.menu__list__element--submenu').toggleClass('menu__list__element--submenu-open');
		return false;
	});
	$('.purchase__link').on('click',function(){
		$('.purchase__up').css('display','block');
		return false;
	});
	$('.purchase__up').on('click',function(e){
		if ($(e.target).attr('class') == 'purchase__up'){
			$('.purchase__up').css('display','none');
		};
	});
	$('.purchase__close').on('click',function(){
		$('.purchase__up').css('display','none');
	});
	$('.purchase__button').on('click',function(){
		$('.purchase__up').css('display','none');
	});
});

$(document).ready(function(){
	$('.slider__list').owlCarousel({
		items:1,
		autoplay:true,
		loop:true,
		autoplayHoverPause:true
	});

	$('.portfolio__carousel__list').owlCarousel({
		responsive:{
			0: {
			items:1,
			},
			640: {
			items:2,
			},
			960: {
			items:3,
			},
			1180: {
			items:5,
			}
		},
		autoplay:true,
		nav:true,
		loop:true,
		dots:false,
		navText:[],
		autoplayHoverPause:true,
		margin:20
	});
	
	$(document).ready(function() {
		$('.fancybox').fancybox();
	});
});