'use strict';

$(document).ready(function(){
$('.row .btn-detail').on('click', function(e) {
	e.preventDefault();
	// var $this = $(this);
	var $collapse = $(this).closest('.collapse-group').find('.collapse');
	$collapse.collapse('toggle');
});
})
