// Open Video in Modal with a smooth transition
function openVideo(videoName) {
    const modal = document.getElementById('video-modal');
    const modalVideo = document.getElementById('modal-video');
    const modalContent = document.querySelector('.modal-content');

    // Fade in the modal with a smooth effect
    modal.style.display = "flex";
    modal.classList.add('fade-in');

    // Set video source dynamically based on the clicked card
    modalVideo.src = videoName + '.mp4';
    modalVideo.play();

    // Add a slight zoom-in effect for the modal content
    modalContent.classList.add('zoom-in');
}

// Close the Modal when clicking on the background or close button
function closeVideo() {
    const modal = document.getElementById('video-modal');
    const modalVideo = document.getElementById('modal-video');
    const modalContent = document.querySelector('.modal-content');

    // Fade out the modal with a smooth effect
    modal.classList.remove('fade-in');
    modal.classList.add('fade-out');

    // Remove zoom-in effect
    modalContent.classList.remove('zoom-in');
    modalContent.classList.add('zoom-out');

    // Wait for the animation to finish before hiding the modal
    setTimeout(() => {
        modal.style.display = "none";
        modalVideo.pause();
        modalVideo.src = "";  // Reset video source to stop it
        modal.classList.remove('fade-out');
        modalContent.classList.remove('zoom-out');
    }, 400); // Time duration of fade-out and zoom-out effect
}

// Close the modal when clicking anywhere outside the modal content (background click)
document.getElementById('video-modal').addEventListener('click', function(event) {
    if (event.target === this) {
        closeVideo();
    }
});
