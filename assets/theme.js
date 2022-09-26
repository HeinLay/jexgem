import './theme-ee757cff.js';
//# sourceMappingURL=theme.js.map
/**
 * toggle
 */
 $(function(){
  $('.toggle').click(function(e) {
    e.preventDefault();
    $(this).toggleClass("active").next().slideToggle();
  });
});

$(function() {
	//checkbox acceptance

	$(".agree").on('click', function() {
	 if ($(this).is(':checked')) {
		 $(".contact__form_btn").prop('disabled', false);
		 $(".contact__form_btn").addClass('active');

	 } else {
		 $(".contact__form_btn").prop('disabled', true);
		 $(".contact__form_btn").removeClass('active');
	 }
	});
});


