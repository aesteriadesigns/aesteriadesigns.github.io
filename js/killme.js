
jQuery(function() {
    var sections = jQuery('.wrapper-content');
    var navigation_links = jQuery('nav a');

  sections.waypoint({
    handler: function(direction) {
      var active_section;
      active_section = jQuery(this);

      if (direction === "up") active_section = active_section.previousSibling();
      var active_link = jQuery('nav a[href="#' + active_section.attr("id") + '"]');
      navigation_links.closest('li').removeClass("selected");
      active_link.closest('li').addClass("selected");

    },
    offset: '20px'
  });

   jQuery('nav a[href^="#"]').on('click', function(event) {
	event.preventDefault();
    jQuery.scrollTo(
      jQuery(this).attr("href"),
      {
        duration: 200,
        //offset: { 'left':0, 'top':-0.15*jQuery(window).height() }
		offset: { 'top':-20 }
      }
    );

  });
});
