'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {

	
	$("form #submitBtn").click(function(e){
		e.preventDefault;
		alert("Reminder sent!");
		window.history.back();
		return false;
	});
})