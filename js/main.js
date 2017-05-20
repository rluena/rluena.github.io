(function (window, document, $) {
	var $header = $(header);
	var $navbar = $('.navbar');
	var $collapse = $('.navbar-collapse');


	$(window).scroll(function () {
		var pos = $(document).scrollTop();

		if (pos >= 336) {
			$navbar.removeClass('navbar-transparent');
		} else {
			$navbar.addClass('navbar-transparent');
			// $collapse.css('background', '#33CCCC');
		}
	});

})(window, document, jQuery);