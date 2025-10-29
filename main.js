const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
    document.body.classList.toggle("light");
});

// open navbar on click bars
let navbar = document.querySelector('header nav');
let menuBtn = document.querySelector('#toggle-menu');
document.querySelector('#toggle-menu').onclick = () => {
    navbar.classList.toggle('active');
    menuBtn.classList.toggle('fa-times');
}

// Close navbar when user scrolls
window.onscroll = () => {
    navbar.classList.remove('active');
    menuBtn.classList.remove('fa-times');
}

// Close navbar when clicking outside
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && !menuBtn.contains(e.target)) {
        navbar.classList.remove('active');
        menuBtn.classList.remove('fa-times');
    }
});

// Navbar click dynamic Underline 
let navLinks = document.querySelectorAll('.main-menu a');
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', function () {
    // Remove active class from all links
    for (let j = 0; j < navLinks.length; j++) {
      navLinks[j].classList.remove('active');
    }
    // Add active class to the clicked link
    this.classList.add('active');
  });
};

// Download CV change Text
let cvText = document.querySelector(".pf-btn span");
function updateSpanText() {
  if (window.innerWidth < 992) {
    cvText.textContent = "CV";
  } else {
    cvText.textContent = "Download CV";
  }
}
// Initial check
updateSpanText();
// Update on resize
window.addEventListener("resize", updateSpanText);


// Projects Slider
$('.project_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                infinite: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 568,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

// Typed.js for typing effect
var typed = new Typed('.text2', {
    strings: ['UI Developer', 'Frontend Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
});

// Image hover effect
let techbar = document.querySelector('.tech-img');
let techimg = document.querySelector('.tech-bar img');
let originalSrc = "assets/jquery.png";
let hoverSrc = "assets/jquery-hover.png";

function toggleImage(isHover) {
    techimg.src = isHover ? hoverSrc : originalSrc;
}

// Events
techimg.addEventListener('mouseover', () => toggleImage(true));
techimg.addEventListener('mouseout', () => toggleImage(false));

techbar.addEventListener('mouseover', () => toggleImage(true));
techbar.addEventListener('mouseout', () => toggleImage(false));


// scroll-to-top button / Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    let scrollBtn = document.getElementById("scrollToTopBtn");

    scrollBtn.addEventListener("click", function () {
        // Smooth scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});


// Contact Form
const form = document.getElementById("contactForm");
const popup = document.getElementById("thankYouPopup");
const closeBtn = document.getElementById("closePopup");

form.addEventListener("submit", async (e) => {
    e.preventDefault(); 
    const formData = new FormData(form);

    // Send data to Formspree using fetch
    const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
        form.reset(); // clear the form
        popup.style.display = "block"; // show popup
    } else {
        alert("❌ Something went wrong. Please try again.");
    }
});

// Close popup
closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});



// Certificate Section
const cards = document.querySelectorAll(".card");
const dots = document.querySelectorAll(".dot");
let currentIndex = 0;
let isAnimating = false;

function updateCarousel(newIndex) {
	if (isAnimating) return;
	isAnimating = true;

	currentIndex = (newIndex + cards.length) % cards.length;

	cards.forEach((card, i) => {
		const offset = (i - currentIndex + cards.length) % cards.length;

		card.classList.remove(
			"center",
			"left-1",
			"left-2",
			"right-1",
			"right-2",
			"hidden"
		);

		if (offset === 0) {
			card.classList.add("center");
		} else if (offset === 1) {
			card.classList.add("right-1");
		} else if (offset === 2) {
			card.classList.add("right-2");
		} else if (offset === cards.length - 1) {
			card.classList.add("left-1");
		} else if (offset === cards.length - 2) {
			card.classList.add("left-2");
		} else {
			card.classList.add("hidden");
		}
	});

	dots.forEach((dot, i) => {
		dot.classList.toggle("active", i === currentIndex);
	});

	setTimeout(() => {
		isAnimating = false;
	}, 800);
}

dots.forEach((dot, i) => {
	dot.addEventListener("click", () => {
		updateCarousel(i);
	});
});

// cards.forEach((card, i) => {
// 	card.addEventListener("click", () => {
// 		updateCarousel(i);
// 	});
// });

document.addEventListener("keydown", (e) => {
	if (e.key === "ArrowLeft") {
		updateCarousel(currentIndex - 1);
	} else if (e.key === "ArrowRight") {
		updateCarousel(currentIndex + 1);
	}
});

updateCarousel(0);

const autoplayInterval = 4000;
setInterval(() => {
	updateCarousel(currentIndex + 1);
}, autoplayInterval);


// Show Image Popup Image
const popupModal = document.getElementById("popupModal");
const popupImage = document.getElementById("popupImage");
const closeImageBtn = document.getElementById("closeBtn");

cards.forEach((card, i) => {
	card.addEventListener("click", () => {
		// If it's already the center card, open modal
		if (card.classList.contains("center")) {
			const img = card.querySelector("img");
			if (img) {
				popupImage.src = img.src;
				popupModal.style.display = "flex";
			}
		} else {
			// Otherwise, make it the center card
			updateCarousel(i);
		}
	});
});

// Close popup modal
closeImageBtn.addEventListener("click", () => {
	popupModal.style.display = "none";
});
// Optional: Click outside to close
// popupModal.addEventListener("click", (e) => {
// 	if (e.target === popupModal) {
// 		popupModal.style.display = "none";
// 	}
// });







// Disable Right Click
document.addEventListener("contextmenu", function(e){
    e.preventDefault();
});

// // Disabled Keyboard Shortcut Keys 
// document.addEventListener("keydown", function(e) {
//     // F12
//     if (e.key === "F12") {
//         e.preventDefault();
//     }

//     // Ctrl+Shift+I or Ctrl+Shift+J
//     if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === "I" || e.key === "J")) {
//         e.preventDefault();
//     }

//     // Ctrl+U (View Source)
//     if ((e.ctrlKey || e.metaKey) && e.key === "u") {
//         e.preventDefault();
//     }
// });

  