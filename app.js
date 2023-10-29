// ACCORDION
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");

  sections.forEach((section) => {
      const header = section.querySelector(".section-header");
      header.addEventListener("click", () => {
          section.classList.toggle("active");
      });
  });
});

//SMOOTH SCROLL ANCHOR
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// CHIP FILTERS
// JavaScript to handle chip selection and card filtering
const chips = document.querySelectorAll(".chip");
const projectCard = document.querySelectorAll(".project-card"); // Updated class name

chips.forEach((chip, index) => {
    chip.addEventListener("click", () => {
        // Deselect all chips
        chips.forEach(otherChip => {
            otherChip.classList.remove("selected");
            otherChip.querySelector(".check-icon").style.display = "none"; // Hide all checkmarks
        });

        // Select the clicked chip
        chip.classList.add("selected");

        // Show the checkmark for the selected chip
        chip.querySelector(".check-icon").style.display = "block";

        // Get the chip's ID to determine which cards to show
        const chipId = chip.id;

        // Show or hide cards based on the chip selected
        projectCard.forEach(card => { // Updated class name
            if (chipId === "chip1") {
                // Show all cards for Alpha
                card.style.display = "flex";
            } else if (chipId === "chip2") {
                // Show only Beta-related cards
                card.style.display = card.classList.contains("beta") ? "flex" : "none";
            } else if (chipId === "chip3") {
                // Show only Delta-related cards
                card.style.display = card.classList.contains("delta") ? "flex" : "none";
            }
        });
    });
});

// JavaScript to trigger a click on Alpha chip when the page loads
window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('chip1').click();
});



function myFunction() {
  var copyText = document.getElementById("myInput");

  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  navigator.clipboard.writeText(copyText.value).then(function() {
    // Show the snackbar when the copy operation is successful
    var snackbar = document.getElementById("snackbar");
    snackbar.className = "show";
    setTimeout(function() {
      snackbar.className = snackbar.className.replace("show", "");
    }, 3000); // Change 3000 to the number of milliseconds you want the snackbar to be visible
  });
}

// particles
particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": false,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 1.5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": false
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector('[data-scroll-container]'),
//   smooth: true,
//   getSpeed: true,
//   getDirection: true
// });

// locoScroll.on("scroll", ScrollTrigger.update);
// ScrollTrigger.scrollerProxy('[data-scroll-container]', {
// scrollTop(value) {
//   return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
// }, 
// getBoundingClientRect() {
// return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
// },
// pinType: document.querySelector('[data-scroll-container]').style.transform ? "transform" : "fixed"
// });

gsap.to(".first", {
  scrollTrigger: {
    trigger: ".first",
    // scroller: '[data-scroll-container]',
    start: "top bottom",
    end: "bottom top",
    scrub: true,
    // markers: true
  },
  x: 75,
  duration: 1
});

gsap.to(".second", {
  scrollTrigger: {
    trigger: ".first",
    // scroller: '[data-scroll-container]',
    start: "top bottom",
    end: "bottom top",
    scrub: true,
    // markers: true
  },
  x: -75,
  duration: 1
});

gsap.to(".last", {
  scrollTrigger: {
    trigger: ".first",
    // scroller: '[data-scroll-container]',
    start: "top bottom",
    end: "bottom top",
    scrub: true,
    // markers: true,
  },
  x: 75,
  duration: 1
});

// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
// ScrollTrigger.refresh(); 

// CAROUSELS
const carousel = document.querySelector('.carousel');
const container = document.querySelector('.carousel-container');

carousel.addEventListener('scroll', () => {
  const cardWidth = carousel.querySelector('.card').offsetWidth + 16; // 16px is the gap
  const containerWidth = container.offsetWidth;
  const scrollLeft = carousel.scrollLeft;
  const maxScroll = carousel.scrollWidth - containerWidth + 24; // 24px right padding

  if (scrollLeft >= maxScroll) {
    // Limit the scroll position to keep the last card within 24px from the right edge
    carousel.scrollLeft = maxScroll;
  }
});

