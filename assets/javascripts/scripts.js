(function ($, root, undefined) {

	$(function () {
		'use strict';

		// DOM ready, take it away

		$('.owl-one').owlCarousel({
		    items:1,
		    loop:true,
		    margin:10,
		    autoplay:true,
				animateOut: 'fadeOut',
		    autoplayTimeout:8000,
		    autoplayHoverPause:true,
				dots: false,
		});

		$('.owl-two').owlCarousel({
		    items:1,
		    loop:true,
		    margin:10,
		    autoplay:false,
				animateOut: 'fadeOut',
		    autoplayTimeout:2000,
		    autoplayHoverPause:true,
				dots: true,
				nav: true,
		});


		var prev = 0;
		var $window = $(window);
		var nav = $('.nav');
		var logoblock = $('.logo-block');
		var pricebox = $('.pricebox');


		if (logoblock.length >= 1) {
  		$(window).scroll(function() {
    	var header = $(document).scrollTop();
    	var headerHeight = $('.logo-block').height();
    if (header > headerHeight) {
      logoblock.addClass('popup');
      nav.addClass('fixed')
    } else {
      logoblock.removeClass('popup');
      nav.removeClass('fixed')
    }
  });
}



	});




})(jQuery, this);


