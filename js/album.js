define(['jquery'], function($) {
	var $pages = $('#album img');
	var num_pages = $pages.length-1;
	$($pages.get(num_pages)).toggleClass('active');
	$pages.each(function(id) {
		$($pages.get(id)).click(function() {
			$($pages.get(id)).toggleClass('active');
			$($pages.get((id+1)%num_pages)).toggleClass('active');
		});
	});
});
