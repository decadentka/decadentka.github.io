$(document).ready(function(){
      $('.partners-list').slick({
        infinite: true,
		slidesToShow: 6,
		autoplay: true,
		appendArrows: $('.partners'),
		prevArrow: '<button class="arrow arrow-left"><img class="arrow-img" src="img/arrow_img.png"></button>',
		prevArrow: '<button class="arrow arrow-left"><img class="arrow-img" src="img/arrow_img.png"></button>',
		nextArrow: '<button class="arrow arrow-right"><img class="arrow-img" src="img/arrow_img.png"></button>',
		responsive: [
			{
			  breakpoint: 1200,
			  settings: {
				slidesToShow: 6
			  }
			},
			{
			  breakpoint: 1000,
			  settings: {
				slidesToShow: 4
			  }
			},
			{
			  breakpoint: 750,
			  settings: {
				slidesToShow: 3
			  }
			},
			{
			  breakpoint: 580,
			  settings: {
				slidesToShow: 2
			  }
			},
			{
			  breakpoint: 400,
			  settings: {
				slidesToShow: 1
			  }
			}
		  ]
      });
	  
    });