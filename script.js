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

startCountdown();