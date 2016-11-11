'use strict';

$(document).ready(function(){
	var dismiss = function(e){
		e.preventDefault;
		var container = $(this).closest(".notification-box");
		var name = container.find("h4").html();

		//fade out the notification box
		container.fadeOut(500, function(){
			container.css({"visibility":"hidden"}).slideUp();
		});

		//post the task name to the controller to edit data
		$.post("/notifications/", {'taskName': name});
	};

	//dismiss notifications
	$(".notification-box #remind").on('click', dismiss);

})