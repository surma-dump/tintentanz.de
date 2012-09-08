define(['jquery'], function($) {
	$('#impress h3').each(function(id, elem) {
		$(elem).click(function() {
			$(elem).toggleClass('active');
		})
	});
});
