let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');
const totalImages = images.length;
const imagesToShow = 5; // Number of images visible at a time
const imageWidth = 100 / imagesToShow; // Percentage width of each image

function moveToNextImage() {
    // Move to the next image
    currentIndex = (currentIndex + 1) % (totalImages - imagesToShow + 1);  // Loop back after reaching the last group of images
    document.querySelector('.carousel').style.transform = `translateX(-${currentIndex * imageWidth}%)`;
}

// Move the carousel every 3 seconds
setInterval(moveToNextImage, 3000);