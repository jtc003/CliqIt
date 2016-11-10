'use strict';

$(document).ready(function(){
	var dismiss = function(e){
		e.preventDefault;
		var container = $(this).closest(".notification-box");

		container.fadeOut(500, function(){
			container.css({"visibility":"hidden"}).slideUp();
		});
	};

	$

	$(".right a").on('click', dismiss);

})