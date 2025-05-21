// Menu toggle functionality
let navLinks = document.querySelector(".nav-links");
let openBtn = document.querySelector(".fa-bars");
let closeBtn = document.querySelector(".fa-times");

// Show menu
openBtn.addEventListener("click", () => {
  navLinks.style.right = "0";
});

// Hide menu
closeBtn.addEventListener("click", () => {
  navLinks.style.right = "-200px";
});

// Hide navLinks if clicking outside of it or the menu button
document.addEventListener("click", (event) => {
  const isClickInsideNav = navLinks.contains(event.target);
  const isClickOnOpenBtn = openBtn.contains(event.target);

  if (!isClickInsideNav && !isClickOnOpenBtn) {
    navLinks.style.right = "-200px";
  }
});

function openModal(imgElement) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const caption = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = imgElement.src;
  caption.textContent = imgElement.alt;
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}

// Optional: Close modal if you click outside the image
window.onclick = function(event) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");

  if (event.target === modal && event.target !== modalImg) {
    closeModal();
  }
}



    buttons.forEach(button => {
      button.addEventListener("click", function () {
        const blogPost = this.closest(".blog-post");
        const shortText = blogPost.querySelector(".short-text");
        const fullText = blogPost.querySelector(".full-text");

        if (fullText.style.display === "none" || fullText.style.display === "") {
          fullText.style.display = "block";
          shortText.style.display = "none";
          this.textContent = "Read Less";
        } else {
          fullText.style.display = "none";
          shortText.style.display = "block";
          this.textContent = "Read More";
        }
      });
    });