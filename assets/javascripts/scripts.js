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
		    autoplayTimeout:4000,
		    autoplayHoverPause:true,
				dots: false,
		});

		var prev = 0;
		var $window = $(window);
		var logolong = $('.logo-long');
		var logoblock = $('.logo-block');
		var pricebox = $('.pricebox');

		$window.on('scroll', function(){
  		var scrollTop = $window.scrollTop();
  		logolong.toggleClass('popdown', scrollTop > prev);
  		logoblock.toggleClass('popup', scrollTop > prev);
  		pricebox.addClass('priceslide', scrollTop > 850);
  		prev = scrollTop;
		});

	});




})(jQuery, this);


