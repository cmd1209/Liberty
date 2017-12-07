(function ($, root, undefined) {

	$(function () {
		'use strict';

		// DOM ready, take it away

		var owl = $('.owl-carousel');
		owl.owlCarousel({
		    items:1,
		    loop:true,
		    margin:10,
		    autoplay:true,
				animateOut: 'fadeOut',
		    autoplayTimeout:8000,
		    autoplayHoverPause:true,
				dots: false,
		});

		var prev = 0;
		var $window = $(window);
		var logolong = $('.logo-long');
		var logoblock = $('.logo-block');
		var pricebox = $('.pricebox');


		if (logoblock.length >= 1) {
  		$(window).scroll(function() {
    	var header = $(document).scrollTop();
    	var headerHeight = $('.logo-block').height();
    if (header > headerHeight) {
      logoblock.addClass('popup');
      logolong.addClass('popdown')
    } else {
      logoblock.removeClass('popup');
      logolong.removeClass('popdown')
    }
  });
}



	});




})(jQuery, this);


