(function() {

	$('#name').hover(function() {
		$('header').toggleClass('active');
	});

  $('footer a').hover(function() {
    $(this).toggleClass('active');
  });

}());
