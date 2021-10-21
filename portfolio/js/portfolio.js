'use strict';



$(function() {
	$('.btn-gNav').on("click", function(){
		$(this).toggleClass('open');
		$('#gNav').toggleClass('open');
	});
});

// $('.btn-gNav').on('click', function(){
//   $('.btn-gNav').toggleClass('open');
// });

