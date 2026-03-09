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
        document.getElementById("countdown").innerHTML = "<h3>The Wedding Day is Here! 🎉</h3>";
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Hero Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

setInterval(nextSlide, 4000);

// Background Music Control
const bgMusic = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");
let isPlaying = false;

bgMusic.volume = 0.5;

// Auto-start music
const startMusic = () => {
    if (!isPlaying) {
        bgMusic.play().then(() => {
            isPlaying = true;
            musicToggle.classList.add("playing");
            musicToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
        }).catch(() => {});
    }
};

// Try autoplay immediately
startMusic();

// Retry on first interaction if failed
document.body.addEventListener('click', startMusic, { once: true });
document.body.addEventListener('touchstart', startMusic, { once: true });

musicToggle.addEventListener("click", (e) => {
    e.stopPropagation();
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

