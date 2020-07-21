$(window).on("load", function() {
	// Isotope JS
	var $grid = $(".grid").isotope({
	});
	$('.gallery-listing').on('click', 'li', function() {
		$(this).addClass('active').siblings().removeClass('active');
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	});
});
$(document).ready(function() {
	// FullPage JS
	$('#fullpage').fullpage({
		autoScrolling: true,
		scrollHorizontally: false,
		navigation: true,
		navigationTooltips: ['Home', 'About Us', 'Resume', 'Services', 'Gallery', 'My Clients', 'Latest News', 'Get in Touch', 'Footer'],
		scrollingSpeed: 2000,
		scrollOverflow: true,
		anchors:['Home', 'AboutUs', 'Resume', 'Services', 'Gallery', 'MyClients', 'LatestNews', 'GetInTouch', 'Footer'],
		responsiveWidth: 1200,
		responsiveHeight: 400
	});
	// Testimonial Slider JS
	$("#testimonial-slider").owlCarousel({
    items:3,
    itemsDesktop:[1000,2],
    itemsDesktopSmall:[979,2],
    itemsTablet:[768,2],
    itemsMobile:[550,1],
    pagination: true,
    autoPlay:false
  });
});
// When we refresh, page goes to the top
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
// Remove URL when we refresh the page JS
history.replaceState(null, null, ' ');
