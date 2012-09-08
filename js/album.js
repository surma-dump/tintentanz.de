define(['jquery'], function($) {
	var $pages = $('#album img');
	var num_pages = $pages.length;
	$($pages.get(0)).toggleClass('active');
	$pages.each(function(id) {
		$($pages.get(id)).click(function() {
			$($pages.get(id)).toggleClass('active');
			$($pages.get((id+1)%num_pages)).toggleClass('active');
		});
	});
});
