// Set the target date (20 February 2025)
const targetDate = new Date('2025-02-20T00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    // Calculate days, hours, minutes, seconds
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Update the DOM
    document.getElementById('countdown-days').textContent = days.toString().padStart(2, '0');
    document.getElementById('countdown-hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('countdown-minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('countdown-seconds').textContent = seconds.toString().padStart(2, '0');

    // If countdown is over
    if (difference < 0) {
        clearInterval(countdownInterval);
        document.querySelector('.countdown-timer').innerHTML = '<div class="countdown-headline">Fuar Başladı!</div>';
    }
}

// Update countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Initial call
updateCountdown();