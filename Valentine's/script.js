// Function to show a specific screen
function showScreen(screenId) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.add('hidden');
    });
    // Show the selected screen
    document.getElementById(screenId).classList.remove('hidden');
}

// Surprise Button Functionality
const surpriseBtn = document.getElementById('surpriseBtn');
const surpriseText = document.getElementById('surpriseText');

surpriseBtn.addEventListener('click', () => {
    // Show the surprise text
    surpriseText.classList.remove('hidden');

    // Change the button text to your custom message
    surpriseBtn.innerHTML = `
      Darta hoon toh bas ab tumko khone mein,<br>
      Ab toh dil bhi dhadakta tumhara hone mein,<br>
      Raato ka ab anjaam sunhera hain,<br>
      Mere sapnon mein ab tumhara pehra hain...
    `;
    surpriseBtn.disabled = true; // Disable the button after clicking

    // Add a fun animation to the surprise text
    surpriseText.style.animation = "fadeIn 2s ease-in-out";

    // Trigger confetti effect
    confetti({
        particleCount: 100, // Number of confetti particles
        spread: 70, // How far the confetti spreads
        origin: { y: 0.6 } // Where the confetti starts (0.6 = slightly above the bottom)
    });
});

// Add a fade-in animation for the surprise text
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;
document.head.appendChild(style);