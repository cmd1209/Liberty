(function ($, root, undefined) {

	$(function () {
		'use strict';

		// DOM ready, take it away

		$('.owl-one').owlCarousel({
		    items:1,
		    loop:true,
		    margin:0,
		    autoplay:true,
				animateOut: 'fadeOut',
		    autoplayTimeout:8000,
		    autoplayHoverPause:true,
				dots: false,
		});

		$('.owl-two').owlCarousel({
		    items:1,
		    loop:true,
		    margin:0,
		    autoplay:true,
		    autoplayTimeout:2000,
		    autoplayHoverPause:true,
				dots: true,
				nav: false,
		});

		$('#menu-icon').click(function(){
		$(this).toggleClass('open');
		$('.mobile-cont').toggleClass('hidden visible');
		});


$(window).scroll(function(){
	var header = $('.header');
  var nav = $('.nav');
  scroll = $(window).scrollTop();

  if (scroll >= 141) 
  	nav.addClass('fixed'),
  	header.addClass('header-add');
  else 
  	nav.removeClass('fixed'),
  	header.removeClass('header-add');
});


	});




})(jQuery, this);


