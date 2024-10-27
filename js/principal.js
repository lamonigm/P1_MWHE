console.log("hello world");

$(document).ready(function() {
      //OPACIDAD DEL MENU
  
      $(window).scroll (function(){
        let scroll = $(this).scrollTop();
        let menu = $("#menu").height();
        let max_scroll = $(this).height() - menu;
        
        if (scroll <= max_scroll) {
            let opacity = scroll / max_scroll;
            $("#menu").css("background-color", "rgb(250, 102, 116, " + opacity + ")").css("box-shadow", "0 0 4px 2px rgba(0, 0, 0, 0.1)")
        }
      });

      $(window).on("scroll", function() {
        scrollFunction();
      });
      
      function scrollFunction() {
        if ($(document).scrollTop() > 200) {
          $(".nav-link").css({
            color: "var(--white)",
            transition: "500ms all"
          });
          $(".navbar-brand > svg").css({
            fill: "var(--white)",
            transition: "500ms all"
          })
        } else {
          $(".nav-link").css({
            color: "var(--dark__pink)",
            transition: "500ms all"
          });
          $(".navbar-brand > svg").css({
            fill: "var(--dark__pink)",
            transition: "500ms all"
          })
        }
      }
  });


  document.addEventListener("DOMContentLoaded", function() {
    AOS.init();
});