(function(window, document, $){
	var $header = $(header);
	var $navbar = $('.navbar');

	$(window).scroll(function(){
		var pos = $(document).scrollTop();

		if (pos >= 336) {
			$navbar.removeClass('navbar-transparent');
		} else {
			$navbar.addClass('navbar-transparent');
		}
	});

})(window, document, jQuery);