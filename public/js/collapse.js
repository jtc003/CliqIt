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
			
		container.fadeOut(500, function(){
			container.css({"visibility":"hidden"}).slideUp();
		});
	};

	//collapse details box
	$('.row .btn-detail').on('click', collapse);

	//hide completed tasks
	$('label').on('click', deleteFunc);	

})
