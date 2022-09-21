(function ($) {

	'use strict';

	let scrollPosi = 10;

	$(window).scroll(function () {
		scrollPosi = $(document).scrollTop();

		$('body').stop(true, true).animate({
			'background-position': -scrollPosi * 0.1 + 'px'
		}, 100);
	});

})(jQuery);