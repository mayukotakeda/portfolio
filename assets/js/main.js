
//animate
$('.animate-in').waypoint({
    handler: function(direction) {
        if (direction === 'down') {
            $(this.element).addClass('animate__fadeIn');
            this.destroy();
        }
    },
    offset: `60%`,
});
$('.animate-up').waypoint({
    handler: function(direction) {
        if (direction === 'down') {
            $(this.element).addClass('animate__fadeInUp');
            this.destroy();
        }
    },
    offset: `60%`,
});

$('.animate-r').waypoint({
    handler: function(direction) {
      if (direction === 'down') {
        $(this.element).addClass('animate__fadeInRight');
        this.destroy();
      }
    },
    offset: `60%`,
  });

$('.animate-l').waypoint({
    handler: function(direction) {
        if (direction === 'down') {
            $(this.element).addClass('animate__fadeInLeft');
            this.destroy();
        }
    },
    offset: `60%`,
});


$('.hash-bg').waypoint({
    handler: function(direction) {
        if (direction === 'down') {
            $(this.element).addClass('animate__fadeIn');
            this.destroy();
        }
    },
  offset:'100%',
});

$('.menu-btn').on("click",function(){
    $("nav").toggleClass("open")
});

$(function (){
    var top = $(".to-top");
    top.hide();
    $(window).scroll(function (){
        if ($(this).scrollTop() > 300) {
            top.fadeIn();
        } else {
            top.fadeOut();
        }
    });
});