// Countdown Timer
const countdownDate = new Date("Apr 3, 2026 20:45:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `
        <div class="countdown-item">
            <span class="countdown-value">${days}</span>
            <span class="countdown-label">Days</span>
        </div>
        <div class="countdown-item">
            <span class="countdown-value">${hours}</span>
            <span class="countdown-label">Hours</span>
        </div>
        <div class="countdown-item">
            <span class="countdown-value">${minutes}</span>
            <span class="countdown-label">Minutes</span>
        </div>
        <div class="countdown-item">
            <span class="countdown-value">${seconds}</span>
            <span class="countdown-label">Seconds</span>
        </div>
    `;

    if (distance < 0) {
        document.getElementById("countdown").innerHTML = "<h3 style='color: #d4af37; font-size: 2rem;'>The Wedding Day is Here! 🎉</h3>";
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Hero Slider with fade effect and auto-play
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
let slideInterval;

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

function startSlideshow() {
    slideInterval = setInterval(nextSlide, 5000);
}

function stopSlideshow() {
    clearInterval(slideInterval);
}

// Start slideshow automatically
startSlideshow();

// Pause slideshow when page is hidden, resume when visible
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        stopSlideshow();
    } else {
        startSlideshow();
    }
});

// Ensure slideshow continues on mobile
window.addEventListener('focus', startSlideshow);
window.addEventListener('blur', stopSlideshow);

// Background Music Control with smooth transitions
const bgMusic = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");
let isPlaying = false;
let userInteracted = false;

bgMusic.volume = 0.4;

// Try to auto-start music
function attemptAutoplay() {
    bgMusic.play().then(() => {
        isPlaying = true;
        musicToggle.classList.add("playing");
        musicToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
    }).catch(() => {
        // Autoplay blocked, wait for user interaction
        isPlaying = false;
        musicToggle.classList.remove("playing");
        musicToggle.innerHTML = '<i class="fas fa-volume-mute"></i>';
    });
}

attemptAutoplay();

// Start music on first user interaction
function startMusicOnInteraction() {
    if (!userInteracted) {
        userInteracted = true;
        if (!isPlaying) {
            bgMusic.play().then(() => {
                isPlaying = true;
                musicToggle.classList.add("playing");
                musicToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
            }).catch(() => {});
        }
    }
}

// Listen for any user interaction
document.body.addEventListener('click', startMusicOnInteraction, { once: true });
document.body.addEventListener('touchstart', startMusicOnInteraction, { once: true });
document.body.addEventListener('scroll', startMusicOnInteraction, { once: true });

musicToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    userInteracted = true;
    
    if (isPlaying) {
        bgMusic.pause();
        musicToggle.classList.remove("playing");
        musicToggle.innerHTML = '<i class="fas fa-volume-mute"></i>';
        isPlaying = false;
    } else {
        bgMusic.play().then(() => {
            musicToggle.classList.add("playing");
            musicToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
            isPlaying = true;
        }).catch(() => {});
    }
});

// Smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Add entrance animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.card, .countdown-section');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
});

