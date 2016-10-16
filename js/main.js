(function(window, document, $) {

	$(document).on('click', '.top-nav a', function(event) {
		event.preventDefault();
		/* Act on the event */

		var $that = $(this);
		$that.parents('.top-nav').find('.nav-li').removeClass('active');
		$that.parents('.middle-container').find('.contents-container').removeClass('active');

		var $link_active = $that.parents('.nav-li').addClass('active');
		var $hide_container = $that.parents('.middle-container')
									.find('.'+$that.attr('a_name'))
									.addClass('active');
	});

})(window, document, jQuery);