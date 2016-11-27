'use strict';

$(document).ready(function (){
	// delete function to hide groups
	var deleteGroups = function(e){
		e.preventDefault();
		var container = $(this).closest(".group-container");
		var name = container.find("#group-name").html();

		container.fadeOut(500, function(){
			container.css({"visibility":"hidden"}).slideUp();
		});
		
		//post the task name to the controller
		$.post("/deleteGroups/", {'groupName': name});
	};


	$('.dropdown-menu a').on('click', deleteGroups);
})