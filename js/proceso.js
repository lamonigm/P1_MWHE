console.log("hello world");

$(document).ready(function() {
      //OPACIDAD DEL MENU
  
      // $(window).scroll (function(){
      //   let scroll = $(this).scrollTop();
      //   let menu = $("#menu").height();
      //   let max_scroll = $(this).height() - menu;
        
      //   if (scroll <= max_scroll) {
      //       let opacity = scroll / max_scroll;
      //       $("#menu").css("background-color", "rgb(81, 158, 159, " + opacity + ")").css("box-shadow", "0 0 4px 2px rgba(0, 0, 0, 0.1)")
      //   }
      // });

      // $(window).on("scroll", function() {
      //   if ($(document).scrollTop() < 100) {
      //     $(".nav-link").css({
      //       textShadow: "0px 0px 5px var(--darkest__blue)" // Aplica el text-shadow
      //     });
      //   } else {
      //     $(".nav-link").css({
      //       textShadow: "none" // Elimina el text-shadow
      //     });
      //   }
      // });

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
              $("#menu").addClass("scrolled");         // Añade clase para cambiar colores en navbar
              $(".blur").addClass("blur-hidden");     // Añade clase para ocultar el blur
          } else {
              $("#menu").removeClass("scrolled");     // Quita clase para restaurar colores originales
              $(".blur").removeClass("blur-hidden");  // Quita clase para restaurar el blur
          }
      }
});

document.addEventListener("DOMContentLoaded", function() {
    AOS.init();
});

$(".facts-carousel").flickity({
  // options
  cellAlign: "center",
  contain: true,
  wrapAround: true,
  draggable: ">1",
  autoPlay: true,
});