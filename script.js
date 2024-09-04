document.addEventListener('DOMContentLoaded', () => {
    const toggleMenu = document.querySelector('.toggle-menu');
    const sidebarMenu = document.getElementById('sidebar-menu');
    const closeBtn = document.getElementById('close-btn');

    toggleMenu.addEventListener('click', () => {
        sidebarMenu.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        sidebarMenu.style.display = 'none';
    });
});

// JavaScript to toggle heart icon
document.addEventListener("DOMContentLoaded", function() {
    const heartIcons = document.querySelectorAll(".heart-icon");

    heartIcons.forEach(heartIcon => {
        heartIcon.addEventListener("click", function() {
            // Toggle the heart icon between filled and unfilled
            if (heartIcon.textContent === "favorite_border") {
                heartIcon.textContent = "favorite"; // Filled heart
                heartIcon.style.color = "red"; // Change color to red
            } else {
                heartIcon.textContent = "favorite_border"; // Unfilled heart
                heartIcon.style.color = "gray"; // Change color to gray
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});

document.addEventListener('DOMContentLoaded', function () {
    const togglePassword = document.querySelector('.toggle-password');
    const passwordInput = document.getElementById('password');
    const icon = togglePassword.querySelector('.material-icons');

    togglePassword.addEventListener('click', function () {
        const isPasswordHidden = passwordInput.getAttribute('type') === 'password';
        passwordInput.setAttribute('type', isPasswordHidden ? 'text' : 'password');

        icon.textContent = isPasswordHidden ? 'visibility' : 'visibility_off';
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.login-page-carousel-image');
    const controls = document.querySelectorAll('.login-page-carousel-controls button');
    let currentSlide = 1;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i + 1 === index) ? 'block' : 'none';
            controls[i].classList.toggle('active', i + 1 === index);
        });
        currentSlide = index;
    }

    function nextSlide() {
        showSlide(currentSlide < slides.length ? currentSlide + 1 : 1);
    }

    function prevSlide() {
        showSlide(currentSlide > 1 ? currentSlide - 1 : slides.length);
    }

    showSlide(currentSlide);
    setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
});
