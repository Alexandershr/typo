function submitFeedback(event) {
    event.preventDefault(); // Prevent the form from submitting

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var review = document.getElementById('review').value;
    var rating = document.getElementById('rating').value;

    // Simple form validation
    if (name && email && review) {
        var feedbackMessage = "Thank you, " + name + "! Your feedback has been submitted with a rating of " + rating + " stars.";
        displayFeedback(feedbackMessage);

        // Simulate email submission (in a real scenario, you would send data to a server)
        simulateEmailSubmission(name, email, review, rating);

        // Reset the form
        document.getElementById('feedbackForm').reset();
    } else {
        alert("Please fill in all required fields.");
    }
}

function displayFeedback(message) {
    var feedbackDisplay = document.getElementById('feedbackDisplay');
    var feedbackElement = document.createElement('p');
    feedbackElement.textContent = message;
    feedbackDisplay.appendChild(feedbackElement);
}

function simulateEmailSubmission(name, email, review, rating) {
    // Simulate email submission (replace with actual code for server communication)
    console.log("Simulating email submission:");
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Review: " + review);
    console.log("Rating: " + rating);
}
