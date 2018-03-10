$(function() {
  $('.content-wrapper').waypoint(
    function() {
        $("nav li").siblings().removeClass('active');
        $("#aboutlink").addClass('active');
        offset: -100;
    }
  )
  $('#services-wrapper').waypoint(
    function() {
        $("nav li").siblings().removeClass('active');
        $("#serviceslink").addClass('active');
    }
  )
  $('#portfolio-wrapper').waypoint(
    function() {
        $("nav li").siblings().removeClass('active');
        $("#portfoliolink").addClass('active');
    }
  )
  $('#skills-wrapper').waypoint(
    function() {
        $("nav li").siblings().removeClass('active');
        $("#skillslink").addClass('active');
    }
  )
  $('#contact-wrapper').waypoint(
    function() {
        $("nav li").siblings().removeClass('active');
        $("#contactlink").addClass('active');
    }
  )
});
