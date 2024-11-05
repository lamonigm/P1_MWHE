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
              $("#menu").addClass("scrolled");         // Añade clase para cambiar colores en navbar
              $(".blur").addClass("blur-hidden");     // Añade clase para ocultar el blur
          } else {
              $("#menu").removeClass("scrolled");     // Quita clase para restaurar colores originales
              $(".blur").removeClass("blur-hidden");  // Quita clase para restaurar el blur
          }
      }

      // $(window).on("scroll", function() {
      //   scrollFunction();
      // });
      
      // function scrollFunction() {
      //   if ($(document).scrollTop() > 200) {
      //     $(".nav-link").css({
      //       color: "var(--white)",
      //       transition: "500ms all"
      //     });
      //     $(".navbar-brand > svg").css({
      //       fill: "var(--white)",
      //       transition: "500ms all"
      //     })
      //     $(".blur").css({
      //       "position": "absolute",
      //       "top": "0",
      //       "left": "0",
      //       "width": "100%",
      //       "height": "100%",
      //       "background-color": "#fbe9cb45",
      //       "z-index": "-1",
      //       "backdrop-filter": "blur(5px)",
      //       "-webkit-backdrop-filter": "blur(5px)",
      //       "opacity": "0", 
      //       "transition": "opacity 500ms",
      //     });
          
      //   } else {
      //     $(".nav-link").css({
      //       color: "var(--dark__pink)",
      //       transition: "500ms all"
      //     });
      //     $(".navbar-brand > svg").css({
      //       fill: "var(--dark__pink)",
      //       transition: "500ms all"
      //     })
      //     $(".blur").css({
      //       "position": "absolute",
      //       "top": "0",
      //       "left": "0",
      //       "width": "100%",
      //       "height": "100%",
      //       "background-color": "#fbe9cb45",
      //       "z-index": "-1",
      //       "backdrop-filter": "blur(5px)",
      //       "-webkit-backdrop-filter": "blur(5px)",
      //       "opacity": "1",
      //     })
      //   }
      // }
  });


  document.addEventListener("DOMContentLoaded", function() {
    AOS.init();
});




// GALERÍA DE IMÁGENES

// --- Create LightBox
const galleryGrid = document.querySelector(".gallery-grid");
const links = galleryGrid.querySelectorAll("a");
const imgs = galleryGrid.querySelectorAll("img");
const lightboxModal = document.getElementById("lightbox-modal");
const bsModal = new bootstrap.Modal(lightboxModal);
const modalBody = lightboxModal.querySelector(".lightbox-content");

function createCaption(caption) {
    return `<div class="carousel-caption d-none d-md-block">
    <h4 class="m-0">${caption}</h4>
  </div>`;
}

function createIndicators(img) {
    let markup = "",
        i,
        len;

    const countSlides = links.length;
    const parentCol = img.closest(".col");
    const curIndex = [...parentCol.parentElement.children].indexOf(parentCol);

    for (i = 0, len = countSlides; i < len; i++) {
        markup += `
    <button type="button" data-bs-target="#lightboxCarousel"
      data-bs-slide-to="${i}"
      ${i === curIndex ? 'class="active" aria-current="true"' : ""}
      aria-label="Slide ${i + 1}">
    </button>`;
    }

    return markup;
}

function createSlides(img) {
    let markup = "";
    const currentImgSrc = img.closest(".gallery-item").getAttribute("href");

    for (const img of imgs) {
        const imgSrc = img.closest(".gallery-item").getAttribute("href");
        const imgAlt = img.getAttribute("alt");

        markup += `
    <div class="carousel-item${currentImgSrc === imgSrc ? " active" : ""}">
      <img class="d-block img-fluid w-100" src=${imgSrc} alt="${imgAlt}">
      ${imgAlt ? createCaption(imgAlt) : ""}
    </div>`;
    }

    return markup;
}

function createCarousel(img) {
    const markup = `
  <!-- Lightbox Carousel -->
  <div id="lightboxCarousel" class="carousel slide carousel-fade" data-bs-ride="true">
    <!-- Indicators/dots -->
    <div class="carousel-indicators">
      ${createIndicators(img)}
    </div>
    <!-- Wrapper for Slides -->
    <div class="carousel-inner justify-content-center mx-auto">
      ${createSlides(img)}
    </div>
    <!-- Controls/icons -->
    <button class="carousel-control-prev" type="button" data-bs-target="#lightboxCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#lightboxCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  `;

    modalBody.innerHTML = markup;
}

for (const link of links) {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const currentImg = link.querySelector("img");
        const lightboxCarousel = document.getElementById("lightboxCarousel");

        if (lightboxCarousel) {
            const parentCol = link.closest(".col");
            const index = [...parentCol.parentElement.children].indexOf(parentCol);

            const bsCarousel = new bootstrap.Carousel(lightboxCarousel);
            bsCarousel.to(index);
        } else {
            createCarousel(currentImg);
        }

        bsModal.show();
    });
}

// --- Support Fullscreen
const fsEnlarge = document.querySelector(".btn-fullscreen-enlarge");
const fsExit = document.querySelector(".btn-fullscreen-exit");

function enterFS() {
    lightboxModal
        .requestFullscreen()
        .then({})
        .catch((err) => {
            alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
        });
    fsEnlarge.classList.toggle("d-none");
    fsExit.classList.toggle("d-none");
}

function exitFS() {
    document.exitFullscreen();
    fsExit.classList.toggle("d-none");
    fsEnlarge.classList.toggle("d-none");
}

fsEnlarge.addEventListener("click", (e) => {
    e.preventDefault();
    enterFS();
});

fsExit.addEventListener("click", (e) => {
    e.preventDefault();
    exitFS();
});


// COUNTDOWN

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

/** @param {number} future */

const timestampDiff = future =>
/** @param {number} past */
past => {
    const diff = future - past;

    const days = Math.floor(diff / DAY);
    const hours = Math.floor((diff % DAY) / HOUR);
    const minutes = Math.floor((diff % HOUR) / MINUTE);
    const seconds = Math.floor((diff % MINUTE) / SECOND);

    return [days, hours, minutes, seconds];
};

/** @param {string} date */

const countDown = date =>
/** @param {HTMLElement} target */
target => {
    const diff = timestampDiff(Date.parse(date));

    const intervalId = setInterval(() => {
        const [days, hours, minutes, seconds] = diff(Date.now());

        // Verifica si el tiempo es negativo, lo cual indica que la fecha ya pasó
        if (days < 0 || hours < 0 || minutes < 0 || seconds < 0) {
            target.innerHTML = "<div>Countdown finished!</div>";
            clearInterval(intervalId);
            return;
        }

        target.innerHTML = `
          <div>${days}<span>Days</span></div>
          <div>${hours}<span>Hours</span></div>
          <div>${minutes}<span>Minutes</span></div>
          <div>${seconds}<span>Seconds</span></div>
        `;
    }, SECOND);
};

const interval = countDown("November 26, 2024 06:55:00")(
  document.querySelector("#countdown-container")
);




