// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Add an event listener to the form
    const supportForm = document.getElementById('support-form');

    if (supportForm) {
        supportForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the form from submitting

            // Get values from the form
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Perform basic validation (you can add more robust validation)
            if (name && email && message) {
                // Display a confirmation message
                alert(`Thank you, ${name}! Your message has been received.`);
            } else {
                alert('Please fill in all fields.');
            }
        });
    }
});
