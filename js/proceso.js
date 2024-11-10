console.log("hello world");

$(document).ready(function() {
      $(window).scroll (function(){
        let scroll = $(this).scrollTop();
        let menu = $("#menu").height();
        let max_scroll = $(this).height() - menu;
        
        if (scroll <= max_scroll) {
            let opacity = scroll / max_scroll;
            $("#menu").css("background-color", "rgb(81, 158, 159, " + opacity + ")").css("box-shadow", "0 0 4px 2px rgba(0, 0, 0, 0.1)")
        }
      });

      $(window).on("scroll", function() {
        scrollFunction();
      });
      
      function scrollFunction() {
          if ($(document).scrollTop() > 200) {
              $("#menu").addClass("scrolled");         
              $(".blur").addClass("blur-hidden");     
              $("#menu").removeClass("scrolled");     
              $(".blur").removeClass("blur-hidden");  
          }
      }
});

document.addEventListener("DOMContentLoaded", function() {
    AOS.init();
});

$(".facts-carousel").flickity({
  cellAlign: "center",
  contain: true,
  wrapAround: true,
  draggable: ">1",
  autoPlay: true,
});