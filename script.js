// Function to display a personalized motivational message
function showMessage() {
    let name = document.getElementById("nameInput").value;
    if (name) {
        document.getElementById("personalMessage").innerHTML = `🎀 ${name}, may Hello Kitty's good luck charm guide you to success on your exam! 💖`;
    } else {
        document.getElementById("personalMessage").innerHTML = "🎀 May Hello Kitty's good luck charm guide you to success on your exam! 💖";
    }
}

// Countdown function to track time until 7:00 AM tomorrow
function startCountdown() {
    let now = new Date();
    let examDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 7, 0, 0, 0); // Set to 7:00 AM tomorrow

    function updateCountdown() {
        let now = new Date();
        let diff = examDate - now;

        if (diff <= 0) {
            document.getElementById("countdown").innerHTML = "🎉 It's Exam Time! Hello Kitty believes in you!";
            pinkConfetti();
            return;
        }

        let hours = Math.floor(diff / (1000 * 60 * 60));
        let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = `${hours}h ${minutes}m ${seconds}s left`;
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();
}

// Confetti effect to celebrate exam time
function pinkConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff69b4', '#ff1493', '#ff80b3']
    });
}

// Function to display a random motivational quote
function showQuote() {
    const quotes = [
        "💖 Believe in yourself and sparkle like Hello Kitty!",
        "🎀 Success is sweeter with hard work!",
        "💗 Stay cute, stay confident, and ace that exam!",
        "🎀 Every answer is a step toward your dreams!",
        "💖 Keep smiling and keep learning!"
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomIndex];
}

// Toggle between light and dark themes
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

// Start the countdown and show a random quote on page load
startCountdown();
showQuote();