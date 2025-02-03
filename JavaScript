/* script.js */
document.getElementById('start-puzzle').addEventListener('click', function() {
    document.getElementById('puzzle-container').classList.remove('hidden');
    setTimeout(() => {
        document.getElementById('card-container').classList.remove('hidden');
        document.getElementById('bg-music').play();
        confettiEffect();
    }, 5000);
});

function confettiEffect() {
    const confettiSettings = { target: 'puzzle-container' };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
}
