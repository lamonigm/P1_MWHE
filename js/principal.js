console.log("hello world");

$(document).ready(function() {
      //OPACIDAD DEL MENU
  
      $(window).scroll (function(){
        let scroll = $(this).scrollTop();
        let menu = $("#menu").height();
        let max_scroll = $(this).height() - menu;
        
        if (scroll <= max_scroll) {
            let opacity = scroll / max_scroll;
            $("#menu").css("background-color", "rgb(252, 182, 188, " + opacity + ")").css("box-shadow", "0 0 4px 2px rgba(0, 0, 0, 0.1)")
        }
      });
  });