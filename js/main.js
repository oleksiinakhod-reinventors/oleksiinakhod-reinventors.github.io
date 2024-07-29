$(document).ready(function() {
	//Show Hidden Content
	$('.hidden_content_btn').click(function(event) {
	    event.preventDefault();
	    $(this).parent().addClass('show');
  	});

});