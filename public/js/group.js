'use strict';

$(document).ready(function(){
	// function to collapse the details box
	var collapse = function(e) {
		e.preventDefault();
		var $collapse = $(this).closest('.collapse-group').find('.collapse');
		$collapse.collapse('toggle');
	};

	// delete function to hide tasks 
	var deleteFunc = function(e){
		var container = $(this).closest(".notification-box");
		var name = container.find("h4").html();

		container.fadeOut(500, function(){
			container.css({"visibility":"hidden"}).slideUp();
		});
		console.log(name);
		//post the task name to the controller
		$.post("/group1/", {'taskName': name});
	};

	//collapse details box
	$('.row .btn-detail').on('click', collapse);

	//hide completed tasks
	$('label').on('click', deleteFunc);	

})
