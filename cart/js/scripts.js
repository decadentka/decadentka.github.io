  $(function(){
	 
	  $('ul.cart__companies__tabs').on('click', 'li:not(.active)', function() {
		$(this)
		  .addClass('active').siblings().removeClass('active')
		  .closest('section.cart__companies').find('div.cart__companies__list__wrapper').removeClass('active').eq($(this).index()).addClass('active');
	  });
	 
	
		$(document).ready(function(){ 
			$(".cart__companies__list").tablesorter({
				headers: {
					0: {
						sorter: false 
					},
					1: {
						sorter: false 
					},			
				},
			}); 
		}); 
	
	
		GetNoun = function(number, one, two, five) {
		number = Math.abs(number);
		number %= 100;
		if (number >= 5 && number <= 20) {
			return five;
		}
		number %= 10;
		if (number == 1) {
			return one;
		}
		if (number >= 2 && number <= 4) {
			return two;
		}
		return five;
	};	

	$('.cart__company__age span').each(function(){
		var age = GetNoun($(this).html(), 'год', 'года', 'лет');
		$(this).after(' <span>' + age + '</span>');
	});


});
