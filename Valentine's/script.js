// Function to show a specific screen
function showScreen(screenId) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.add('hidden');
    });
    // Show the selected screen
    document.getElementById(screenId).classList.remove('hidden');
}

// Add interactivity to the surprise button
const surpriseBtn = document.getElementById('surpriseBtn');
const surpriseText = document.getElementById('surpriseText');

surpriseBtn.addEventListener('click', () => {
    surpriseText.classList.remove('hidden');
    surpriseBtn.textContent = "You're the best! 💖";
});

const audio = document.querySelector('audio');
const muteBtn = document.getElementById('muteBtn');

function toggleMute() {
  audio.muted = !audio.muted;
  muteBtn.textContent = audio.muted ? "🔊 Unmute" : "🔇 Mute";
}
