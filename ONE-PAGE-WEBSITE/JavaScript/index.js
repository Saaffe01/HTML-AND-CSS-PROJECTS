
const modal = document.getElementById("lightboxModal");
const modalImg = document.getElementById("modalImg");
const targets = document.querySelectorAll(".lightbox-target");
const closeBtn = document.querySelector(".close");


// opens the image in a modal when the user clicks on it
targets.forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
    });
});

// closes the image that shows up when the user clicks on the close button or outside the image
closeBtn.onclick = function() {
    modal.style.display = "none";
};

// closes the image that shows up when the user clicks outside the image
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};