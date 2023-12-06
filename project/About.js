document.addEventListener('DOMContentLoaded', function () {
    // Function to create and append a button to the "About Us" section
    function addInteractiveButton() {
        const aboutSection = document.querySelector('section');

        // Create a button element
        const interactiveButton = document.createElement('button');
        interactiveButton.textContent = 'Click me!';
        
        // Style the button for better visibility
        interactiveButton.style.padding = '10px';
        interactiveButton.style.fontSize = '16px';
        interactiveButton.style.cursor = 'pointer';

        // Add a click event listener to the button
        interactiveButton.addEventListener('click', function () {
            // Change the background color of the entire page when the button is clicked
            document.body.style.backgroundColor = getRandomColor();
        });

        // Append the button to the section
        aboutSection.appendChild(interactiveButton);
    }

    // Function to generate a random hex color code
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Call the function to add the interactive button
    addInteractiveButton();
});
