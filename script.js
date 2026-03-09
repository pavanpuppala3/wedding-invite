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

// Background Music Control
const bgMusic = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");
let isPlaying = false;

// Auto-play on page load
window.addEventListener('load', () => {
    bgMusic.play().then(() => {
        isPlaying = true;
        musicToggle.classList.add("playing");
        musicToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
    }).catch(() => {
        isPlaying = false;
        musicToggle.innerHTML = '<i class="fas fa-volume-mute"></i>';
    });
});

// Try autoplay on first user interaction
document.addEventListener('click', () => {
    if (!isPlaying) {
        bgMusic.play().then(() => {
            isPlaying = true;
            musicToggle.classList.add("playing");
            musicToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
        }).catch(() => {});
    }
}, { once: true });

musicToggle.addEventListener("click", () => {
    if (isPlaying) {
        bgMusic.pause();
        musicToggle.classList.remove("playing");
        musicToggle.innerHTML = '<i class="fas fa-volume-mute"></i>';
    } else {
        bgMusic.play();
        musicToggle.classList.add("playing");
        musicToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
    }
    isPlaying = !isPlaying;
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
