		(function($) {
		$(function() {
		 
		  $('ul.cart__companies__tabs').on('click', 'li:not(.active)', function() {
			$(this)
			  .addClass('active').siblings().removeClass('active')
			  .closest('section.cart__companies').find('div.cart__companies__list__wrapper').removeClass('active').eq($(this).index()).addClass('active');
		  });
		 
		});
		})(jQuery);

		(function($) {
		$(function() {
		
		$(document).ready(function() 
    { 
        $(".cart__companies__list").tablesorter({
        headers: {
            0: {
                sorter: false 
            },
			1: {
                sorter: false 
            },			
        },
		sortList: [[4,0]],
    }); 
    } 
); 
		});
		})(jQuery);
