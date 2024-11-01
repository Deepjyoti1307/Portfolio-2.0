// Access the required DOM elements
const body = document.body; // Body for theme manipulation
const backButton = document.querySelectorAll('.back-button'); // Back to Home button (if present)



// 3. Add Event Listeners for "Back to Home" Buttons
backButton.forEach(button => {
  button.addEventListener('click', () => {
    window.location.href = 'index.html'; // Navigate back to home
  });
});

// 4. Smooth Scroll Animations for Internal Links (Optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// 5. Optional: Add Page Load Animation
window.addEventListener('load', () => {
  body.classList.add('animate__animated', 'animate__fadeIn'); // Apply fade-in animation on page load
});
// Add this to your script.js file
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for your message, ' + name + '!');
        form.reset(); // Reset the form
    } else {
        alert('Please fill out all fields.');
    }
});
// Add this script in your script.js file
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
