(function(window, document, $){
	var documentSize = $(document).width();
	

	$(document).on('click', '.navicon', function(event) {
		event.preventDefault();
		$that = $(this);		
		$that.siblings('ul').slideToggle('fast');
	});

	// $(document).on('click', '.navbar>ul a', function(event) {
	// 	event.preventDefault();
	// 	/* Act on the event */
		
	// });
	
})(window, document, jQuery);