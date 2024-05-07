function openImageModal(imageSrc) {
    var modal = document.getElementById('imageModal');
    var modalImg = document.getElementById('modalImage');

    modal.style.display = 'block';
    modalImg.src = imageSrc;
}

// Function to close the modal
function closeImageModal() {
    var modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    var modal = document.getElementById('imageModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

var images = ['images/content-02.png', 'images/main-02.png', 'images/needle-02.png', 'images/travel-02.png'];
var currentIndex = 0;

function openImageModal(imageSrc) {
    var modal = document.getElementById('imageModal');
    var modalImg = document.getElementById('modalImage');

    modal.style.display = 'block';
    modalImg.src = imageSrc;
}

function closeImageModal() {
    var modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById('modalImage').src = images[currentIndex];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('modalImage').src = images[currentIndex];
}
