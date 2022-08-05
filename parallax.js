(function ($) {

	'use strict';
    
    let scrollPosi = 20;

	$(window).scroll(function () {
		scrollPosi = $(document).scrollTop();
        
        $('body').stop(true, true).animate({
			'background-position-y': -scrollPosi / 10 + 'px'
		}, 100);
	});

})(jQuery);