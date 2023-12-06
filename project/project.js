document.addEventListener('DOMContentLoaded', function () {
    // Image Gallery
    const imageUrls = [
        'image1.jpg', // replace with actual image URLs
        'image2.jpg',
        'image3.jpg'
    ];
    let currentImageIndex = 0;

    const galleryContainer = document.getElementById('galleryContainer');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const addImageButton = document.getElementById('addImageButton');
    const removeImageButton = document.getElementById('removeImageButton');

    function displayCurrentImage() {
        galleryContainer.innerHTML = `<img src="${imageUrls[currentImageIndex]}" alt="Gallery Image">`;
    }

    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
        displayCurrentImage();
    }

    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + imageUrls.length) % imageUrls.length;
        displayCurrentImage();
    }

    function addImage() {
        const imageUrl = prompt('Enter the image URL:');
        if (imageUrl) {
            imageUrls.push(imageUrl);
            displayCurrentImage();
        }
    }

    function removeImage() {
        if (imageUrls.length > 1) {
            imageUrls.splice(currentImageIndex, 1);
            currentImageIndex = Math.min(currentImageIndex, imageUrls.length - 1);
            displayCurrentImage();
        } else {
            alert('Cannot remove the last image.');
        }
    }

    prevButton.addEventListener('click', showPrevImage);
    nextButton.addEventListener('click', showNextImage);
    addImageButton.addEventListener('click', addImage);
    removeImageButton.addEventListener('click', removeImage);

    // Form Validation
    const orderForm = document.getElementById('orderForm');
    const orderButton = document.getElementById('orderButton');

    orderButton.addEventListener('click', function () {
        const userName = document.getElementById('userName').value.trim();
        const color = document.getElementById('color').value;

        if (userName === '' || userName.length < 6 || !/[a-zA-Z]/.test(userName) || !/\d/.test(userName)) {
            alert('Invalid name. It must not be blank, have at least 6 characters, and include at least one letter and one number.');
        } else {
            const greeting = document.createElement('p');
            greeting.innerHTML = `Hello, ${userName}!`;
            greeting.style.color = color;
            document.getElementById('formContainer').appendChild(greeting);
        }
    });
});
